import styled from "styled-components";
import { Colors } from "../colors";
import { AnimationBox } from "../Animations/index";

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

export const ButtonChat = styled.button`
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
  background-color: ${(props) => (props.color === "user" ? Colors.lessGrey : Colors.white)};
  border: 3px solid ${Colors.black};
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  padding: 1vh;
`;
