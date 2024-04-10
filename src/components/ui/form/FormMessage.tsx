import useFormField from "@/hooks/use-form-field";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const FormMessage = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message) : children;

	if (!body) {
		return null;
	}

	return (
		<p
			ref={ref}
			id={formMessageId}
			className={cn("text-sm font-medium text-destructive", className)}
			{...props}
		>
			{body}
		</p>
	);
});

FormMessage.displayName = "FormMessage";

export default FormMessage;
