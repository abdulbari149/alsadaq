import { z } from 'zod'

const signup = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
})

const login = z.object({
  usernameOrEmail: z.string(),
  password: z.string(),
})

export type SignupSchema = z.infer<typeof signup>;
export type LoginSchema = z.infer<typeof login>;

const authValidator = {
  signup,
  login,
}

export default authValidator

