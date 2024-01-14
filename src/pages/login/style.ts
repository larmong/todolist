import styled from '@emotion/styled';
import { Common } from '../../commons/style/emotion';

export const Wrapper = styled.div`
  margin: 80px auto;
  width: 400px;
  .ant-btn-reset {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
  }
  .form-input-icon {
    margin-right: 4px;
    opacity: 0.2;
  }
`;

export const Title = styled.div`
  color: ${Common.color.point};
  font-weight: 900;
  font-size: 2.8em;
  text-align: center;
  margin: 30px;
`;

export const Signup = styled.div`
  text-align: center;
  color: ${Common.color.gray};
  font-size: 0.9em;
  span {
    padding: 3px 7px;
    cursor: pointer;
  }
`;
