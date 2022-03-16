import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Holder>
      <Wrapper></Wrapper>
      <TextHolder>
        <HeadText>Mentorship</HeadText>
        <Intro>
          How promotion excellent curiosity yet attempted happiness. Gay
          prosperous impression had conviction. For every delay death ask style.
          Me mean able by in they. Extremely now strangers contained breakfast
          him discourse
        </Intro>
        <Button> Get Started</Button>
      </TextHolder>
    </Holder>
  );
};

export default Hero;

const Holder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url("./Image/shke.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  opacity: 0.4;
`;

const TextHolder = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  color: #fff;
  position: absolute;
  bottom: 100px;
  flex-direction: column;
`;

const HeadText = styled.div`
  font-size: 50px;
  line-height: 3;

  @media screen and (max-width: 425px) {
    line-height: 2;
  }
`;

const Intro = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 900px;
  padding-bottom: 25px;

  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
`;

const Button = styled.div`
  background-color: #123456;
  color: #fff;
  font-size: 20px;
  width: 200px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.35s;

  :hover {
    opacity: 0.8;
  }
`;
