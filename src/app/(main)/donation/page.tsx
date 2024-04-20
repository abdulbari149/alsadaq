import DonationPage from "@/components/screens/donation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Donation | Al Sadaq'
}

const page = () => {
	return <DonationPage />;
};

export default page;
