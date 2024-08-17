"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { donationSchema, DonationSchema } from "@/lib/schema";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

type DonationFormComponent = (props: {}) => JSX.Element;

const stepsContent = {
	1: {
		header: {
			title: "Card Details",
			description: "Enter your card details.",
		},
		button: "Next",
	},
	2: {
		header: {
			title: "Donate",
			description:
				"Help us provide essential aid to families, children, and communities.",
		},
		button: "Donate",
	},
} as const;

type StepProps = {
	form: UseFormReturn<DonationSchema, any, undefined>;
};

const CardDetailsStep = (props: StepProps) => {
	const { form } = props;
	return (
		<>
			<FormField
				control={form.control}
				name="cardHolderName"
				render={({ field }) => {
					return (
						<div className="flex flex-col gap-1">
							<Label className="text-primary-content font-normal text-[16px]">
								Cardholder Name
								<span className="text-red-800">*</span>
							</Label>
							<Input {...field} placeholder="Enter name on your card" />
						</div>
					);
				}}
			/>
			<FormField
				control={form.control}
				name="cardNumber"
				render={({ field }) => {
					return (
						<div className="flex flex-col gap-1">
							<Label className="text-primary-content font-normal text-[16px]">
								Card Number
								<span className="text-red-800">*</span>
							</Label>
							<Input {...field} placeholder="4111 1111 1111 1111" />
						</div>
					);
				}}
			/>

			<div className="flex flex-row gap-4">
				<FormField
					control={form.control}
					name="expiration"
					render={({ field }) => {
						return (
							<div className="flex flex-col gap-1">
								<Label className="text-primary-content font-normal text-[16px]">
									Expiration
									<span className="text-red-800">*</span>
								</Label>
								<Input {...field} placeholder="MM/YY" />
							</div>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="cvv"
					render={({ field }) => {
						return (
							<div className="flex flex-col gap-1">
								<Label className="text-primary-content font-normal text-[16px]">
									CVV
									<span className="text-red-800">*</span>
								</Label>
								<Input {...field} placeholder="587" />
							</div>
						);
					}}
				/>
			</div>

			<FormField
				control={form.control}
				name="postalCode"
				render={({ field }) => {
					return (
						<div className="flex flex-col gap-1">
							<Label className="text-primary-content font-normal text-[16px]">
								Postal code
								<span className="text-red-800">*</span>
							</Label>
							<Input {...field} placeholder="Postal or zip code" />
						</div>
					);
				}}
			/>
		</>
	);
};
const DonateStep = (props: StepProps) => {
	const { form } = props;
	return (
		<>
			<FormField
				control={form.control}
				name="fullName"
				render={({ field }) => {
					return (
						<div className="flex flex-col gap-1">
							<Label className="text-primary-content font-normal text-[16px]">
								Full Name
								<span className="text-red-800">*</span>
							</Label>
							<Input {...field} placeholder="Enter full name" />
						</div>
					);
				}}
			/>
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => {
					return (
						<div className="flex flex-col gap-1">
							<Label className="text-primary-content font-normal text-[16px]">
								Email Address
								<span className="text-red-800">*</span>
							</Label>
							<Input {...field} placeholder="Enter email address" />
						</div>
					);
				}}
			/>

			<FormField
				control={form.control}
				name="amount"
				render={({ field }) => {
					return (
						<div className="flex flex-col gap-1">
							<Label className="text-primary-content font-normal text-[16px]">
								Amount
								<span className="text-red-800">*</span>
							</Label>
							<Input {...field} placeholder="Enter amount" />
						</div>
					);
				}}
			/>
		</>
	);
};

const FormStepComponents = {
	1: CardDetailsStep,
	2: DonateStep,
} as Record<1 | 2, (props: StepProps) => JSX.Element>;

const DonationForm: DonationFormComponent = (props) => {
	const [currentStep, setCurrentStep] = useState<1 | 2>(1);

	const form = useForm<DonationSchema>({
		resolver: zodResolver(donationSchema),
	});

	function onSubmit(data: DonationSchema) {
		// toasterUtils.success({
		//   message: "Sign up successful",
		//   description: "You have successfully signed up.",
		// });
	}

	const content = stepsContent[currentStep];
	const StepComponent = FormStepComponents[currentStep];

	return (
		<div className="absolute top-[20%] right-[10%] flex flex-col z-[100] shadow-lg bg-white w-[30vw] rounded-lg px-7 py-6 ml-[110px] self-start">
			<div className="flex flex-row items-start justify-between">
				<div className="flex flex-col gap-2 mb-5">
					<div className="space-x-2 flex flex-row items-center">
						{currentStep === 2 ? (
							<ArrowLeft className="text-stone-500 cursor-pointer" onClick={() => setCurrentStep(1)} />
						) : null}
						<h2 className="text-2xl font-semibold">{content.header.title}</h2>
					</div>

					<h3 className="text-md font-normal text-stone-500">
						{content.header.description}
					</h3>
				</div>

				<div className="flex my-3 gap-1">
					{Array(2)
						.fill(0)
						.map((_, i) => i + 1)
						.map((step) => (
							<span
								onClick={() => setCurrentStep(step as 1 | 2)}
								key={step}
								className={cn(
									"w-8 cursor-pointer bg-[#E9EDEE] h-1 rounded-md",
									{
										"bg-background": currentStep === step,
									}
								)}
							></span>
						))}
				</div>
			</div>

			<Form {...form}>
				<form
					onSubmit={(e) => {
						if (currentStep === 1) {
							e.preventDefault();
							return setCurrentStep(2);
						}
						return form.handleSubmit(onSubmit)(e);
					}}
					className="space-y-2 gap-y-2 flex flex-col w-full"
				>
					<StepComponent form={form} />
					<Button
						className="max-sm:w-full text-base font-semibold"
						type="submit"
						size="lg"
						variant={"secondary"}
						disabled={form.formState.isSubmitting}
					>
						{content.button}
					</Button>
				</form>
			</Form>

			{currentStep === 2 && <p className="px-2 text-center  text-[18px] pt-4 text-stone-500">We&apos;ll never share your information with anyone.</p>}
		</div>
	);
};

export default DonationForm;
