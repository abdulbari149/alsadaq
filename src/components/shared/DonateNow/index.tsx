"use client";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const DonateNow: React.FC<ButtonProps> = (props) => {
	return (
		<Button
			{...props}
			onClick={() => {
				window.open(
					"https://oneummah.org.uk/appeals/gaza-emergency-appeal/",
					"_blank"
				);
			}}
			className={cn("cursor-pointer", props.className)}
		>
			Donate Now
		</Button>
	);
};

export default DonateNow;
