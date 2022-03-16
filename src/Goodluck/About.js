import React from "react";
import styled from "styled-components";
import video from "./vid.mp4";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Video src={video} inputMode={true} controls />
        <Card>
          <div>
            Certification for all skill levels, including true beginners
          </div>{" "}
          <span>
            Techdegree is a bootcamp-style program that guides you through a
            full curriculum of Treehouse learning. To earn your Techdegree,
            you'll complete a series of projects for your professional
            portfolio. Techdegree learning includes courses, workshops, quizzes,
            and access to the exclusive Treehouse Slack community for live
            support.
          </span>
        </Card>
      </Wrapper>
      <Holder>
        <IconHolder>
          <Icon src="/Image/icon.png" />
          <Text>Guided learning paths and weekly office hours</Text>
        </IconHolder>
        <Line></Line>

        <IconHolder>
          <Icon src="/Image/icon2.png" />
          <Text>Learn professional, technical, and soft skills</Text>
        </IconHolder>
        <Line></Line>

        <IconHolder>
          <Icon src="/Image/icon3.png" />
          <Text>Live chat support and community via Slack</Text>
        </IconHolder>
      </Holder>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Video = styled.video`
  height: 450px;
  width: 800px;
  object-fit: cover;
  opacity: 1;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  div {
    width: 500px;
    max-width: 400px;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    color: #40484a;
    @media screen and (max-width: 400px) {
      width: 94%;
    }
  }

  span {
    width: 500px;
    max-width: 400px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin-top: 20px;
    color: #576366;
    @media screen and (max-width: 400px) {
      width: 94%;
    }
  }
`;

const Holder = styled.div`
  width: 90%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  align-items: center;
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 250px;
  }
`;

const Icon = styled.img`
  width: 70%;
  @media screen and (max-width: 760px) {
    width: 60%;
  }
`;

const Text = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Line = styled.div`
  height: 200px;
  width: 1px;
  background-color: lightgray;
  @media screen and (max-width: 760px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
