import HomePage from "@/components/screens/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Al Sadaq",
	icons: [
		{
			url: "/favicon.svg",
			rel: "icon",
			sizes: "25x25",
		},
	],
};

export const dynamic = 'force-dynamic'
export const revalidate = 0


const page = () => <HomePage />;

export default page;
