
import { Metadata } from "next";
import Login from "@/components/screens/Login";

export const metadata: Metadata = {
  title: 'Login | Al Sadaq',
  icons: [
		{
			url: "/favicon.svg",
			rel: "icon",
		},
	],
}

const Page = () => <Login />;

export default Page;
