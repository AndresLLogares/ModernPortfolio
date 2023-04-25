import { BoxText, DivQuotes, DivTitle, Title } from "../../styles/Aboutme";
import { WorkOutline } from "@styled-icons/material/WorkOutline";
import { PersonNote } from "@styled-icons/fluentui-system-filled/PersonNote";
import { Experience, Date } from "../../styles/WorkingExperience";

const WorkingExperience = () => {
  return (
    <BoxText>
      <DivTitle>
        <WorkOutline size={25} />
        <Title>Working Experience</Title>
      </DivTitle>
      <DivQuotes>
        <PersonNote size={20} />
        <Date>OCTOSOFT</Date>
        <Date>AUGUST 2021 | MAY 2022</Date>
        <Experience>
          ⬤ Developed and structured feature-rich web client websites, ensuring
          that all needs were met and company policies and procedures followed
          creating high-quality code
        </Experience>
        <Experience>
          ⬤ Collaborated with project managers and creative teams to deliver an
          original and effective solution, advised clients and provided my
          expertise
        </Experience>
        <Experience>
          ⬤ Collaborated with the team to design and structure and implement new
          websites from start to finish and updated existing websites
        </Experience>
        <Experience>
          ⬤ Participated in weekly meetings to discuss the progress of the
          project and the team's goals
        </Experience>
        <br/>
        <PersonNote size={20} />
        <Date>ALT / GALICIA BANK</Date>
        <Date>MAY 2022 | PRESENT</Date>
        <Experience>
          ⬤ I am currently working for Banco Galicia updating the software of
          the self-service terminals to provide greater control and security for
          users.
        </Experience>
        <Experience>
          ⬤ Development of a React application that connects with both the
          hardware services of the terminal and the Bank's BFFT.
        </Experience>
        <Experience>
          ⬤ Implementation of the corresponding security measures so that it is
          safe to operate for both the client and the Bank.
        </Experience>
      </DivQuotes>
    </BoxText>
  );
};

export default WorkingExperience;
