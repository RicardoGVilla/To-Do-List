import React from "react";
import { useState } from "react";
import styled from "styled-components";

//Input container styling

const Input = styled.input`
  padding: 18px;
  font-size: 19px;
  font-family: sans-serif;
`;

const ItemText = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

const ListItem = styled.li`
  list-style: none;
  margin: 10px 0;
  padding: 7px;
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #d3cdcd;
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
  margin-left: 0;
  margin-right: auto;
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
