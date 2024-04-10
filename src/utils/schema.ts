import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z.coerce.string().min(10),
});

export type LoginSchema = z.infer<typeof loginSchema>;

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
