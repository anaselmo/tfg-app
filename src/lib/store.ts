import { create } from 'zustand'
import { AuthService } from '@lib/auth-service'

const auth = new AuthService()

export interface ILoginFormInput {
  email: string
  password: string
}

interface AuthStore {
  token: string | null
  loading: boolean
  error: string | null
  signIn: (credentials: ILoginFormInput) => Promise<void>
  signOut: () => void
  signInBrute: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  loading: false,
  error: null,
  signIn: async (credentials: ILoginFormInput) => {
    set({ loading: true })
    set({ error: null })
    try {
      const response = await auth.getUserToken(credentials)

      if (response !== null) {
        set({ token: response })
      }
    } catch (error) {
      set({ error: (error as Error).message })
    } finally {
      set({ loading: false })
    }
  },
  signOut: () => {
    set({ token: null })
  },
  signInBrute: () => {
    set({ token: 'not null' })
  }
}))
