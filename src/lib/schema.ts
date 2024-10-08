import { z } from 'zod'

export const signupSchema = z
  .object({
    username: z
      .string({
        required_error: 'Username is required',
        invalid_type_error: 'Username must be string',
      })
      .refine((data) => data !== '', {
        message: 'Username cannot be empty',
      }),
    email: z
      .string({
        required_error: 'Email Address is required',
        invalid_type_error: 'Email Address must be string',
      })
      .email({ message: 'Invalid Email Address' })
      .refine((data) => data !== '', {
        message: 'Email Address cannot be empty',
      }),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be string',
      })
      .refine((data) => data !== '', {
        message: 'Password cannot be empty',
      }),
    confirmPassword: z
      .string({
        required_error: 'Confirm Password is required',
        invalid_type_error: 'Confirm Password must be string',
      })
      .refine((data) => data !== '', {
        message: 'Confirm Password cannot be empty',
      }),
    confirmEmail: z
      .string({
        required_error: 'Confirm Email Address is required',
        invalid_type_error: 'Confirm Email Address must be string',
      })
      .email({ message: 'Invalid Confirm Email Address' })
      .refine((data) => data !== '', {
        message: 'Confirm Email Address cannot be empty',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // Path of error
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails don't match",
    path: ['confirmEmail'], // Path of error
  })

export const loginSchema = z.object({
  usernameOrEmail: z
    .string({
      required_error: 'Username Or Email Address is required',
      invalid_type_error: 'Username Or Email Address must be string',
    })
    .refine((data) => data !== '', {
      message: 'Username Or Email Address cannot be empty',
    }),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be string',
    })
    .refine((data) => data !== '', {
      message: 'Password cannot be empty',
    }),
})


export const donationSchema = z.object({
  cardHolderName: z.string({
    required_error: "Please enter card holder name.",
  })
    .min(10),
  cardNumber: z.string({
    required_error: "Please enter card number",
  }),
  expiration: z.string({
    required_error: 'Please enter expiration in MM/YY'
  }),
  cvv: z.string({
    required_error: 'Please enter cvv'
  }),
  postalCode: z.string({
    required_error: 'Please enter postal code',
  }),
  fullName: z.string(),
  email: z.string(),
  amount: z.number()
});

export type DonationSchema = z.infer<typeof donationSchema>;

export const createBoycottProduct = z.object({
  boycottProductName: z.string({ required_error: 'Boycott Product name is required' }),
  alternateProductName: z.string({ required_error: 'Alternate Product name is required' }),
  category: z.string({ required_error: 'Category is required' }),
})

export type CreateBoycottProduct = z.infer<typeof createBoycottProduct>


export const createMemberSchema = z.object({
  name: z.string({ required_error: 'name is required' }),
  email: z.string({ required_error: 'email is required' }).email({ message: 'invalid email' }),
})

export type CreateMember = z.infer<typeof createMemberSchema>