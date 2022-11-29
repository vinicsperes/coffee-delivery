import { InputContent } from './styles'

interface FormInputProps {
  placeholder: string
  optional: boolean
}

export function FormInput({ placeholder }: FormInputProps) {
  return <InputContent type="text" placeholder={placeholder}></InputContent>
}
