import { createContext, useContext, useId } from "react"
import { FormItemProviderComponent } from "./types"

type FormItemContextValue = {
  id: string
}

const initialContext: FormItemContextValue = {
  id: "",
}

const FormItemContext = createContext(initialContext)

const FormItemProvider: FormItemProviderComponent = ({ children }) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      {children}
    </FormItemContext.Provider>
  )
}

export const useFormItemContext = () => useContext(FormItemContext);

export { FormItemContext, FormItemProvider }