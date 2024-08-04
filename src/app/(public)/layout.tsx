import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-100 flex flex-col overflow-x-hidden max-w-[100vw]">
			<Navbar />
			{children}
		</main>
	);
}
