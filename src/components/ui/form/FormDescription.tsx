import useFormField from "@/hooks/use-form-field";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const FormDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();

	return (
		<p
			ref={ref}
			id={formDescriptionId}
			className={cn("text-sm text-muted-foreground", className)}
			{...props}
		/>
	);
});

FormDescription.displayName = "FormDescription";

export default FormDescription;
