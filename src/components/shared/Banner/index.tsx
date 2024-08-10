/* eslint-disable @next/next/no-img-element */
import assets from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BannerProps = {
	title: string;
	renderCta?: () => React.JSX.Element;
	variant: "primary" | "secondary" | "white" | "background";
	children?: React.ReactNode;
	bgImage?: {  src: string; alt: string; className?: string; };
	className?: string;
};

const Banner = (props: BannerProps) => {
	return (
		<section
			className={cn(
				"relative flex flex-col justify-center h-[34rem] overflow-y-hidden overflow-x-hidden w-100",
				{
					"bg-primary": props.variant === "primary",
					"bg-[#D80027]": props.variant === "secondary",
					"bg-white": props.variant === "white",
					"bg-transparent px-0": props.variant === "background",
				},
				props.className
			)}
		>
			{props.bgImage ? (
				<>
					<div className="absolute top-0 left-0 bg-[#25292AE5]/90 z-[-1] w-[100%] h-[100%] block" />
					<div className="absolute top-0 left-0 w-[100%] z-[-2]">
						<img
							src={props.bgImage.src}
							className={cn("object-contain w-[100%] translate-y-[-30%]", props.bgImage.className)}
							alt={props.bgImage.alt}
						/>
					</div>
				</>
			) : (
				<div className="absolute right-0 top-0 translate-y-[-17%] object-cover">
					<Image
						src={assets.icons.bgHeroFlag}
						className="object-cover"
						alt="bg hero flag"
						width={300}
						height={250}
					/>
				</div>
			)}

			<div className="flex flex-row justify-start px-[8%]">
				<div className="flex flex-col gap-6">
					<h1
						className={cn(
							"text-[64px] text-white text-wrap whitespace-pre-wrap font-semibold",
							{ "text-black": props.variant === "white" }
						)}
					>
						{props.title}
					</h1>
					{props.renderCta?.()}
				</div>
			</div>

			{props.children}
		</section>
	);
};

export default Banner;
