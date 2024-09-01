import BoycottPage from "@/components/screens/Boycott";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Boycott Products | Al Sadaq',
  icons: [
		{
			url: "/favicon.svg",
			rel: "icon",
			sizes: "25x25",
		},
	],
}


export const dynamic = 'force-dynamic'
export const revalidate = 0

const page = () => {
  return <BoycottPage />
}

export default page;