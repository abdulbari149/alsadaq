import { z } from "zod";
import PasswordValidator from 'password-validator';

const validator = new PasswordValidator()
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase(1)
  .has()
  .lowercase(1)
  .has()
  .digits(2)
  .has()
  .symbols(1)
  .has()
  .not()
  .spaces();

const createMember = z.object({
  name: z.string({ required_error: 'name is required' }),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
})

export type CreateMemberSchema = z.infer<typeof createMember>;

const memberValidator = {
  create: createMember,
}

export default memberValidator