import Banner from "@/components/shared/Banner";
import DonationForm from "@/components/shared/DonationForm";
import { Button } from "@/components/ui/button";

const DonationPage = () => {
	return (
		<div className="mb-[150px]">
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
		</div>
	);
};


export default DonationPage;