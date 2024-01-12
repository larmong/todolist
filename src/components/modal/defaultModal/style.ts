import styled from '@emotion/styled';
import { Common } from 'commons/style/emotion';

export const Wrapper = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 360px;
  background: ${Common.color.white};
  border-radius: 10px;
  padding: 25px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h3 {
    font-size: 1.1em;
    color: ${Common.color.darkPoint};
  }
  p,
  span {
    opacity: 0.7;
    font-size: 0.8em;
  }
  span {
    color: #e04444;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
