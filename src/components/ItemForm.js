import { Button, FormControl, Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react";
import { InputItem } from "./InputItem";

const ItemForm = ({ onSubmit, loading }) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const handleDescription = (e) => {
    const value = e.target.value;
    setInputDescription(value);
  }

  const handlePrice = (e) => {
    const value = e.target.value;
    setInputPrice(Number(value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      description: inputDescription,
      price: inputPrice
    }

    onSubmit(newItem);
    setInputDescription("");
    setInputPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)'
          gap={2}
        >
          <InputItem
            colSpan={2}
            onChange={handleDescription}
            type="text"
            placeholder='Description'
            value={inputDescription} />

          <InputItem
            onChange={handlePrice}
            type="number"
            placeholder='Price $USD'
            value={inputPrice}
          />
          <GridItem colSpan={3}>
            <Button
              type='submit'
              colorScheme="teal"
              w="100%"
              isLoading={loading}
              loadingText='Submitting'
            >Add Item</Button>
          </GridItem>
        </Grid>
      </FormControl>
    </form>
  )
}

export { ItemForm }