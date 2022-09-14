declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      MONGODB_CONNECTION_STRING: string
      TWILIO_ACCOUNT_SID: string
      TWILIO_AUTH_TOKEN: string
      PORT: number
    }
  }
}

export {}
