import React from "react";
import styled from "styled-components";
import img from "../images/stars.svg";
const Body = () => {
  const data = [
    {
      id: 1,
      projects: 9,
      duration: "3-9 months",
      course: "Front End Web Development",
      desc: "Learn how to build basic websites and user experiences with HTML, CSS and Javascript",
    },
    {
      id: 2,
      projects: 10,
      duration: "3-9 months",
      course: "Full Stack JavaScript",
      desc: "Learn how to build interactive websites and powerful web applications with the most popular full stack programming language.",
    },
    {
      id: 3,
      projects: 5,
      duration: "2-5 months",
      course: "Full Stack JavaScript",
      desc: "Learn how to build basic command line and web applications using this beginner-friendly, and versatile programming language..",
    },
    {
      id: 4,
      projects: 13,
      duration: "3-9 months",
      course: "Web Development",
      desc: "Learn how to build interactive websites and powerful web applications with HTML, CSS, and JavaScript, the most popular full stack programming languages.",
    },
    {
      id: 5,
      projects: 8,
      duration: "3-8 months",
      course: "Data Analysis",
      desc: "Learn how to use data to answer questions, gather actionable insights, and tell a story with your information using spreadsheets, databases, and the Python programming language, a critical skill for the 21st century.",
    },
    {
      id: 6,
      course: "Not sure where to start",
      desc: "You're about to launch your career, so we just want to make sure we start you off on the right path!",
    },
  ];
  return (
    <Container>
      <Wrapper bg={img}>
        <Heading>Techdegree programs</Heading>
        <SubHead>All programs are $199/month</SubHead>
        <CardHolder>
          {data.map((props) => (
            <Card>
              <CardHead>
                <CardHeadCenter>
                  <ProjectNumber>Project: {props.projects}</ProjectNumber>
                  <ProjectNumber>{props.duration}</ProjectNumber>
                </CardHeadCenter>
              </CardHead>
              <CardImage></CardImage>
              <Course>{props.course}</Course>
              <CardDesc>{props.desc}</CardDesc>
              <ButtonHolder>
                <Learn
                  bh="solid 3px #505b5e"
                  bc="#ffffff"
                  c="#576366"
                  b="solid 2px  #576366"
                >
                  Learn More
                </Learn>
                <Learn c="#ffffff" bch="#004652" bc="rgb(91,176,182)">
                  Enroll Today
                </Learn>
              </ButtonHolder>
            </Card>
          ))}
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default Body;

const Learn = styled.div`
  width: 158px;
  height: 52px;
  color: ${({ c }) => c};
  background-color: ${({ bc }) => bc};
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  letter-spacing: normal;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  font-family: "Gotham Rounded A", "Gotham Rounded B", "Gotham Rounded",
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: ${({ b }) => b};
  transition: all 350ms;
  :hover {
    border: ${({ bh }) => bh};
    background-color: ${({ bch }) => bch};
    cursor: pointer;
  }
  @media screen and (max-width: 450px) {
    width: 125px;
    font-size: 13px;
    height: 45px;
  }
  @media screen and (max-width: 325px) {
    width: 100px;
    height: 45px;
    font-size: 12px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;
const CardDesc = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #576366;
  font-weight: bold;
  letter-spacing: normal;
  width: 75%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 80px;
  @media screen and (max-width: 450px) {
  }
  @media screen and (max-width: 325px) {
    font-size: 10px;
    line-height: 15px;
  }
`;
const Course = styled.div`
  color: #3659a2;
  margin-bottom: 15px;
  font-size: 18px;
  width: 100%;
  display: flex;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: normal;
  font-family: "Gotham Rounded A", "Gotham Rounded B", Helvetica, Arial,
    sans-serif;
  justify-content: center;
  @media screen and (max-width: 450px) {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 10px;
  }
`;
const CardHeadCenter = styled.div`
  width: 90%;
  letter-spacing: normal;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
const CardImage = styled.div`
  width: 100px;
  height: 100px;
  /* background-color: red; */
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  top: -20px;
  left: 140px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media screen and (max-width: 450px) {
    width: 80px;
    height: 80px;
    left: 100px;
    top: -10px;
  }
  @media screen and (max-width: 325px) {
    width: 70px;
    height: 70px;
    top: -10px;
    left: 80px;
  }
`;
const ProjectNumber = styled.div`
  font-size: 14px;
  color: #ffffff;
  letter-spacing: normal;
  font-family: "Gotham Rounded A", "Gotham Rounded B", Helvetica, Arial,
    sans-serif;
  line-height: 21px;
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
const CardHead = styled.div`
  width: 100%;
  background-color: #304e8f;
  letter-spacing: normal;
  text-align: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  height: 60px;
  line-height: 16px;
  font-size: 16px;
  margin-bottom: 50px;
  @media screen and (max-width: 450px) {
    font-size: 13px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 325px) {
    height: 50px;
  }
`;
const Card = styled.div`
  position: relative;
  width: 394px;
  min-height: 350px;
  height: 100%auto;
  padding-bottom: 10px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  @media screen and (max-width: 450px) {
    width: 300px;
    height: 360px;
  }
  @media screen and (max-width: 325px) {
    width: 90%;
    height: 320px;
  }
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;
const SubHead = styled.div`
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  @media screen and (max-width: 350px) {
    font-size: 12px;
    margin-bottom: 30px;
  }
`;
const Heading = styled.div`
  font-size: 40px;
  color: #ffffff;
  font-family: "Gotham Rounded A", "Gotham Rounded B", Helvetica, Arial,
    sans-serif;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
  @media screen and (max-width: 350px) {
    font-size: 25px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%auto;
  /* padding-bottom: 30px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${({ bg }) => bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #3f4850;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
`;
