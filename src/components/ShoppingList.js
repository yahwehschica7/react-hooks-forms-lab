import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // new code
  const [search, setNewSearch] = useState("")
  // const [itemsToFilter, setItemsFilter] = useState([...items])

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem])
  }

  function onSearchChange(event) {
  console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredDisplayItems = items.filter((item) => {
    console.log(search)
    return item.name.includes(search)
  })

  // const itemsToDisplay = filteredDisplayItems.filter((item) => {
  //   // if (selectedCategory === "All") return true
  //   //   return item.category === selectedCategory
  //     if(condition is something) {
  //       return something
  //     } 
  //   }) 
    
    return (
      <div className="ShoppingList">
        <ItemForm 
          onItemFormSubmit={onItemFormSubmit}
          items={items}
        />
        <Filter 
          onCategoryChange={handleCategoryChange}
          onSearchChange={onSearchChange}
          search={search}
        />
        <ul className="Items">
          {filteredDisplayItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
  
  export default ShoppingList;



  
  
