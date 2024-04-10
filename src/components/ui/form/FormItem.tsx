import { forwardRef } from "react";
import { FormItemProvider } from "@/contexts/form-item";
import { cn } from "@/lib/utils";

const FormItem = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<FormItemProvider>
			<div ref={ref} className={cn("space-y-2", className)} {...props} />
		</FormItemProvider>
	);
});

FormItem.displayName = "FormItem";

export default FormItem;
