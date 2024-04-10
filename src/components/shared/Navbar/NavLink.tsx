'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	nav: { link: string; id: number; name: string };
};

const NavLink = (props: NavLinkProps) => {
	const { nav } = props;

	const pathname = usePathname();
	const isActive = nav.link === pathname;
	return (
		<Link replace href={nav.link} key={nav.id}>
			<p
				className={cn("text-md text-[#333839]", { "font-semibold": isActive })}
			>
				{nav.name}
			</p>
		</Link>
	);
};
export default NavLink;
