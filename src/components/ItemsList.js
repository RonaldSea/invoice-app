import { useState } from "react";
import { ItemForm } from "./ItemForm";
import { ItemsTable } from "./ItemsTable";
import { EmptyTable } from "./EmptyTable"

const ItemsList = () => {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const addItem = (item) => {
    setLoading(true);
    setTimeout(() => {
      const updatedItemsList = [item, ...listItems];
      setListItems(updatedItemsList);
      setLoading(false);
    }, 1200);
  }

  const deleteItem = (id) => {
    const updatedListItems = listItems.filter(item => item.description !== id);
    setListItems(updatedListItems);
  }

  return (
    <>
      <ItemForm onSubmit={addItem} loading={loading} />
      {listItems.length > 0
        ? <ItemsTable listItems={listItems} deleteItem={deleteItem} />
        : <EmptyTable />
      }
    </>

  )
}

export { ItemsList }