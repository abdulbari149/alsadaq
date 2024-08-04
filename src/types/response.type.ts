import { Prisma, Product, User } from "@prisma/client";

export type ApiSuccessResponse<TData = unknown> = {
  data: TData;
  error: null;
  success: true;
  message?: string;
};

export type ApiErrorResponse = {
  data: null;
  error: string;
  success: false;
};

export type ApiResponse<TData = unknown> = ApiSuccessResponse<TData> |
  ApiErrorResponse;

export type CreateBoycottProductResponse = ApiResponse<
  Omit<Prisma.$ProductPayload["scalars"], "deletedAt">
>;

export type UploadBoycottProductResponse = ApiResponse<
  Array<{ url: string; size: number; name: string; }>
>;
export type ListBoycottProductsResponse = ApiResponse<Omit<Product, 'deletedAt'>[]>

export type AuthMeResponse = ApiResponse<{
  user: Omit<User, 'password'>
  credentials: { id: number; email: string; username: string; role: string }
}>

export type AuthLogoutResponse = ApiResponse<undefined>
export type AuthLoginResponse = ApiResponse<Omit<User, 'password'>>
export type AuthSignupResponse = ApiResponse<Omit<User, 'password'>>
