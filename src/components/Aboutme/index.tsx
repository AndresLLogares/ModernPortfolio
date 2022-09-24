import React from 'react';
import {
  Text,
  BoxText,
  DivTitle,
  Title,
  DivQuotes,
  DivText,
} from '../../styles/Aboutme';
import { FilePerson } from '@styled-icons/bootstrap/FilePerson';
import { Pin } from '@styled-icons/boxicons-solid/Pin';
const AboutMe = () => {
  return (
    <BoxText>
      <DivTitle>
        <FilePerson size={35} />
        <Title>About Me</Title>
      </DivTitle>
      <DivQuotes>
        <Pin size={20} />
        <DivText>
          <Text>
            I am passionate about development, trying to improve my work and my
            skills every day.
          </Text>
        </DivText>
        <Pin size={20} />
        <DivText>
          <Text>
            I always work with curiosity and impetus looking for solutions to
            the problems that arise and learning new things in this eternal path
            of study that is to be a developer while also learning from my peers
            and helping other team members
          </Text>
        </DivText>
        <Pin size={20} />
        <DivText>
          <Text>
            I have worked on projects such as NFT sales websites, landpages for
            companies and some other development projects,
          </Text>
        </DivText>
        <Pin size={20} />
        <DivText>
          <Text>
            I am currently working on a project in Argentina for Banco Galicia
            to update their Self-Service Kiosk.
          </Text>
        </DivText>
      </DivQuotes>
    </BoxText>
  );
};

export default AboutMe;
