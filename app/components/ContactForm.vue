<script setup lang="ts">
import type {
  ContactRequest,
  ContactResponse
} from '../../shared/types/contact'

const form = reactive<ContactRequest>({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const resultMessage = ref('')
const errorMessage = ref('')

async function submitContact(): Promise<void> {
  loading.value = true
  resultMessage.value = ''
  errorMessage.value = ''

  try {
    const result = await $fetch<ContactResponse>('/api/contact', {
      method: 'POST',
      body: form
    })

    resultMessage.value = `${result.message}，编号：${result.requestId}`

    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error: unknown) {
    const fetchError = error as {
      data?: {
        statusMessage?: string
      }
    }

    errorMessage.value =
      fetchError.data?.statusMessage ?? '提交失败，请稍后重试'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UCard>
    <form class="space-y-5" @submit.prevent="submitContact">
      <UFormField label="姓名" required>
        <UInput
          v-model="form.name"
          class="w-full"
          placeholder="请输入姓名"
        />
      </UFormField>

      <UFormField label="邮箱" required>
        <UInput
          v-model="form.email"
          type="email"
          class="w-full"
          placeholder="your@email.com"
        />
      </UFormField>

      <UFormField label="留言" required>
        <UTextarea
          v-model="form.message"
          class="w-full"
          :rows="6"
          placeholder="请输入留言内容"
        />
      </UFormField>

      <UButton
        type="submit"
        block
        :loading="loading"
        label="提交留言"
      />

      <UAlert
        v-if="resultMessage"
        color="success"
        :description="resultMessage"
      />

      <UAlert
        v-if="errorMessage"
        color="error"
        :description="errorMessage"
      />
    </form>
  </UCard>
</template>
