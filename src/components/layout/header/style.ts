import styled from '@emotion/styled';
import { Common } from '../../../commons/style/emotion';
import { IPropsHeaderStyle } from '../../../types/layout/types';

export const Wrapper = styled.section`
  position: relative;
`;

export const HeaderWrapper = styled.header`
  width: 100dvw;
  height: 180px;
  font-size: 2em;
  color: ${Common.color.white};
  background: ${Common.color.point};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
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
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 100;
  color: ${({ path, isMenu }: IPropsHeaderStyle) =>
    path === '' || isMenu ? `${Common.color.white}` : `${Common.color.default}`};
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const MenuWrapper = styled.ul`
  transition: all 0.3s ease-in-out;
  position: fixed;
  right: -100dvw;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  background: ${Common.color.darkPoint};
  display: flex;
  flex-direction: column;
  font-size: 2em;
  align-items: flex-end;
  padding: 200px 20px;
  gap: 20px;
  z-index: 99;
  font-weight: 600;
  li {
    position: relative;
    color: ${Common.color.white};
  }
  span {
    transition: 0.2s ease-in-out;
    cursor: pointer;
    text-transform: uppercase;
    opacity: 0.7;
  }
  span:hover {
    opacity: 1;
  }
  li::before {
    transition: 0.2s ease-in-out;
    content: '';
    position: absolute;
    left: -25px;
    top: calc(50% - 2px);
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${Common.color.white};
    opacity: 0;
  }
  li:hover::before {
    opacity: 1;
  }

  li.on span {
    opacity: 1;
  }
  li.on::before {
    opacity: 1;
  }
`;
