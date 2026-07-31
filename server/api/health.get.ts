export default defineEventHandler(() => {
  return {
    success: true,
    service: 'personal-site',
    timestamp: new Date().toISOString()
  }
})
