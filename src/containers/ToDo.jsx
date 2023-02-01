import React, { useState } from "react";
import ToDoItem from "../components/TodoItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2d5de;
  height: 100vh;
  font-size: 1.2rem;
  font-family: sans-serif;
`;

const CardContainer = styled.div`
  padding: 3rem !important;
  background-color: white;
  width: 50%;
  height: 60%;
  flex-direction: column;
  border-radius: 15px;
  font-family: Roboto, sans-serif;
  padding: 40px;
`;

const CardContent = styled.div``;

const InputSection = styled.div`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  height: 80px;
  width: 80%;
  padding: 10px;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 10px;
  color: black;
  border: 1px solid #b7acac;
  box-sizing: border-box;
`;

const Button = styled.div`
  background-color: #4343d5;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  margin-left: 12px;
`;

const ToDoList = styled.ul`
  padding: 0;
`;

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
      <CardContainer>
        <CardContent>
          <h4>To Do List</h4>
          <form onSubmit={handleSubmit}>
            <InputSection>
              <InputField
                type="text"
                placeholder="What do you need to do today?"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <div>
                <Button type="submit">ADD</Button>
              </div>
            </InputSection>
          </form>
          <ToDoList>
            {items.slice(0, 7).map((item, index) => (
              <ToDoItem
                item={item.item}
                isCompleted={item.isCompleted}
                index={index}
                handleRemove={() => removeItem(index)}
              />
            ))}
          </ToDoList>
        </CardContent>
      </CardContainer>
    </Container>
  );
}

export default ToDo;
