import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newGrocery, setNewGrocery] = useState("Produce")
  const [newName, setNewName] = useState("")
    
    function handleNameChange(e) {
      // if (newName === "") return true
      setNewName(e.target.value)
    }
    

    function handleCategoryUpdate(e) {
      setNewGrocery(e.target.value)
    }

    function handleSubmit(e) {
      e.preventDefault()
      const newItem = {
        id: uuid(),
        name: newName,
        category: newGrocery
      }
      onItemFormSubmit(newItem)
      setNewName("")
      setNewGrocery("")
    }  

    return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newGrocery} onChange={handleCategoryUpdate}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onclick={handleSubmit}>Add to List</button>
    </form>
  );
    }

export default ItemForm;
