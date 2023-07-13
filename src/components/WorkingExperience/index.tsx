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
        <Date>ACCENTURE</Date>
        <Date>JULY 2023 | PRESENT</Date>
        <Experience>
          ⬤ As a valued team member at Accenture, I am currently engaged in an
          exciting project to develop a cutting-edge banking application. My
          primary focus is ensuring the highest standards of security and ethics
          throughout the development process.
        </Experience>
        <Experience>
          ⬤ In my role, I diligently comply with the client's requirements,
          consistently delivering exceptional results. Additionally, I actively
          contribute by proposing innovative ideas to enhance and expedite the
          application's development, striving for continuous improvement.
        </Experience>
        <Experience>
          ⬤ Recognizing the importance of professional growth, I
          enthusiastically participate in ongoing internal training courses
          offered by Accenture. By continuously expanding my skill set and
          knowledge, I aim to enhance my career trajectory and contribute to the
          company's success.
        </Experience>
        <Experience>
          ⬤ Overall, my dedication to excellence, strong adherence to security
          and ethics, and commitment to continuous learning make me a valuable
          asset to the Accenture team.
        </Experience>
        <br />

        <PersonNote size={20} />
        <Date>ALT / BANCO GALICIA</Date>
        <Date>MAY 2022 | JULY 2023</Date>
        <Experience>
          ⬤ Enhancing self-service terminals by updating the software,
          prioritizing user control and security.
        </Experience>
        <Experience>
          ⬤ Developing a React application that seamlessly integrates with both
          terminal hardware services and the Bank's BFFT.
        </Experience>
        <Experience>
          ⬤ Implementing robust security measures to ensure a safe operational
          environment for clients and the Bank.
        </Experience>
        <Experience>
          ⬤ Collaborating with cross-functional teams to deliver innovative
          solutions and optimize user experiences.
        </Experience>
        <br />

        <PersonNote size={20} />
        <Date>OCTOSOFT</Date>
        <Date>AUGUST 2021 | MAY 2022</Date>
        <Experience>
          ⬤ Developed and structured feature-rich web client websites, ensuring
          adherence to company policies and high-quality code standards.
        </Experience>
        <Experience>
          ⬤ Worked closely with project managers and creative teams to deliver
          original and effective solutions, providing expert advice to clients.
        </Experience>
        <Experience>
          ⬤ Collaborated within a team to design, structure, and implement new
          websites from inception to completion, as well as updating existing
          websites.
        </Experience>
        <Experience>
          ⬤ Actively participated in weekly progress meetings, aligning with
          team goals and discussing project advancements.
        </Experience>
        <br />
      </DivQuotes>
    </BoxText>
  );
};

export default WorkingExperience;
