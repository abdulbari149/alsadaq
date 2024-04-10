import buttonVariants from "./variants";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { BaseButtonProps, LinkVariantProps } from "./types";
import Link from "next/link";

const ButtonLink = forwardRef<
	HTMLButtonElement,
	BaseButtonProps & LinkVariantProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";

	return (
		<Link
			href={props.to}
			className={cn(buttonVariants({ variant, size, className }))}
		>
			<Comp ref={ref} {...props} />
		</Link>
	);
});

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
