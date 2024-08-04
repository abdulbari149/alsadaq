import { z } from "zod";

const createBoycottProduct = z.object({
  boycottName: z.string(),
  boycottImage: z.string(),
  alternateName: z.string(),
  alternateImage: z.string(),
  category: z.string(),
})
export type CreateBoycottProductSchema = z.infer<typeof createBoycottProduct>

const boycottProductValidator = {
  create: createBoycottProduct
}

export default boycottProductValidator;