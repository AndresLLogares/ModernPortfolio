import styled from 'styled-components';
import { AnimationBox } from '../Animations/index';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  flex-direction: column;
  background-color: #ffffff;
  opacity: 1;
  background-image: radial-gradient(#FBA92C 0.70px, #ffffff 0.70px);
  background-size: 15px 15px;
  z-index: 3;
  @media (max-width: 1024px) {
    height: fit-content;
    background-size: 15px 15px;
    overflow: hidden;
  }
`;

export const Video = styled.video`
  object-fit: cover;
  ${AnimationBox}
  animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
  position: absolute;
  top: 5vh;
  border-radius: 5px;
  height: 90%;
  width: 70%;
  right: 0;
  z-index: 2;
  @media (max-width: 1024px) {
    display: none;
  }
`;
