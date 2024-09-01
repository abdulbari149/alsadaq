import assets from "@/assets";
import { cn } from "@/lib/utils";
import { CircleAlertIcon } from "lucide-react";
import Image from "next/image";

type BannerProps = {
	title: string | JSX.Element;
	variant: "primary" | "secondary" | "white" | "background";
	children?: React.ReactNode;
	bgImage?: { src: string; alt: string; className?: string; width?: number; height?: number };
	className?: string;
	description?: string | JSX.Element;
	note?: string;
};

const Banner = (props: BannerProps) => {
	return (
		<section
			className={cn(
				"relative flex flex-col justify-center overflow-hidden min-h-[400px]",
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
				<div className="absolute inset-0 h-[100%] w-[100%] z-[-1]">
					<div className="absolute inset-0 w-[100%] h-[100%] opacity-75 bg-[#25292A] z-[101]" />
					<Image
						{...props.bgImage}
						className={cn("h-[100%] object-cover absolute inset-0", props.bgImage.className)}
						alt={props.bgImage.alt}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
						priority					
						quality={100}
					/>
				</div>
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

			<div className="flex justify-start max-w-[86rem] px-16 max-sm:px-6 w-full mx-auto">
				<div className="flex flex-col gap-6">
					<h1
						className={cn(
							"text-[64px] max-md:text-4xl max-md:leading-[50px] text-white font-normal",
							{ "text-black": props.variant === "white" }
						)}
					>
						{props.title}
					</h1>
					{props.description && (
						<p
							className={cn(
								"text-[28px] text-white max-w-[75rem] max-md:text-lg w-full font-normal",
								{ "text-black": props.variant === "white" }
							)}
						>
							{props.description}
						</p>
					)}
					{props?.children}

					{props.note && (
						<div className="grid min-[400px]:grid-cols-[auto,1fr] gap-2 max-[400px]:grid-rows-[auto] items-start md:my-3">
							<CircleAlertIcon
								color="#ffffff"
								size={25}
								className="mt-1 rotate-180"
							/>
							<p
								className={cn(
									"text-[18px] text-white font-normal max-w-[65.5rem] w-full",
									{ "text-black": props.variant === "white" }
								)}
							>
								{props.note}
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Banner;
