import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
	return (
		<section className="bg-primary relative flex flex-col justify-center h-[33rem] overflow-y-hidden px-[8%] overflow-x-hidden w-100">
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
				<div className="flex flex-col  w-[50%] gap-6">
					<h1 className="text-[64px] text-white text-wrap font-semibold">
						Donate to Palestine through Alkhidmat foundation
					</h1>

					<div className="flex flex-row items-center gap-4">
						<Button
							size={"lg"}
							className="text-[18px] py-7"
							variant={"outline"}
						>
							Boycott Israeli Products
						</Button>
						<Button
							size={"lg"}
							className="text-[18px] py-7"
							variant={"default"}
						>
							Take Quiz
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
