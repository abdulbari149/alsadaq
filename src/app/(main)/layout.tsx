export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<footer className="py-6 flex items-center justify-center bg-[#F2F5F6]">
				<p className="text-[16px] text-[#51595A] font-light">
					Copyright © 2023 – 2024 Al-Sadaq. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
