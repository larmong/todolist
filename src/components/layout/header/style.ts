import styled from '@emotion/styled';
import { Common } from '../../../commons/style/emotion';

export const Wrapper = styled.section`
  position: relative;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 25dvh;
  max-height: 200px;
  font-size: 1.5em;
  color: ${Common.color.white};
  background: ${Common.color.point};
  text-transform: uppercase;
`;

export const NavWrapper = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Common.color.white};
  border-bottom: 1px solid ${Common.color.border};
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 500;

  span {
    display: block;
    padding-bottom: 1px;
  }
`;

export const BackBtn = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MenuBtn = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 100;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const MenuWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  position: fixed;
  right: -100dvw;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  background: ${Common.color.white};
`;
