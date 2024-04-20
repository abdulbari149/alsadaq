import assets from "@/assets";
import Banner from "@/components/shared/Banner";
import BoycottProducts from "@/components/shared/BoycottProducts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import tabs from "./tabs";

const BoycottPage = () => {
	return (
		<>
			<Banner
				title={"Boycott Israeli Products\nand use alternatives."}
				variant="secondary"
			>
				<div className="absolute right-0 bottom-0">
					<Image src={assets.images.banImage} alt="ban image" />
				</div>
			</Banner>
			<BoycottProducts tabs={tabs} />
			<Banner
				title={"Donate to Palestine\nthrough Alkhidmat\nfoundation"}
				variant="primary"
				renderCta={() => {
					return (
						<Button
							size={"lg"}
							className="text-[18px] w-[180px] py-6"
							variant={"outline"}
						>
							Donate Now
						</Button>
					);
				}}
			>
				<div className="absolute right-0 bottom-0">
					<Image
						src={assets.images.donationImage}
						alt="donation image"
						height={500}
					/>
				</div>
			</Banner>
			<Banner
				title={"Test your Palestine\nKnowledge with our Quiz"}
				variant="white"
				renderCta={() => (
					<Button
						variant="secondary"
						size="lg"
						className="py-6 px-10 w-[140px]"
					>
						Start Quiz
					</Button>
				)}
			>
				<div className="absolute right-0 bottom-0 object-cover">
					<Image
						src={assets.images.quizBannerImage}
						className="object-cover"
						alt="bg hero flag"
					/>
				</div>
			</Banner>
		</>
	);
};
export default BoycottPage;
