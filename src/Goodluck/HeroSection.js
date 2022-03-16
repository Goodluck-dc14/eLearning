import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Container>
      <Hero>
        <span>The Best Online Bootcamps for Coding & Design</span>
        <div>
          Build a portfolio, create a network, and land your dream job with
          Techdegree
        </div>
      </Hero>
      <Wrapper>
        <Text>Try it free for 7 days, then $199 a month</Text>
        <EmailHolder>
          <label>Email address</label>
          <EmailBtHolder>
            <input />
            <Button>Join Now</Button>
          </EmailBtHolder>
        </EmailHolder>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  background-color: red;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Hero = styled.div`
  background-image: url("./Image/backg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 24px;
    font-weight: 600;
    line-height: 31px;
    font-style: normal;
    color: #ffffff;
  }

  div {
    font-size: 48px;
    font-weight: 600;
    line-height: 62px;
    font-style: normal;
    color: #ffffff;
    text-align: center;
    width: 80%;
  }
`;
const Wrapper = styled.div`
  height: 286px;
  width: 748px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 770px) {
    width: 500px;
  }
`;

const Text = styled.div`
  height: 75px;
  width: 748px;
  background-color: #2d3339;
  border-radius: 5px 5px 0 0;
  color: white;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400px;
  justify-content: center;
  @media screen and (max-width: 770px) {
    width: 500px;
  }
`;

const EmailHolder = styled.div`
  display: flex;
  justify-content: space-around;
  height: 90px;
  flex-direction: column;
`;

const EmailBtHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.div`
  height: 55px;
  width: 200px;
  background: #004652;
  border-radius: 5px;
`;
