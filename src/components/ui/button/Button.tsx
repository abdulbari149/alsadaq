import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import buttonVariants from "./variants";
import ButtonLink from "./ButtonLink";
import { ButtonProps, LinkVariantProps } from "./types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const Comp = props.asChild ? Slot : "button";

		if (props.variant === "link") {
			return (
				<ButtonLink
					{...props}
					variant={props.variant as Required<LinkVariantProps>["variant"]}
					to={(props as LinkVariantProps).to}
				/>
			);
		}

		return (
			<Comp
				{...props}
				className={cn(
					buttonVariants({
						variant: props.variant,
						className: props.className,
						size: props.size,
					})
				)}
				ref={ref}
			/>
		);
	}
);

Button.displayName = "Button";

export default Button;
