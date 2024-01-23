import styled from '@emotion/styled';
import { Common } from 'commons/style/emotion';

export const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 400px;
  .ant-btn-reset {
    height: 40px;
    font-size: 16px;
    margin-top: 20px;
  }
  .id-line {
    display: flex;
    gap: 10px;
    .line {
      width: 120px;
      height: 40px;
      font-size: 14px;
    }
  }
`;

export const Title = styled.div`
  display: block;
  text-transform: uppercase;
  color: ${Common.color.darkPoint};
  font-weight: 700;
  margin: 5px 0;
`;
