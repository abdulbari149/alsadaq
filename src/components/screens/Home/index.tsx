import DonationForm from "@/components/shared/DonationForm";
import BoycottProducts from "@/components/shared/BoycottProducts";
import Banner from "@/components/shared/Banner";
import { Button } from "@/components/ui/button";
import assets from "@/assets";
import Image from "next/image";
import boycottProduct from "@/api/product";

const HomePage = async () => {
	const products = await boycottProduct.list();
	return (
		<>
			<Banner
				title={"Donate to Palestine\nthrough Alkhidmat\nfoundation"}
				variant="primary"
				renderCta={() => {
					return (
						<div className="flex flex-row items-center gap-4">
							<Button
								size={"lg"}
								className="text-[18px] py-7"
								variant={"default"}
							>
								Boycott Israeli Products
							</Button>
							<Button
								size={"lg"}
								className="text-[18px] py-7"
								variant={"outline"}
							>
								Take Quiz
							</Button>
						</div>
					);
				}}
			/>
			<DonationForm />
			<div className="mt-[15vh]">
				<BoycottProducts viewAll tabs={products} />
			</div>
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
export default HomePage;
