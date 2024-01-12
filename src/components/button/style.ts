import styled from '@emotion/styled';
import { Common } from '../../commons/style/emotion';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 36px;
  border-radius: 5px;
  font-size: 0.9em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  border: 1px solid ${Common.color.point};
  background: ${Common.color.point};
  color: ${Common.color.white};
  padding-top: 2px;
  &.line {
    background: ${Common.color.white};
    color: ${Common.color.point};
  }
`;
