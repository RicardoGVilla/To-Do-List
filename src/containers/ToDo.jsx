import React, { useState } from "react";
import ToDoItem from "../components/TodoItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2d5de;
  height: 100vh;
`;

const ToDoContainer = styled.div`
  padding: 3rem !important;
  background-color: white;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  font-family: Roboto, sans-serif;
  padding: 48px;
`;

const CardBody = styled.div``;

function ToDo() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, { item: newItem, isCompleted: false }]);
    setNewItem("");
  }

  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <Container>
      <ToDoContainer>
        <CardBody>
          <h4 className="mb-3">To Do List</h4>
          <form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <div className="form-outline flex-fill">
              <div className="input-group">
                <div className="form-label">
                  <label htmlFor="form3"></label>
                </div>
                <input
                  id="form3"
                  type="text"
                  placeholder="What do you need to do today?"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-lg ms-2">
                  Add
                </button>
              </div>
            </div>
          </form>
          <ul>
            {items.map((item, index) => (
              <ToDoItem
                item={item.item}
                isCompleted={item.isCompleted}
                index={index}
                handleRemove={() => removeItem(index)}
              />
            ))}
          </ul>
        </CardBody>
      </ToDoContainer>
    </Container>
  );
}

export default ToDo;
