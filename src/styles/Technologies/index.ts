import styled from 'styled-components';
import { Colors } from '../colors';
import { AnimationBox } from '../Animations/index';

export const DivTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
  ${AnimationBox}
  animation: scale-in-center 1s cubic-bezier(0.150, 0.460, 0.450, 0.940) both;
`;
export const ButtonTechnologies = styled.a`
  display: flex;
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: bold;
  width: 85px;
  height: 85px;
  border-radius: 5px;
  color: ${Colors.black};
  background-color: ${Colors.white};
  box-shadow: -5px 5px ${Colors.purple}, -4px 4px ${Colors.purple},
    -2px 2px ${Colors.purple};
  border: 3px solid ${Colors.black};
  transition-duration: 1s;
  transform: skewX(5deg);
  &:hover {
   /*  box-shadow: none; */
  /*   border: none; */
    transform: translate(20px, 20px);
    cursor: pointer;
  }
`;
