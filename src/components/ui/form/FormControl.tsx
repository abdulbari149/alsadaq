import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

import useFormField from "@/hooks/use-form-field";

const FormControl = forwardRef<
	React.ElementRef<typeof Slot>,
	React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } =
		useFormField();

	const ariaDescribedBy = !error
		? `${formDescriptionId}`
		: `${formDescriptionId} ${formMessageId}`;

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={ariaDescribedBy}
			aria-invalid={!!error}
			{...props}
		/>
	);
});

FormControl.displayName = "FormControl";

export default FormControl;
