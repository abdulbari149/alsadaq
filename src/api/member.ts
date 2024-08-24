import { CreateMember } from "@/lib/schema";
import router from "./router";
import { normalizeError } from "./error";

const createMember = async (data: CreateMember) => {
  try {
    const response = await router.private.post(
      "/member",
      data
    );

    if (!response.data.success) {
      throw new Error(response?.data?.error ?? "");
    }
    return response.data.data;
  } catch (error) {
    throw normalizeError(error);
  }
};

export default {
  create: createMember,
}