import React from "react";
import styled from "styled-components";

// Define el componente estilizado ButtonHeader con styled-components
const ButtonHeader = styled.button`
  background-color: var(--dark-gray);
  border-radius: 0.5rem;
  border: 3px solid
    ${(props) => (props.isActive ? "var(--primary-color)" : "var(--white)")};
  color: var(--white);
  width: 180px;
  height: 54px;
  ${(props) =>
    props.isActive &&
    "box-shadow: inset 0px 0px 17px 3px var(--primary-color)"};

  &:hover {
    cursor: pointer;
    filter: brightness(115%);
  }
`;

// Define el componente funcional Button
export const Button = (props) => {
  const { isActive, children } = props; // Desestructura las props aquí

  return <ButtonHeader isActive={isActive}>{children}</ButtonHeader>;
};
