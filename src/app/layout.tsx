import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // Replace with your actual GA tracking ID

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_TRACKING_ID}');
						`,
					}}
				/>
			</head>
			<body className={font.className}>
				{children}
				<ToastContainer />
			</body>
		</html>
	);
}
