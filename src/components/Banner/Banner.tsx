import React from "react";
import { styled } from "styled-components";

const BannerMain = styled.section`
  align-items: center;
  display: flex;
  background-image: url("./img/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 1px 1px 50px 50px var(--background);
  justify-content: space-around;
  height: 80vh;

  .text {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.75rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 40%;
  }
  img {
    width: 30%;
  }
`;

export const Banner = () => {
  return (
    <BannerMain>
      <div className="text">
        <h1>Challenge React</h1>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <img src="./img/img-banner.svg" alt="" />
    </BannerMain>
  );
};

