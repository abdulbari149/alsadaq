import { ZodSchema } from "zod";
import { HttpBadRequestError } from "@/errors";

const validate = async <T>(schema: ZodSchema<T>, data: T): Promise<T> => {
  const result = await schema.safeParseAsync(data);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
};

export default validate;
