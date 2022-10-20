import { DeleteIcon } from "@chakra-ui/icons"
import { IconButton, Td, Tr } from "@chakra-ui/react"

const TableRow = ({ id, description, price, deleteItem }) => {
  return (
    <Tr>
      <Td><IconButton colorScheme="red" aria-label='Search database' icon={<DeleteIcon />} onClick={() => deleteItem(id)} /></Td>
      <Td p={4} whiteSpace="normal">{description}</Td>
      <Td p={4} isNumeric>{`$${price} USD`}</Td>
    </Tr>
  )
}

export { TableRow }