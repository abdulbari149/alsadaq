import NavLink from "./NavLink";
import Image from "next/image";
import { NavbarSheet } from "./NavbarSheet";
import { routes } from "./routes";
import DonateNow from "../DonateNow";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="flex flex-row max-w-[86rem] px-16 max-sm:px-6 w-full mx-auto justify-between bg-white border-solid border-[#E9EDEE]">
			<Link href={"/"}>
				<Image
					src={
						"https://fspsgbvhllrfzmrvaptl.supabase.co/storage/v1/object/public/images/logo.svg"
					}
					className="my-5"
					alt="al sadaq"
					width={72}
					height={42}
				/>
			</Link>
			<nav className="flex flex-row gap-8 max-md:hidden">
				{routes.map((route) => (
					<NavLink key={route.id} nav={route} />
				))}
			</nav>

			<div className="md:px-6 py-5 self-center flex gap-3 items-center">
				<DonateNow variant={"default"} />
				<div className="md:hidden">
					<NavbarSheet />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
