import { GridItem, Input } from "@chakra-ui/react";

const InputItem = ({ colSpan, onChange, type, placeholder, value }) => {
  return (
    <GridItem colSpan={colSpan}>
      <Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        required />
    </GridItem>
  )
}

export { InputItem };