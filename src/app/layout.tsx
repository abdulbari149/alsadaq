import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<main className="w-100 flex flex-col overflow-x-hidden max-w-[100vw]">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
