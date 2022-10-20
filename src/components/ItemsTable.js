import { Table, TableContainer, Tbody, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { TableRow } from "./TableRow"

const ItemsTable = ({ listItems, deleteItem }) => {
  let totalPrice = 0;
  if (listItems.length === 0) return null;

  const listPrices = listItems.map(item => item.price);
  totalPrice = listPrices.reduce((prevPrice, price) => prevPrice + price);

  return (
    <TableContainer w="100%" overflowY="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Description</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            listItems.map(item =>
              <TableRow
                key={item.description}
                id={item.description}
                description={item.description}
                price={item.price}
                deleteItem={deleteItem}
              />)
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={2} >Total Price</Th>
            <Th isNumeric fontSize="lg">${totalPrice}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export { ItemsTable }