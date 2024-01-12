import styled from '@emotion/styled';
import { Common } from '../../commons/style/emotion';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 36px;
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

  &.line {
    background: ${Common.color.white};
    color: ${Common.color.point};
  }
`;
