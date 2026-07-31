import { z } from 'zod'
import type {
  ContactRequest,
  ContactResponse
} from '../../app/shared/types/contact'

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, '姓名至少需要2个字符')
    .max(50, '姓名不能超过50个字符'),

  email: z
    .string()
    .trim()
    .email('邮箱格式不正确')
    .max(100, '邮箱不能超过100个字符'),

  message: z
    .string()
    .trim()
    .min(5, '留言至少需要5个字符')
    .max(2000, '留言不能超过2000个字符')
})

export default defineEventHandler(
  async (event): Promise<ContactResponse> => {
    const rawBody = await readBody<ContactRequest>(event)
    const result = contactSchema.safeParse(rawBody)

    if (!result.success) {
      throw createError({
        statusCode: 400,
        statusMessage:
          result.error.issues[0]?.message ?? '提交内容不正确'
      })
    }

    const requestId = crypto.randomUUID()
    const runtimeConfig = useRuntimeConfig(event)

    /*
     * 第一阶段：
     * 没有配置Webhook时，只验证接口是否正常。
     *
     * 第二阶段：
     * 配置Webhook后，可将消息转发到邮件服务、
     * 企业微信机器人或其他通知服务。
     */
    if (runtimeConfig.contactWebhookUrl) {
      await $fetch(runtimeConfig.contactWebhookUrl, {
        method: 'POST',
        body: {
          requestId,
          ...result.data,
          createdAt: new Date().toISOString()
        }
      })
    }

    return {
      success: true,
      requestId,
      message: runtimeConfig.contactWebhookUrl
        ? '留言已发送'
        : '演示模式：表单验证和接口调用已完成'
    }
  }
)
