import * as React from "react";
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
} from "react-hook-form";

import { FormFieldProvider } from "@/contexts/form-field";

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldProvider name={props.name}>
			<Controller {...props} />
		</FormFieldProvider>
	);
};

export default FormField;
