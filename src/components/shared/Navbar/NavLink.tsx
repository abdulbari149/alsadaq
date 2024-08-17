'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	nav: { link: string; id: number; name: string; };
	onClick?: () => void
};

const NavLink = (props: NavLinkProps) => {
	const { nav, onClick } = props;

	const pathname = usePathname();
	const isActive = nav.link === pathname;
	return (
		<Link replace href={nav.link} key={nav.id}
			onClick={onClick}
			className={cn("text-md text-[#333839] px-4 flex border-b-4 max-md:border-b border-transparent items-center", { "font-semibold  border-secondary": isActive })}>
			<p className="max-md:text-[32px] max-md:pb-2">
				{nav.name}
			</p>
		</Link>
	);
};
export default NavLink;
