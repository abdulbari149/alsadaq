export type FormItemContextValue = {
  id: string
}

export type FormItemProviderProps = {
  children: React.ReactNode
}

export type FormItemProviderComponent = (props: FormItemProviderProps) => JSX.Element