import styled from "styled-components";
import { Colors } from "../colors";
import { AnimationBox, Rotation } from "../Animations/index";

export const BoxChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#fba92c 0.7px, #ffffff 0.7px);
  background-size: 15px 15px;
`;

export const BoxTextChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  height: fit-content;
  width: 90%;
  flex-direction: column;
  ${AnimationBox}
  animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
`;

export const FormChat = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`;

export const InputChat = styled.input`
  display: flex;
  width: 90%;
  align-items: center;
  color: ${Colors.black};
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  height: 20px;
  text-align: left;
  background-color: ${Colors.white};
  border-radius: 5px;
  border: 3px solid ${Colors.black};
  margin-top: 3vh;
  margin-bottom: 1vh;
`;

export const ButtonChat = styled.button<{ disabled: boolean }>`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: ${Colors.orange};
  color: ${Colors.black};
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 1vh;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: transparent;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition-duration: 2s;
  }
`;

export const BackButton = styled.button`
text-align: center;
align-items: center;
position: fixed;
bottom: 25px;
right: 25px;
background-color: ${Colors.orange};
color: ${Colors.black};
border-radius: 5px;
width: 60px;
height: 30px;
padding: 1vh;
border: transparent;
&:hover {
  opacity: 0.5;
  cursor: pointer;
  transition-duration: 2s;
}
`;

export const BoxConversation = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: fit-content;
`;

export const FromText = styled.p`
  font-size: 18px;
  font-family: "Nova Mono", monospace;
  color: ${Colors.black};
  font-weight: bold;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const TextConversation = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  background-color: ${(props) =>
    props.color === "user" ? Colors.lessGrey : Colors.white};
  border: 3px solid ${Colors.black};
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  padding: 1vh;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: ${Colors.orange} transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  margin-top: 5vh;
  margin-bottom: 5vh;
  ${Rotation}
  animation: rotation  1s linear infinite;
`;
