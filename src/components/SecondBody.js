import React from 'react';
import styled from "styled-components"
import icon1 from "../images/icon1.png"
const SecondBody = () => {
  return (
    <Container>
      <Wrapper>
      <CardAndImage>
      <Image src={icon1}/>
      <TopicAndContent>
      <Topic>
      Built on the Treehouse Learning Platform
      </Topic>
      <Content>
      Techdegree is buil on the Treehouse learning style, with interactive videos, workspaces, quizzes and more
      </Content>
      </TopicAndContent>
      </CardAndImage>
      <CardAndImage>
      <Image src={icon1}/>
      <TopicAndContent>
      <Topic>
      Built on the Treehouse Learning Platform
      </Topic>
      <Content>
      Techdegree is buil on the Treehouse learning style, with interactive videos, workspaces, quizzes and more
      </Content>
      </TopicAndContent>
      </CardAndImage>
      </Wrapper>
      <BorderLine></BorderLine>
      <Wrapper>
      <CardAndImage>
      <Image src={icon1}/>
      <TopicAndContent>
      <Topic>
      Built on the Treehouse Learning Platform
      </Topic>
      <Content>
      Techdegree is buil on the Treehouse learning style, with interactive videos, workspaces, quizzes and more
      </Content>
      </TopicAndContent>
      </CardAndImage>
      <CardAndImage>
      <Image src={icon1}/>
      <TopicAndContent>
      <Topic>
      Built on the Treehouse Learning Platform
      </Topic>
      <Content>
      Techdegree is buil on the Treehouse learning style, with interactive videos, workspaces, quizzes and more
      </Content>
      </TopicAndContent>
      </CardAndImage>
      </Wrapper>
      <Enroll>Enroll Now</Enroll>
    </Container>
  )
}

export default SecondBody

const Enroll = styled.div`
width: 150px;
height: 40px;
border-radius: 5px;
background-color: rgb(91,176,182);
display: flex;
justify-content: center;
align-items: center;
transition: all 350ms;
color: white;
font-size: 14px;
:hover{
    cursor: pointer;
    background-color: #004652;

}
@media screen and (max-width: 700px){
    width: 90%;
}
`

const BorderLine= styled.div`
outline: solid 1px lightgray;
width: 80%;
@media screen and (max-width: 500px){
    width: 90%;
}
`
const Content= styled.div`
font-size: 16px;
color: #576366;
width: 370px;
min-height: 72px;
height: 100%;
display: flex;
flex-wrap:wrap;
@media screen and (max-width:400px){
    width: 94%;
}
`
const Topic= styled.div`
font-weight: bold;
font-size: 24px;
width: 380px;
color: #40484a;
line-height: 31px;
margin-bottom: 16px;
@media screen and (max-width:400px){
    width: 94%;
    font-size: 20px;
    line-height: 25px;
}
`
const TopicAndContent= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 380px;
@media screen and (max-width:400px){
    width: 94%;
}
`
const Image= styled.img`
margin-right: 10px;
width: 200px;
height: 200px;
object-fit: contain;
@media screen and (max-width: 700px){
   
}
`
const CardAndImage = styled.div`
display: flex;
align-items: center;
width: 615px;
min-height: 326px;
justify-content: center;
flex-wrap: wrap;
height: 100%;
@media screen and (max-width:720px){
    width: 90%;
    display: flex;
}
@media screen and (max-width: 500px){
    margin-bottom: 20px;
}
`
const Wrapper = styled.div`
width: 85%;
display: flex;
flex-wrap: wrap;
margin: 10px 0;
@media screen and (max-width:720px){
   
}
`

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 30px;
`
