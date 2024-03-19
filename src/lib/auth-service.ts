import { z } from 'zod'
import axios from 'axios'
import { type ILoginFormInput } from '@lib/store'

export class AuthService {
  private async loginUser ({ email, password }: ILoginFormInput): Promise<string | null> {
    try {
      const response = await axios.post('http://localhost:3001/api/tourists/auth/login', {
        email,
        password
      })
      console.log(`user: ${JSON.stringify({ email, password })}`)
      console.log(`token: ${response.data}`)
      return response.data as string
    } catch (err) {
      console.error('Failed to login user:', err)
      return null
    }
  }

  public async getUserToken (credentials: ILoginFormInput): Promise<string> {
    const parsedCredentials = z
      .object({ email: z.string().email(), password: z.string().min(6) })
      .safeParse(credentials)

    if (!parsedCredentials.success) {
      throw new Error('Invalid credentials')
    }

    const token = await this.loginUser(parsedCredentials.data)
    if (token === null) throw new Error('Invalid credentials')

    return token
  }
}
