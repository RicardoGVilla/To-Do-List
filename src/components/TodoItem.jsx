import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ItemText = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

const ListItem = styled.li`
  list-style: none; /* remove the bullet points */
  margin: 10px 0; /* add some margin between each list item */
  padding: 10px; /* add some padding to the list item */
  background-color: #f2f2f2; /* change the background color */
  border-radius: 5px; /* add some border radius to give it a rounded edge */
`;

const CloseButton = styled.button`
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #bbb;
  &:hover {
    color: #555;
  }
`;

function ToDoItem(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const handleCheckBox = (event) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <ListItem>
      <input type="checkbox" checked={isCompleted} onChange={handleCheckBox} />
      <ItemText isCompleted={isCompleted}>{props.item}</ItemText>
      <CloseButton onClick={props.handleRemove}>x</CloseButton>
    </ListItem>
  );
}

export default ToDoItem;
