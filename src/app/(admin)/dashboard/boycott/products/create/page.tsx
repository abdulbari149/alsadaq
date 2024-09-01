import { currentUser } from "@/functions/user";
import CreateBoycottProduct from "@/components/screens/CreateBoycottProduct";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Create Boycott Product | Al Sadaq',
  icons: [
		{
			url: "/favicon.svg",
			rel: "icon",
		},
	],
}

const Page = async () => {
	const { user } = await currentUser();
	return <CreateBoycottProduct user={user} />;
};

export default Page;
