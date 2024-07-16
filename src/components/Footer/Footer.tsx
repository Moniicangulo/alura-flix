import React from 'react'
import { styled } from "styled-components"

const FooterAluraflix = styled.footer`
align-items: center;
background-color: var(--dark-gray);
border-top: 4px solid var(--primary-color);
color: var(--white);
display: flex;
flex-direction: column;
gap: 0.75rem;
justify-content: center;
padding: 2rem;
width: 100%;
`;

export const Footer = () => {
    return(
        <FooterAluraflix>
            <img src="./img/aluraflix.png" alt="aluraflix" />
            <p>Desarrollado por Monica Angulo</p>
        </FooterAluraflix>
    );
}