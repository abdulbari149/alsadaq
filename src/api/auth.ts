import { loginSchema, signupSchema } from "@/lib/schema";
import { z } from "zod";
import router from "./router";
import { AxiosError } from "axios";
import { User } from "@prisma/client";
import {
	AuthLoginResponse,
	AuthLogoutResponse,
	AuthMeResponse,
	AuthSignupResponse,
} from "@/types/response.type";
import { normalizeError } from "./error";

const signup = async (
	body: z.infer<typeof signupSchema> & { plan: number }
) => {
	try {
		const {
			confirmEmail: _confirmEmail,
			confirmPassword: _confirmPassword,
			...data
		} = body;

		const response = await router.public.post<AuthSignupResponse>(
			"/auth/signup",
			data
		);

		if (!response.data.success) {
			throw new Error(response.data.error ?? "");
		}
		return response.data.data;
	} catch (error) {
		throw normalizeError(error)
	}
};

const login = async (body: z.infer<typeof loginSchema>) => {
	try {
		const response = await router.public.post<AuthLoginResponse>(
			"/auth/login",
			body
		);

		if (!response.data.success) {
			throw new Error(response.data.error ?? "");
		}
		return response.data.data;
	} catch (error) {
		throw normalizeError(error)
	}
};

const me = async (accessToken: string) => {
	try {
		const response = await router.public.get<AuthMeResponse>("/auth/me", {
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		if (!response.data.success) {
			throw new Error(response?.data?.error ?? "");
		}
		return response.data.data;
	} catch (error) {
		throw normalizeError(error)
	}
};
const logout = async () => {
	try {
		const response = await router.private.get<AuthLogoutResponse>(
			"/auth/logout"
		);

		if (!response.data.success) {
			throw new Error(response.data.error ?? "");
		}
		return response.data.message;
	} catch (error) {
		throw normalizeError(error)
	}
};

const auth = {
	signup,
	login,
	me,
	logout,
};

export default auth;
