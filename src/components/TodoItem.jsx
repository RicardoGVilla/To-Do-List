import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ItemText = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

function ToDoItem(props) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);

  const handleCheckBox = (event) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={handleCheckBox} />
      <ItemText isCompleted={isCompleted}>{props.item}</ItemText>
    </div>
  );
}

export default ToDoItem;
