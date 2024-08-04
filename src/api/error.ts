import { AxiosError } from "axios";

export const normalizeError = (error: unknown) => {
  if (error instanceof AxiosError) {
    return new Error(error.response?.data.error);
  }
  if (error instanceof Error) {
    return new Error(error.message);
  }
  return new Error('Something went wrong!');
}