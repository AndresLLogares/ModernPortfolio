import { LogoReact } from '@styled-icons/ionicons-solid/LogoReact';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Express } from '@styled-icons/simple-icons/Express';
import { Apollographql } from '@styled-icons/simple-icons/Apollographql';
import { Graphql } from '@styled-icons/simple-icons/Graphql';
import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Gatsby } from '@styled-icons/remix-fill/Gatsby';
import { Materialui } from '@styled-icons/simple-icons/Materialui';
import { Solidity } from '@styled-icons/simple-icons/Solidity';
import { MilitaryTech } from '@styled-icons/material-twotone/MilitaryTech';
import {  BoxText, DivTitle, Title } from '../../styles/Aboutme';
import { ButtonTechnologies, DivTechnologies } from '../../styles/Technologies';
import rxjs from '../../assets/rxjs.svg';
const Technologies = () => {
  return (
    <BoxText>
      <DivTitle>
        <MilitaryTech size={25} />
        <Title>Technologies</Title>
      </DivTitle>
      <DivTechnologies>
      <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://rxjs.dev/">
          Rxjs
          <img src={rxjs} alt='' style={{width:'30px'}} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://es.reactjs.org/">
          React
          <LogoReact size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.javascript.com/">
          Javascript
          <Javascript size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://es.redux.js.org/">
          Redux
          <Redux size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://expressjs.com/">
          Express
          <Express size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.apollographql.com/">
          Apollo
          <Apollographql size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://graphql.org/">
          GraphQl
          <Graphql size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://html.com/">
          Html
          <Html5 size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.w3.org/Style/CSS/Overview.en.html">
          Css
          <Css3 size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.mongodb.com/">
          Mongo
          <Mongodb size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://nodejs.org/es/">
          Nodejs
          <Nodejs size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://nextjs.org/">
          Nextjs
          <Nextdotjs size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.typescriptlang.org/">
          Typescript
          <Typescript size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://www.gatsbyjs.com/">
          Gatsby
          <Gatsby size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://mui.com/">
          MaterialUI
          <Materialui size={30} />
        </ButtonTechnologies>
        <ButtonTechnologies
          rel="noreferrer"
          target="_blank"
          href="https://solidity-es.readthedocs.io/es/latest/">
          Solidity
          <Solidity size={30} />
        </ButtonTechnologies>
      </DivTechnologies>
    </BoxText>
  );
};

export default Technologies;
