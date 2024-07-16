import React from "react";
import { styled } from "styled-components";

import { Trash2, Pencil } from "lucide-react";

const CardVideo = styled.div`
  background-color: var(--black);
  border: 3px solid ${(props) => props.color};
  border-radius: 0.75rem;
  box-shadow: 1px 1px 5px 1px ${(props) => props.color};
  width: 31%;

  img {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    width: 100%;
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 769px) {
    width: 48%;
  }
  @media (max-width: 426px) {
    width: 95%;
  }
`;

const ContainerAction = styled.div`
  display: flex;
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  transition: all 0.5 ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const Card = (props) => {
  return (
    <CardVideo color={props.color} id={props.id}>
      <a href={props.video}>
        <img src={props.img} alt={props.title} />
      </a>
      <div>
        <ContainerAction onClick={props.onDelete}>
          <Trash2 />
          <span>Borrar</span>
        </ContainerAction>
        <ContainerAction>
          <Pencil />
          <span>Editar</span>
        </ContainerAction>
      </div>
    </CardVideo>
  );
};
