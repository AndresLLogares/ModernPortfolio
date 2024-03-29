import styled from "styled-components";
import { Colors } from "../colors";
import { AnimationBox } from "../Animations/index";

export const BoxText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 90%;
  flex-direction: column;
  ${AnimationBox}
  animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${Colors.orange};
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const Title = styled.h3`
  display: flex;
  font-size: 25px;
  letter-spacing: 1px;
  margin: 0;
  margin-left: 10px;
  font-family: "Poppins", sans-serif;
`;

export const DivQuotes = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  ${AnimationBox}
  animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
  overflow-y: auto;
`;

export const DivText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

export const Text = styled.p`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  color: ${Colors.black};
`;
