/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { create } from 'zustand'
import { AuthService } from '@lib/auth-service'
import * as SecureStore from 'expo-secure-store'

export const TOKEN_KEY = 'token'

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
  signOut: () => Promise<void>
  signInBrute: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: SecureStore.getItem(TOKEN_KEY),
  loading: false,
  error: null,
  signIn: async (credentials: ILoginFormInput) => {
    set({ loading: true })
    set({ error: null })
    try {
      const response = await auth.getUserToken(credentials)

      if (response !== null) {
        set({ token: response })
        await SecureStore.setItemAsync(TOKEN_KEY, response)
      }
    } catch (error) {
      set({ error: (error as Error).message })
    } finally {
      set({ loading: false })
    }
  },
  signOut: async () => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY)
    } catch (error) {
      console.log('Error deleting token', error)
    }
    set({ token: null })
  },
  signInBrute: async () => {
    set({ token: 'not null' })
    try {
      await SecureStore.setItemAsync(TOKEN_KEY, 'not null')
    } catch (error) {
      console.log('Error setting token', error)
    }
  }
}))
