import QuizPage from "@/components/screens/Quiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Palestine Quiz | Al Sadaq',
  icons: [
		{
			url: "/favicon.svg",
			rel: "icon",
		},
	],
}


const Page = () => <QuizPage />;

export default Page;
