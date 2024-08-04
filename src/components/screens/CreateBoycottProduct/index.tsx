"use client";
import boycottProduct from "@/api/product";
// import ticket, { SupportTicketDocument } from "@/api/ticket";
import { type CreateBoycottProduct, createBoycottProduct } from "@/lib/schema";
import { User } from "@prisma/client";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { ZodFormattedError } from "zod";

// type FormState = {
// 	title: { value: string; error: string };
// 	description: { value: any; error: string };
// };

type FormState = Record<
	keyof CreateBoycottProduct,
	{ value: string; error: string }
>;

const initialData: FormState = {
	boycottProductName: { value: "", error: "" },
	alternateProductName: { value: "", error: "" },
	category: { value: "", error: "" },
};

const CreateBoycottProduct: React.FC<{ user: Omit<User, "password"> }> = ({
	user,
}) => {
	const [data, setData] = useState<FormState>(initialData);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

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

	const imageRefs = useRef<
		Record<"boycott" | "alternate", HTMLInputElement | null>
	>({
		boycott: null,
		alternate: null,
	});

	const setImageRef = (key: keyof (typeof imageRefs)["current"]) => {
		return (el: HTMLInputElement | null) => {
			imageRefs.current[key] = el;
		};
	};

	const clearImages = () => {
		if (imageRefs.current.alternate) {
			imageRefs.current.alternate.value = "";
		}
		if (imageRefs.current.boycott) {
			imageRefs.current.boycott.value = "";
		}
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
				if (typedKey === "description") {
					value =
						(value as any)?.ops && (value as any)?.ops?.length > 0
							? (value as any)?.ops[0].insert
							: "";
				}
				return [typedKey, value];
			})
		);

		return values as R;
	};

	const validateData = async () => {
		const values = transformValues(data);
		const result = await createBoycottProduct.safeParseAsync(values);
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
			if (
				!imageRefs.current.boycott ||
				!imageRefs.current.alternate ||
				!imageRefs.current.alternate.files ||
				!imageRefs.current.boycott.files
			) {
				setLoading(false);
				return;
			}

			const alternateFile = imageRefs.current.alternate.files[0];
			const boycottFile = imageRefs.current.boycott.files[0];

			const [alternateImage, boycottImage] = await Promise.all([
				boycottProduct.upload(alternateFile),
				boycottProduct.upload(boycottFile),
			]);

			const values = transformValues(data);
			const result = await boycottProduct.create({
				category: values.category,
				alternateImage: alternateImage[0].url,
				alternateName: values.alternateProductName,
				boycottImage: boycottImage[0].url,
				boycottName: values.boycottProductName,
			});
			setLoading(false);
			setData({ ...initialData });
			clearImages();
			router.replace("/dashboard");
			toast.success(`Boycott Product created successfully!`);
		} catch (error) {
			setLoading(false);
			toast.error((error as Error)?.message);
		}
	};

	console.log("data: ", data);

	return (
		<div className="px-10 pt-[5vh] w-[100%] overflow-x-hidden">
			<h1 className="text-[32px] text-primary-content font-bold">
				Create New Boycott Product
			</h1>

			<div className="flex flex-col gap-5 w-[100%] mt-4">
				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">Category</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							value={data.category.value}
							onChange={handleChange("category")}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
					{data.category.error && (
						<p className="text-red-500 text-[12px]">{data.category.error}</p>
					)}
				</div>

				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">
						Boycott Product Name
					</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							value={data.boycottProductName.value}
							onChange={handleChange("boycottProductName")}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
					{data.boycottProductName.error && (
						<p className="text-red-500 text-[12px]">
							{data.boycottProductName.error}
						</p>
					)}
				</div>

				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">
						Boycott Product Image
					</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="file"
							ref={setImageRef("boycott")}
							accept="image/*"
							max={1}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
				</div>

				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">
						Alternate Product Name
					</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="text"
							value={data.alternateProductName.value}
							onChange={handleChange("alternateProductName")}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
					{data.alternateProductName.error && (
						<p className="text-red-500 text-[12px]">
							{data.alternateProductName.error}
						</p>
					)}
				</div>

				<div className="w-100 space-y-2">
					<p className="font-semibold text-[16px] text-[#000000]">
						Alternate Product Image
					</p>
					<div className="w-100 flex items-center gap-1">
						<input
							type="file"
							ref={setImageRef("alternate")}
							accept="image/*"
							max={1}
							className="w-[100%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
						/>
						<p className="text-[18px] text-[#000000]">*</p>
					</div>
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

export default CreateBoycottProduct;
