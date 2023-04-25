import React from "react";
import {
  Text,
  BoxText,
  DivTitle,
  Title,
  DivQuotes,
  DivText,
} from "../../styles/Aboutme";
import { FilePerson } from "@styled-icons/bootstrap/FilePerson";
import { QuoteLeft } from "@styled-icons/boxicons-solid/QuoteLeft";
import { QuoteRight } from "@styled-icons/boxicons-solid/QuoteRight";
const AboutMe = () => {
  return (
    <BoxText>
      <DivTitle>
        <FilePerson size={25} />
        <Title>About Me</Title>
      </DivTitle>
      <DivQuotes>
        <QuoteLeft size={30} />
        <DivText>
          <Text>
          Hi, I'm Andres, an experienced developer who is constantly looking for innovative solutions to everyday problems. 
          In my years in this industry, I have honed my analytical thinking and collaboration skills, and I love working in a team.
          Prior to my current position as a fullstack developer at Banco Galicia, I was a junior fullstack developer at Octosoft. 
          While working there, I got involved in blockchain development, which has been my specialty for a year. I am also currently 
          learning about Data Science and I love it.  
          </Text>
        </DivText>
        <QuoteRight size={30} />
      </DivQuotes>
    </BoxText>
  );
};

export default AboutMe;
