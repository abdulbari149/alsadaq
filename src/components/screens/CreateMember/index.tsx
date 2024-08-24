"use client";
import member from "@/api/member";
import { type CreateMember, createMemberSchema } from "@/lib/schema";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ZodFormattedError } from "zod";


type FormState = Record<
	keyof CreateMember,
	{ value: string; error: string }
>;

const initialData: FormState = {
	name: { value: "", error: "" },
	email: { value: "", error: "" },
};

const CreateMember: React.FC = () => {
	const [data, setData] = useState<FormState>(initialData);
	const [loading, setLoading] = useState(false);

	const handleChange = (key: keyof FormState) => async (e: any) => {
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



	const transformValues = <
		T extends Record<string, { value: string; error?: string }>,
		R extends { [K in keyof T]: string }
	>(
		data: T
	) => {
		const values = Object.fromEntries(
			Object.keys(data).map((key) => {
				const typedKey = key as keyof T;
				let value = data[typedKey].value;
				return [typedKey, value];
			})
		);

		return values as R;
	};

	const validateData = async () => {
		const values = transformValues(data);
		const result = await createMemberSchema.safeParseAsync(values);
		let errors:
			| undefined
			| ZodFormattedError<{ [K in keyof FormState]: string }> = undefined;
		if (!result.success) {
			errors = result.error.format();
		}

		return errors;
	};

	const setErrors = (
		errors: ZodFormattedError<{ [K in keyof FormState]: string }>
	) => {
		setData((prev) => {
			const newData = Object.fromEntries(
				Object.keys(errors)
					.filter((key) => key !== "_errors")
					.map((key) => {
						const errorKey = key as keyof FormState;
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
		
			const values = transformValues(data);
		
      const result = await member.create({
        name: values.name,
        email: values.email,
			});
			setLoading(false);
			setData({ ...initialData });
			toast.success(`Member created successfully!`);
		} catch (error) {
			setLoading(false);
			toast.error((error as Error)?.message);
		}
	};



	console.log("data: ", data);

	return (
		<div className="px-10 pt-[5vh] w-[100%] overflow-x-hidden">
			<h1 className="text-[32px] text-primary-content font-bold">
				Create Member
			</h1>

			<div className="flex flex-col gap-5 w-[100%] mt-4">
				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">Name</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							value={data.name.value}
							onChange={handleChange("name")}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
					{data.name.error && (
						<p className="text-red-500 text-[12px]">{data.name.error}</p>
					)}
				</div>

				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">
						Email
					</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							value={data.email.value}
							onChange={handleChange("email")}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
					{data.email.error && (
						<p className="text-red-500 text-[12px]">
							{data.email.error}
						</p>
					)}
				</div>

				<button
					className="w-[100%] py-2 px-5 rounded-sm bg-secondary font-semibold text-[16px] text-white mb-5 disabled:opacity-60"
					disabled={loading}
					onClick={handleSubmit}
				>
					Create
				</button>
			</div>
		</div>
	);
};

export default CreateMember;
