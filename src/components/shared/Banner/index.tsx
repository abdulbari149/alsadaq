import assets from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BannerProps = {
	title: string;
	renderCta?: () => React.JSX.Element;
	variant: "primary" | "secondary" | 'white';
	children?: React.ReactNode;
};

const Banner = (props: BannerProps) => {
	return (
		<section
			className={cn(
				"relative flex flex-col justify-center h-[33rem] overflow-y-hidden px-[8%] overflow-x-hidden w-100",
				{
					"bg-primary": props.variant === "primary",
					"bg-[#D80027]": props.variant === "secondary",
					'bg-white': props.variant === 'white'
				}
			)}
		>
			<div className="absolute right-0 top-0 translate-y-[-17%] object-cover">
				<Image
					src={assets.icons.bgHeroFlag}
					className="object-cover"
					alt="bg hero flag"
					width={300}
					height={250}
				/>
			</div>

			<div className="flex flex-row justify-start">
				<div className="flex flex-col gap-6">
					<h1 className={cn("text-[64px] text-white text-wrap whitespace-pre-wrap font-semibold", { 'text-black': props.variant === 'white' })}>
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
