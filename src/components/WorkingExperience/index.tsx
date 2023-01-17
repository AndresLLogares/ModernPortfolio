import { BoxText, DivQuotes, DivTitle, Title } from '../../styles/Aboutme';
import { WorkOutline } from '@styled-icons/material/WorkOutline';
import { Pin } from '@styled-icons/boxicons-solid/Pin';
import { Experience, Date } from '../../styles/WorkingExperience';

const WorkingExperience = () => {
  return (
    <BoxText>
      <DivTitle>
        <WorkOutline size={25} />
        <Title>Working Experience</Title>
      </DivTitle>
      <DivQuotes>
        <Pin size={20} />
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
        <Pin size={20} />
        <Date>ALT</Date>
        <Date>MAY 2022 | PRESENT</Date>
        <Experience>
          ⬤ I work for a bank in Argentina to upgrade the self-service
          terminals implementing the latest technology.
        </Experience>
        <Experience>
          ⬤ Integration of the frontend with the bank's database, the terminals to perform
          different operations.
        </Experience>
        <Experience>
          ⬤ Perform security measures for the frontend and avoid possible
          information leaks.
        </Experience>
      </DivQuotes>
    </BoxText>
  );
};

export default WorkingExperience;
