import styled from 'styled-components';
import { Colors } from '../colors';
import {
  AnimationSlideIn,
  AnimationText,
  AnimationSlideOut,
} from '../Animations/index';

export const Box = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  flex-direction: row;
  z-index: 2;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
  }
`;

export const BoxPattern = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5vh;
  width: 30%;
  height: 100vh;
  flex-direction: column;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const BoxComponent = styled.div<{ width: string; animation: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : '30%;')};
  height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#FBA92C 0.7px, #ffffff 0.7px);
  background-size: 15px 15px;
  border-left: 5px solid ${Colors.orange};
  ${(props) =>
    props.animation === 'in' ? AnimationSlideIn : AnimationSlideOut};
  animation: ${(props) =>
    props.animation === 'in'
      ? 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      : 'slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;'};
  @media (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    background-size: 15px 15px;
    border: none;
    margin-bottom: 5vh;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  padding: 5%;
  height: fit-content;
  border: ${Colors.orange} solid 5px;
  ${AnimationText}
  animation: focus-in-expand-fwd 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    backwards;
`;

export const TitleMenu = styled.h3`
  font-size: 35px;
  letter-spacing: 1px;
  margin: 0;
  color: ${Colors.orange};
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  ${AnimationText}
  animation: focus-in-expand-fwd 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    backwards;
`;

export const TextButton = styled.h3`
  text-align: center;
  font-size: 18px;
  margin: 0;
  margin-right: 10px;
  padding: 0;
  font-family: 'Poppins', sans-serif;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
  border: transparent;
  background-color: transparent;
  color: ${Colors.black};

  &:hover {
    color: ${Colors.orange};
    cursor: pointer;
    transition-duration: 2s;
  }
`;
