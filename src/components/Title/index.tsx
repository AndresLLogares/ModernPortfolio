import React from 'react';
import { Box, Name, ImageLogo, DivLogo } from '../../styles/Title';

const Title = () => {
  return (
    <Box>
      <ImageLogo />
      <DivLogo>
        <Name>Andrés Luis Logares</Name>
        <Name>Software Developer</Name>
      </DivLogo>
    </Box>
  );
};

export default Title;
