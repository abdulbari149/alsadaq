import Image from "next/image";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<section className="w-[100%] bg-[#E9EDEE] py-[5rem] px-[8%]">
				<div className="flex flex-row items-center justify-between w-[100%]">
					<div className="w-[50%] flex flex-col gap-3">
						<h3 className="text-[48px] text-black text-wrap whitespace-pre-wrap font-semibold">
							About
						</h3>
						<p className="text-[24px] leading-10">
							Alsadaq is a dedicated platform created with the mission of{" "}
							<strong>supporting humanitarian efforts</strong> in Palestine and
							create an awareness campaigns for{" "}
							<strong>boycotting israeli products</strong>. Our goal is to
							provide a secure and efficient way for individuals around the
							world to contribute to the well-being of the Palestinian people.{" "}
						</p>
					</div>
					<div className="">
						<Image
							src={"/alsadaq-urdu.svg"}
							alt="al sadaq"
							width={300}
							height={120}
						/>
					</div>
				</div>
			</section>
			<footer className="py-6 flex items-center justify-center bg-[#F2F5F6]">
				<p className="text-[16px] text-[#51595A] font-light">
					Copyright © 2023 – 2024 Al-Sadaq. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
