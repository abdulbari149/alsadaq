import BoycottProducts from "@/components/shared/BoycottProducts";
import Banner from "@/components/shared/Banner";
import { Button } from "@/components/ui/button";
import boycottProduct from "@/api/product";

const HomePage = async () => {
	const products = await boycottProduct.list();
	return (
		<>
			<Banner
				title="Your Choice Can Create"
				bolded="Change"
				variant="background"
				description="Boycott the list of Israeli products that support oppression. Support Palestine by contributing to a cause that matters. Your support is a step towards freedom."
				// bgImage={"/images/home/bg.jpeg"}
				bgImage={{
					src: "/images/home/bg.jpeg",
					alt: "home page background",
					className: "translate-y-[-50%]",
				}}
				className="h-[42rem]"
				renderCta={() => {
					return (
						<div className="flex flex-row items-center gap-4">
							<Button
								size={"lg"}
								className="text-[18px] py-7"
								variant={"secondary"}
							>
								Boycott Israeli Products
							</Button>
							{/* <Button
								size={"lg"}
								className="text-[18px] py-7"
								variant={"outline"}
							>
								Take Quiz
							</Button> */}
						</div>
					);
				}}
			/>
			{/* <DonationForm /> */}
			{products.length > 0 && <BoycottProducts viewAll tabs={products} />}

			<Banner
				title="Support Palestine, Make an"
				bolded="Impact"
				description="Your generosity can provide crucial aid to those in need. Every donation helps to bring relief, hope, and a brighter future for the Palestinian people. Together, we can make a difference."
				variant="background"
				note='This setup emphasizes the importance of the donation, the impact it will have, and encourages immediate action, while clearly directing users to the "One Ummah" platform for making their contribution.'
				className="h-[42rem]"
				renderCta={() => (
					<Button
						variant="default"
						size="lg"
						className="text-[18px] py-7 max-w-[230px]"
					>
						Donate Now
					</Button>
				)}
				bgImage={{
					src: "/images/home/bg-2.png",
					alt: "Palestine lives matter",
					className: "translate-y-[-4%]",
				}}
			/>
		</>
	);
};
export default HomePage;
