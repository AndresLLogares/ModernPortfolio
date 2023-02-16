import React, { useState } from 'react';
import AboutMe from '../Aboutme';
import Layout from '../Layout';
import Technologies from '../Technologies';
import ContactMe from '../ContactMe';
import WorkingExperience from '../WorkingExperience';
import ChatGPT from '../ChatGPT';
import NavBar from '../NavBar';
import { Box, BoxPattern, TitleMenu } from '../../styles/Menu';
import Title from '../Title';
import { BoxComponent } from '../../styles/Menu';
const Main = () => {
  const [selectedComponent, setSelectedComponent] = useState(AboutMe);
  const [selectedAnimation, setSelectedAnimation] = useState('in');
  const [selectedWidth, setSelectedWidth] = useState('30%');

  const handleComponent = (selectd: string) => {
    setSelectedAnimation('out');
    switch (selectd) {
      case 'AboutMe':
        setTimeout(() => {
          setSelectedAnimation('in');
          setSelectedComponent(AboutMe);
          setSelectedWidth('30%');
        }, 1000);
        return;
      case 'ContactMe':
        setTimeout(() => {
          setSelectedAnimation('in');
          setSelectedComponent(ContactMe);
          setSelectedWidth('30%');
        }, 1000);
        return;
      case 'WorkingExperience':
        setTimeout(() => {
          setSelectedAnimation('in');
          setSelectedComponent(WorkingExperience);
          setSelectedWidth('40%');
        }, 1000);
        return;
      case 'Technologies':
        setTimeout(() => {
          setSelectedAnimation('in');
          setSelectedWidth('50%');
          setSelectedComponent(Technologies);
        }, 1000);
        return;
      case 'ChatGPT':
        setTimeout(() => {
          setSelectedAnimation('in');
          setSelectedWidth('50%');
          setSelectedComponent(ChatGPT);
        }, 1000);
        return;
      default:
        setTimeout(() => {
          setSelectedAnimation('in');
          setSelectedWidth('30%');
          setSelectedComponent(AboutMe);
        }, 1000);

        return;
    }
  };

  return (
    <Layout>
      <Box>
        <BoxPattern>
          <Title />
          <TitleMenu>Menu</TitleMenu>
          <NavBar handleComponent={handleComponent} />
        </BoxPattern>
        <BoxComponent
          width={selectedWidth}
          animation={selectedAnimation}>
          {selectedComponent}
        </BoxComponent>
      </Box>
    </Layout>
  );
};

export default Main;
