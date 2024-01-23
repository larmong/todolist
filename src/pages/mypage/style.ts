import styled from '@emotion/styled';
import { Common } from 'commons/style/emotion';

export const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 400px;

  .fix-contents {
    margin-bottom: 16px;
    span {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      height: 40px;
    }
  }
  .ant-btn-reset {
    margin-top: 20px;
  }
`;

export const Title = styled.div`
  display: block;
  text-transform: uppercase;
  color: ${Common.color.darkPoint};
  font-weight: 700;
  margin: 5px 0;
`;
