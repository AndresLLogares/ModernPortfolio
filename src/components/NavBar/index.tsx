import React from "react";
import { Menu, MenuItem, TextButton } from "../../styles/Menu";
import { ArrowRightSquareFill } from "@styled-icons/bootstrap/ArrowRightSquareFill";
import { useNavigate } from "react-router-dom";

const EnumComponents = {
  AboutMe: "AboutMe",
  Technologies: "Technologies",
  WorkingExperience: "WorkingExperience",
  ContactMe: "ContactMe",
  ChatGPT: "ChatGPT",
};

const NavBar = (props: any) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuItem onClick={() => props.handleComponent(EnumComponents.AboutMe)}>
        <TextButton>About Me</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem
        onClick={() => props.handleComponent(EnumComponents.Technologies)}
      >
        <TextButton>Technologies</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem
        onClick={() => props.handleComponent(EnumComponents.WorkingExperience)}
      >
        <TextButton>Working Experience</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem onClick={() => props.handleComponent(EnumComponents.ContactMe)}>
        <TextButton>Contact Me</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
      <MenuItem onClick={() => navigate("/chatgpt")}>
        <TextButton>ChatGPT</TextButton>
        <ArrowRightSquareFill size={20} />
      </MenuItem>
    </Menu>
  );
};

export default NavBar;
