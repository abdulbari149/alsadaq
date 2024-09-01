import Banner from "@/components/shared/Banner";
import BoycottProducts from "@/components/shared/BoycottProducts";
import DonateNow from "@/components/shared/DonateNow";

const BoycottPage = async () => {
	return (
		<>
			<Banner
				title={
					<>
						Boycott for a <strong className="font-bold">Better Tomorrow</strong>
					</>
				}
				variant="background"
				bgImage={{
					src: "https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/boycott-bg-better-tomorrow.png",
					alt: "Boycott Isreali Products Background",
				}}
				className="min-h-[42rem]"
				description={
					"Take a stand against oppression by refusing to support companies that profit from injustice. By boycotting them, you’re using your purchasing power to advocate for Palestinian rights and a just world."
				}
			/>

			<BoycottProducts />

			<Banner
				title={
					<>
						Support Palestine, Make an{" "}
						<strong className="font-bold">Impact</strong>
					</>
				}
				description="Your generosity can provide crucial aid to those in need. Every donation helps to bring relief, hope, and a brighter future for the Palestinian people. Together, we can make a difference."
				variant="background"
				note='This setup emphasizes the importance of the donation, the impact it will have, and encourages immediate action, while clearly directing users to the "One Ummah" platform for making their contribution.'
				className="py-6 min-h-[42rem]" 
				bgImage={{
					src: "https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/home-palestine-live-matter.png",
					alt: "Palestine lives matter",
				}}
			>
				<DonateNow
					variant="default"
					size="lg"
					className="text-[18px] py-7 max-w-[230px]"
				/>
			</Banner>
		</>
	);
};
export default BoycottPage;
