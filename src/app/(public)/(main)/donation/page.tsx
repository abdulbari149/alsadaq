import DonationPage from "@/components/screens/Donation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Donation | Al Sadaq'
}

const page = () => {
	return <DonationPage />;
};

export default page;
