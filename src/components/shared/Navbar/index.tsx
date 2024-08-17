import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";
import Image from "next/image";
import { NavbarSheet } from "./NavbarSheet";
import { routes } from "./routes";

const Navbar = () => {
	return (
		<header className="flex flex-row max-w-[86rem] px-16 max-sm:px-6 w-full mx-auto justify-between bg-white border-solid border-[#E9EDEE]">
			{/* <h2 className="text-[24px] font-[600] text-[#333839]">Al-Sadaq</h2> */}
			<Image src="/logo.svg" className="my-5" alt="al sadaq" width={72} height={42} />
			<nav className="flex flex-row gap-8 max-md:hidden">
				{routes.map((route) => (
					<NavLink key={route.id} nav={route} />
				))}
			</nav>

			<div className="md:px-6 py-5 self-center flex gap-3 items-center">
			<Button variant="default">Donate Now</Button>
			<div className="md:hidden">
				<NavbarSheet />
			</div>
			</div>
		</header>
	);
};

export default Navbar;
