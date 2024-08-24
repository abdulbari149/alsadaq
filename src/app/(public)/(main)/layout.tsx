import Image from "next/image";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
		<section className="bg-[#E9EDEE] py-[5rem]">
				<div className="grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1 max-w-[86rem] px-16 max-sm:px-6 w-full mx-auto">
					<div className="order-2 max-md:order-1 w-full h-full flex justify-center max-md:justify-start items-center">
						<Image
							src={"https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/alsadaq-urdu.svg"}
							alt="al sadaq"
							width={300}
							height={120}
							className="w-full h-auto max-w-[300px] max-[1000px]:max-w-[192px] max-[1000px]:max-h-[120px]
							max-[1300px]:max-w-[300px] max-[1300px]:max-h-[120px]
							"
						/>
					</div>
					<div className="flex flex-col gap-3 order-1 max-md:order-2">
						<h3 className="text-[48px] max-[1000px]:text-[32px] max-md:leading-[38px]   font-semibold">
							About Us
						</h3>
						<p className="text-[24px] leading-10 max-[1000px]:text-lg">
							Alsadaq is a dedicated platform created with the mission of{" "}
							<strong>supporting humanitarian efforts</strong> in Palestine and
							create an awareness campaigns for{" "}
							<strong>boycotting israeli products</strong>. Our goal is to
							provide a secure and efficient way for individuals around the
							world to contribute to the well-being of the Palestinian people.{" "}
						</p>
					</div>
				</div>
			</section>
			<footer className="py-6 flex items-center justify-center bg-[#F2F5F6]">
				<p className="text-[14px] text-[#51595A] font-light text-center">
					Copyright © 2024 Al-Sadaq. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
