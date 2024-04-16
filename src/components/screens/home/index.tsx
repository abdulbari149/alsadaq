import Navbar from "@/components/shared/Navbar";
import DonationForm from "./DonationForm";
import Hero from "./Hero";
import BoycottProducts from "./BoycottProducts";
import QuizBanner from "./QuizBanner";
import Footer from "./Footer";

const Home = () => {
	return (
		<main className="w-100 flex flex-col overflow-x-hidden max-w-[100vw]">
			<Navbar />
			<Hero />
			<DonationForm />
			<BoycottProducts />
			<QuizBanner />
			<Footer />
		</main>
	);
};
export default Home;
