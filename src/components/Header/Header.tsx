import React from 'react'
import { Button } from '../Button/Button.tsx';
import { styled } from "styled-components"

const HeaderAluraFlix = styled.header`
align-items: center;
background-color: var(--dark-gray);
display: flex;
justify-content: space-between;
height: 125px;
padding: 0rem 2rem;
width: 100%;
`

const ContainerButtons = styled.div`
display: flex;
gap: 1rem;
`

export const Header = () => {
return(
<HeaderAluraFlix >
    <figure>
        <img src="/img/aluraflix.png" alt="aluraflix" />
    </figure>
    <ContainerButtons>
        <Button
        isActive={true}>
            Home
        </Button>
        <Button
        isActive={false}>
            Nuevo Video
        </Button>
    </ContainerButtons>
</HeaderAluraFlix>
);

};
