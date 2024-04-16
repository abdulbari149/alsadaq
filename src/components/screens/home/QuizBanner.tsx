import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const QuizBanner = () => {
	return (
		<div className="relative mt-10">
			<div className="absolute right-0 top-0 translate-y-[-17%] object-cover">
				<Image
					src={assets.icons.bgHeroFlag}
					className="object-cover"
					alt="bg hero flag"
					width={300}
					height={250}
				/>
			</div>

      <div className="absolute right-0 bottom-0 object-cover">
				<Image
					src={assets.images.quizBannerImage}
					className="object-cover"
					alt="bg hero flag"
				/>
			</div>

			<div className="px-[8%] w-[70%] my-[7rem] space-y-7">
				<h1 className="text-left leading-[5.5rem] text-[64px] font-semibold text-primary-content">
					Test your Palestine Knowledge with our Quiz
				</h1>
				<Button variant="secondary" size="lg" className="py-6 px-10">
					Start Quiz
				</Button>
			</div>
		</div>
	);
};

export default QuizBanner;
