
import { type VariantProps } from "class-variance-authority";

import buttonVariants from "./variants";

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export type LinkVariantProps = VariantProps<typeof buttonVariants> & {
  variant: "link" | "link-main";
  to: string;
};

export type ButtonProps = BaseButtonProps &
  (LinkVariantProps | VariantProps<typeof buttonVariants>);
