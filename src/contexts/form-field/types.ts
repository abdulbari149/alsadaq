import { FieldPath, FieldValues } from "react-hook-form"

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}


export type FormFieldProviderProps = {
  name: string
  children: React.ReactNode
}

export type FormFieldProviderComponent = (props: FormFieldProviderProps) => JSX.Element