import React from 'react'
import { styled } from "styled-components";
import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import { Banner } from '../../components/Banner/Banner.tsx';
import { CardSection } from '../../components/CardSection/CardSection.tsx';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem
`

export const Home = () =>{
    return(
        <>
        <Header/>
        <HomeContainer>


        <Banner/>
        <CardSection/>
        </HomeContainer>
        <Footer/>
        </>
    );
};