import { createContext, useContext } from "react"
import { FieldPath, FieldValues } from "react-hook-form"
import { FormFieldContextValue, FormFieldProviderComponent } from "./types"

const initialContext: FormFieldContextValue = {
  name: "",
}
const FormFieldContext = createContext(initialContext);

const FormFieldProvider: FormFieldProviderComponent = ({ name, children }) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      {children}
    </FormFieldContext.Provider>
  )
}

export const useFormFieldContext = () => useContext(FormFieldContext)

export { FormFieldContext, FormFieldProvider }
