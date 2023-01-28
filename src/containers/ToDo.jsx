import React, { useState } from "react";
import ToDoItem from "../components/TodoItem";

function ToDo() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, { item: newItem, isCompleted: false }]);
    setNewItem("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <ToDoItem item={item.item} isCompleted={item.isCompleted} />
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
