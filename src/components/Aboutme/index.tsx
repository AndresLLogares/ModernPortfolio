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
            Hi, I'm Andres, an experienced and innovative developer with a
            passion for solving everyday problems. With a strong background in
            the industry, I have developed highly refined analytical thinking
            and collaboration skills, making me an effective team player. I am
            always eager to expand my knowledge and stay up-to-date with the
            latest technologies. I am currently exploring new technologies and
            actively learning, which fuels my passion for growth and innovation.
          </Text>
        </DivText>
        <QuoteRight size={30} />
      </DivQuotes>
    </BoxText>
  );
};

export default AboutMe;
