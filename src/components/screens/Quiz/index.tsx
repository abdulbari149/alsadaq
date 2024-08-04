"use client";

import assets from "@/assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const options = [
	{ id: 1, value: "Red and white or black and white" },
	{ id: 2, value: "Red and black" },
	{ id: 3, value: "Green" },
	{ id: 4, value: "Any color" },
];

const QuizPage = () => {
	const [selectedOption, setSelectedOption] = useState<{
		id: number;
		value: string;
	} | null>(null);

	return (
		<div className="relative px-[8%] w-100 my-[4rem]">
			<div className="flex flex-col flex-1 gap-6">
				<p className="p-3 px-4 bg-primary rounded-3xl text-white w-fit text-[16px] font-semibold">
					Question 01
				</p>
				<p className="text-[24px] leading-9">
					The kuffiye is a Palestinian scarf which has come to have symbolic
					value as representing Palestinian identity and their struggle to stay
					on their land. In the past few years, a scarf modeled on it has been
					selling in shops like Top Shop and Urban Outfitters and worn by stars
					who often don’t know what the original kuffiye is:
				</p>

				<div className="flex flex-col gap-4">
					{options.map((option, index) => {
						const isSelected =
							selectedOption && option.id === selectedOption.id;
						return (
							<div
								className="w-100 p-3 cursor-pointer border border-input transition-all rounded-md flex flex-row items-center gap-4"
								key={option.id}
								onClick={() => {
									if (selectedOption && option.id === selectedOption.id) {
										return setSelectedOption(null);
									}
									setSelectedOption(option);
								}}
							>
								<p
									className={cn(
										"w-[3.4rem] h-[3.4rem] flex  text-[20px] items-center justify-center bg-[#F2F5F6] rounded-md font-bold",
										{
											"bg-primary text-white": isSelected,
										}
									)}
								>
									{String.fromCharCode(index + 65)}
								</p>
								<p className="text-black text-[20px] font-semibold">
									{option.value}
								</p>
								{isSelected && (
									<div className="ml-auto mr-2">
										<Image src={assets.icons.tick} alt="tick icon" />
									</div>
								)}
							</div>
						);
					})}
				</div>

				<div className="flex justify-between">
					<Button
						size={"lg"}
						variant="secondary"
						disabled
						className="px-10 py-7 text-[16px] disabled:text-[#9EA9AA] disabled:opacity-1 disabled:bg-[#E9EDEE]"
					>
						Previous
					</Button>
					<Button
						size={"lg"}
						variant="secondary"
						className="px-10 py-7 text-[16px] disabled:text-[#9EA9AA] disabled:opacity-1 disabled:bg-[#E9EDEE]"
					>
						Next
					</Button>
				</div>

				<div className="flex flex-row my-5 items-center pl-3 pr-20 py-3 rounded-xl gap-2 bg-primary/10 w-fit">
					<Image src={assets.icons.tickSm} alt="correct" />
					<p className="text-[16px] font-normal text-[#4F7434]">
						A is a correct answer.
					</p>
				</div>

				<div className='text-left flex flex-col gap-4'> 
					<h3 className="text-[28px] text-black font-semibold">Details:</h3>
					<p className="text-[18px] font-normal">
						{`The colors of a keffiyeh (also called kufiya or shemagh) traditionally don't have a specific meaning, but there are two main reasons for the variations in color:

1. Regional Traditions: In some regions, specific colors are more common. For example:
  - Black and White: This is the most widespread pattern, especially linked to Palestinians.
  - Red and White: More popular in Jordan, particularly in the south.
  - Plain White: Common across the Arab world, especially among Bedouins.
2. Modern Political Associations: More recently, some colors have become associated with specific Palestinian political groups:
  - Black and White: Often linked to Fatah, a major Palestinian political party.
  -Red and White: Sometimes associated with Palestinian Marxist groups.

It&apos;s important to note that these associations are loose and not universally followed. People wear keffiyehs of various colors for various reasons.`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default QuizPage;
