import React from "react";
import { useState } from "react";
import styled from "styled-components";

//To DO

// Add spacing between item and input text
// Add left margin between items and border
// Activate ADD button
// Change the font
// Increase size of input box
//Center the input box

//Change the color of active input text box
// What if task is empty

const Input = styled.input`
  padding: 18px;
  font-size: 19px;
  font-family: sans-serif;
  width: 15px;
  height: 15px;
`;

const ItemText = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

const ListItem = styled.li`
  list-style: none;
  margin: 10px 0;
  padding: 4px;
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #d3cdcd;
  padding-top: 20px;
  margin-left: 10px;
`;

const CloseButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #bbb;
  &:hover {
    color: #555;
  }
  color: #3c55cb;
`;

const CheckboxContainer = styled.div`
  cursor: pointer;
`;

const TextContainer = styled.div`
  justify-content: flex-start;
  flex-grow: 1;
  margin-left: 8px;
`;

const SymbolContainer = styled.div`
  margin-left: auto;
`;

function ToDoItem(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const handleCheckBox = (event) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <ListItem>
      <CheckboxContainer>
        <Input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckBox}
        />
      </CheckboxContainer>
      <TextContainer>
        <ItemText isCompleted={isCompleted}>{props.item}</ItemText>
      </TextContainer>
      <SymbolContainer>
        <CloseButton onClick={props.handleRemove}>x</CloseButton>
      </SymbolContainer>
    </ListItem>
  );
}

export default ToDoItem;
