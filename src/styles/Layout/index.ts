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
  background-image: radial-gradient(#9615db 0.45px, #ffffff 0.45px);
  background-size: 9px 9px;
  z-index: 3;
`;

export const Video = styled.video`
  object-fit: cover;
  ${AnimationBox}
  animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
  position: absolute;
  top: 5vh;
  bottom: 5vh;
  height: 90%;
  width: 70%;
  right: 0;
  z-index: 2;
`;
