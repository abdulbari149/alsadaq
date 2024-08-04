"use client";
import auth from "@/api/auth";
import { loginSchema } from "@/lib/schema";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { ZodFormattedError } from "zod";

type FormData = {
	usernameOrEmail: { value: string; error: string };
	password: { value: string; error: string };
};

const initialData: FormData = {
	usernameOrEmail: { value: "", error: "" },
	password: { value: "", error: "" },
};

const Login = () => {
	const router = useRouter();

	const [showPassword, setShowPassword] = useState({
		password: false,
	});

	const [data, setData] = useState<FormData>(initialData);

	const [loading, setLoading] = useState(false);

	const handleChange = (key: keyof FormData) => async (e: any) => {
		setData((prev) => {
			return {
				...prev,
				[key]: {
					value: e.target.value,
					error: "",
				},
			};
		});
	};

	const togglePassword = (key: keyof typeof showPassword) => {
		return () => {
			setShowPassword((prev) => {
				return {
					...prev,
					[key]: !prev[key],
				};
			});
		};
	};

	const transformValues = <
		T extends Record<string, { value: string; error?: string }>,
		R extends { [K in keyof T]: string }
	>(
		data: T
	) => {
		const values = Object.fromEntries(
			Object.keys(data).map((key) => {
				const typedKey = key as keyof T;
				return [typedKey, data[typedKey].value];
			})
		);

		return values as R;
	};

	const validateData = async () => {
		const signupData = transformValues(data);
		const result = await loginSchema.safeParseAsync(signupData);
		let errors:
			| undefined
			| ZodFormattedError<{ [K in keyof FormData]: string }> = undefined;
		if (!result.success) {
			errors = result.error.format();
		}

		return errors;
	};

	const setErrors = (
		errors: ZodFormattedError<{ [K in keyof FormData]: string }>
	) => {
		setData((prev) => {
			const newData = Object.fromEntries(
				Object.keys(errors)
					.filter((key) => key !== "_errors")
					.map((key) => {
						const errorKey = key as keyof FormData;
						console.log(key);
						return [
							errorKey,
							{
								value: prev[errorKey].value,
								error: errors[errorKey]?._errors[0] ?? "",
							},
						];
					})
			);

			return { ...prev, ...newData };
		});
	};

	const handleSubmit = async () => {
		try {
			setLoading(true);
			const errors = await validateData();

			if (errors) {
				setLoading(false);
				return setErrors(errors);
			}

			const loginData = transformValues(data);

			const user = await auth.login(loginData);
			setData({ ...initialData });
			setLoading(false);
			toast.success(`Welcome ${user.username}, you are logged in!`);
			router.replace("/dashboard");
		} catch (error) {
			setLoading(false);
			toast.error((error as Error)?.message);
		}
	};

	return (
		<div className="w-[100vw] min-h-[90vh] grid place-items-center">
			<div className="max-w-[600px] w-[100%] bg-white grid place-items-center">
				<h2 className="text-[28px] font-semibold mb-4 text-left w-[100%] text-primary">Login</h2>

				<div className="w-[100%] flex flex-col">
					<div className="w-[100%] space-y-2">
						<p className="font-semibold text-[16px] text-[#000000]">
							Username
						</p>
						<div className="w-[100%] flex flex-1 items-center gap-1">
							<input
								type="text"
								value={data.usernameOrEmail.value}
								onChange={handleChange("usernameOrEmail")}
								className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
							/>
							<p className="text-[18px] text-[#000000]">*</p>
						</div>
						{data.usernameOrEmail.error && (
							<p className="text-red-500 text-[12px]">
								{data.usernameOrEmail.error}
							</p>
						)}
					</div>

					<div className="w-[100%] space-y-2">
						<p className="font-semibold text-[16px] text-[#000000]">Password</p>
						<div className="w-[100%] flex items-center gap-1">
							<div className="border-[1px] flex-1 flex items-center border-stone-300 rounded-md px-2 py-2 ">
								<input
									type={showPassword.password ? "text" : "password"}
									value={data.password.value}
									onChange={handleChange("password")}
									className="w-[100%] outline-none autofill:bg-[#e8f0fe] text-[#000000]"
								/>
								<div
									onClick={togglePassword("password")}
									className="text-[18px] text-[#000000] cursor-pointer focus:outline-none"
								>
									{showPassword.password ? (
										<EyeOff size={18} />
									) : (
										<Eye size={18} />
									)}
								</div>
							</div>
							<p className="text-[18px] text-[#000000]">*</p>
						</div>
						{data.password.error && (
							<p className="text-red-500 text-[12px]">{data.password.error}</p>
						)}
					</div>

					<div className="flex items-center gap-2 mb-5">
						<input type="checkbox" />
						<p className="text-[#000000] text-[16px] font-semibold">
							Remember Me
						</p>
					</div>

					<button
						className="w-fit py-2 px-5 rounded-sm text-[18px] text-white mb-5"
						style={{ background: "rgb(25, 56, 57)" }}
						disabled={loading}
						onClick={handleSubmit}
					>
						Submit
					</button>

					<div
						className="w-100 h-[2px] mt-4"
						style={{ backgroundColor: "rgb(203, 213, 224)" }}
					/>

				</div>
			</div>
		</div>
	);
};

export default Login;
