import BoycottProducts from "@/components/shared/BoycottProducts";
import Banner from "@/components/shared/Banner";
import { Button } from "@/components/ui/button";
import DonateNow from "@/components/shared/DonateNow";
import Link from "next/link";

const HomePage = async () => {
	return (
		<>
			<Banner
				title={
					<>
						Your Choice Can Create <strong className="font-bold">Change</strong>
					</>
				}
				variant="background"
				description="Boycott the list of Israeli products that support oppression. Support Palestine by contributing to a cause that matters. Your support is a step towards freedom."
				bgImage={{
					src: "https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/home-bg-your-choice-create-change.png",
					alt: "home page background",
				}}
				className="h-[42rem]"
			>
				<Button
					size={"lg"}
					className="text-[18px] py-7 max-w-[280px]"
					variant={"secondary"}
				>
					<Link href={'/boycott'}>
						Boycott Israeli Products
					</Link>
				</Button>
			</Banner>

			<BoycottProducts viewAll />

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
export default HomePage;
