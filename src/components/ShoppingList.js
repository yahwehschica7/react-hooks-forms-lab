import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // new code
  const [newSearch, setNewSearch] = useState("")

  function onSearchChange(event) {
  // console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true
       return item.category === selectedCategory
    }).filter(item => {
      if(newSearch === ""){
        return true
      } else {
        return item.name === newSearch
      }
    });
  
  
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
