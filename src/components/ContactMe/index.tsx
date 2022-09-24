import { Contact } from '@styled-icons/boxicons-solid/Contact';
import { BoxText, DivTitle, Title } from '../../styles/Aboutme';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Phone } from '@styled-icons/boxicons-regular/Phone';
import { Email } from '@styled-icons/evaicons-solid/Email';
import { Discord } from '@styled-icons/fa-brands/Discord';
import { TextDocument } from '@styled-icons/entypo/TextDocument';
import { ButtonTechnologies, DivTechnologies } from '../../styles/Technologies';

const ContactMe = () => {
  return (
    <BoxText>
      <DivTitle>
        <Contact size={25} />
        <Title>Contact Me</Title>
      </DivTitle>
      <DivTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/">
          Linkedin
          <Linkedin size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://github.com/AndresLLogares">
          Github
          <Github size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://discordapp.com/users/935290092338159626/">
          Discord
          <Discord size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://wa.me/5491136005563">
          Phone
          <Phone size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="mailto:andresl940@hotmail.com">
          E-Mail
          <Email size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1jkP_jCG66JDquoF5S_2Xm7YdkRo0C2gz/view?usp=sharing">
          Resume
          <TextDocument size={30} />
        </ButtonTechnologies>
      </DivTechnologies>
    </BoxText>
  );
};

export default ContactMe;
