import Banner from "@/components/shared/Banner";
import BoycottProducts from "@/components/shared/BoycottProducts";
import { Button } from "@/components/ui/button";
import boycottProduct from "@/api/product";

const BoycottPage = async () => {
	const products = await boycottProduct.list();
	return (
		<>
			<Banner
				title="Boycott for a"
				bolded="Better Tomorrow"
				variant="background"
				bgImage={{
					src: "https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/boycott-bg-better-tomorrow.png",
					alt: "Boycott Isreali Products Background",
					className: "translate-y-[-35%] background-cover bg-center bg-no-repeat bg-fixed",
				}}
				className="h-[42rem]"
				description={
					"Take a stand against oppression by refusing to support companies that profit from injustice. By boycotting them, you’re using your purchasing power to advocate for Palestinian rights and a just world."
				}
			/>
			{products.length > 0 && (
				<BoycottProducts viewAll tabs={products} />
			)}

			<Banner
				title="Support Palestine, Make an"
				bolded="Impact"
				description="Your generosity can provide crucial aid to those in need. Every donation helps to bring relief, hope, and a brighter future for the Palestinian people. Together, we can make a difference."
				variant="background"
				note={`This setup emphasizes the importance of the donation, the impact it will have, and encourages immediate action, while clearly\ndirecting users to the "One Ummah" platform for making their contribution.`}
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
					src: "https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/home-bg-your-choice-create-change.jpeg",
					alt: "Palestine lives matter",
					className: "translate-y-[-4%]",
				}}
			/>
		</>
	);
};
export default BoycottPage;
