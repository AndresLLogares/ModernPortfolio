import styled from 'styled-components';
import { Colors } from '../colors';
import Logo from '../../assets/logo.svg';
import { AnimationBox } from '../Animations/index';
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: fit-content;
  text-align: center;
  flex-direction: row;
  ${AnimationBox}
	animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
  z-index: 2;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  margin-bottom: 2vh;
  flex-direction: column;
`;

export const ImageLogo = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url(${Logo});
  border-radius: 5px;
  margin-right: 25px;
  border: 0.21em solid ${Colors.purple};
  margin-bottom: 10px;
`;

export const Name = styled.h1`
  font-size: 22px;
  letter-spacing: 2px;
  margin: 0;
  color: ${Colors.black};
  margin-bottom: 10px;
  font-family: 'Nova Mono', monospace;
/*   text-shadow: 1px 1px 0 ${Colors.purple}, 1px -1px 0 ${Colors.purple},
    -1px 1px 0 ${Colors.purple}, -1px -1px 0 ${Colors.purple},
    1px 0px 0 ${Colors.purple}, 0px 1px 0 ${Colors.purple},
    -1px 0px 0 ${Colors.purple}, 0px -1px 0 ${Colors.purple};  */ 
`;
