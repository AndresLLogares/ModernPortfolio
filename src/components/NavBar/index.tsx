import React from 'react';
import { Menu, MenuItem, TextButton } from '../../styles/Menu';
import { ArrowRightSquareFill } from '@styled-icons/bootstrap/ArrowRightSquareFill';

const EnumComponents = {
  AboutMe: 'AboutMe',
  Technologies: 'Technologies',
  WorkingExperience: 'WorkingExperience',
  ContactMe: 'ContactMe',
};

const NavBar = (props: any) => {
  return (
    <Menu>
      <MenuItem onClick={() => props.handleComponent(EnumComponents.AboutMe)}>
        <TextButton>About Me</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem
        onClick={() => props.handleComponent(EnumComponents.Technologies)}>
        <TextButton>Technologies</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem
        onClick={() => props.handleComponent(EnumComponents.WorkingExperience)}>
        <TextButton>Working Experience</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem onClick={() => props.handleComponent(EnumComponents.ContactMe)}>
        <TextButton>Contact Me</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
    </Menu>
  );
};

export default NavBar;
