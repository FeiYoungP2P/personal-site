export interface ContactRequest {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  requestId: string
  message: string
}
