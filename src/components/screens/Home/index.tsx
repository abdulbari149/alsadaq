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
				variant="background"
				// bgImage={"/images/home/bg.jpeg"}
				bgImage={{
					src: "/images/home/bg.jpeg",
					alt: "home page background",
					className: "translate-y-[-50%]"
				}}
				className="h-[42rem]"
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
			{/* <DonationForm /> */}
			<section className="mt-[15vh]">
				<BoycottProducts viewAll tabs={products} />
			</section>

			<section className="w-[100%] bg-[#E9EDEE] py-[5rem] px-[8%]">
				<div className="flex flex-row items-center justify-between w-[100%]">
					<div className="w-[50%] flex flex-col gap-3">
						<h3 className="text-[48px] text-black text-wrap whitespace-pre-wrap font-semibold">
							About
						</h3>
						<p className="text-[24px] leading-10">
							Alsadaq is a dedicated platform created with the mission of {" "}
							<strong>supporting humanitarian efforts</strong>{" "}in Palestine and create an
							awareness campaigns for {" "}<strong>boycotting israeli products</strong>. Our goal is
							to provide a secure and efficient way for individuals around the
							world to contribute to the well-being of the Palestinian people.{" "}
						</p>
					</div>
					<div className="">
						<Image
							src={"/alsadaq-urdu.svg"}
							alt="al sadaq"
							width={300}
							height={120}
						/>
					</div>
				</div>
			</section>
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
