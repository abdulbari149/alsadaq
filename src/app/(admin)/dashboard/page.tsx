import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard | Al Sadaq',
  icons: [
		{
			url: "/favicon.svg",
			rel: "icon",
		},
	],
}

const page = () => <div>Dashboard</div>;

export default page;