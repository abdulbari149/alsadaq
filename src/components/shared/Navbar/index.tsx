import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
	{
		id: 1,
		name: "Home",
		link: "/",
	},
	{
		id: 2,
		name: "Boycott",
		link: "/boycott",
	},
	{
		id: 3,
		name: "Donation",
		link: "/donation",
	},
	{
		id: 4,
		name: "Quiz",
		link: "/quiz",
	},
];

const Navbar = () => {
	return (
		<header className="flex flex-row w-100 py-5 px-[8%] items-center justify-between bg-white border-b-[1px] border-solid border-[#E9EDEE]">
			<h2 className="text-[24px] font-[600] text-[#333839]">Al-Sadaq</h2>

			<nav className="flex flex-row gap-8 items-center">
				{navLinks.map((nav) => (
					<NavLink key={nav.id} nav={nav} />
				))}
			</nav>

			<Button className="px-6 py-5" variant={"secondary"}>Donate Now</Button>
		</header>
	);
};

export default Navbar;
