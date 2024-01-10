import styled from '@emotion/styled';
import { Common } from '../../commons/style/emotion';
import { IsStateType } from '../../types/task/types';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${Common.color.border};
`;

export const TaskState = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  span {
    display: block;
    width: 20px;
    height: 20px;
    border: 5px solid ${Common.color.point};
    border: ${(props: IsStateType) =>
      props.isState === '1' ? `5px solid ${Common.color.point}` : `5px solid ${Common.color.lightGray}`};
    background: ${(props: IsStateType) =>
      props.isState === '0'
        ? `${Common.color.white}`
        : props.isState === '2'
          ? `${Common.color.lightGray}`
          : `${Common.color.point}`};
    box-shadow: ${(props: IsStateType) => (props.isState === '1' ? `0 0 10px ${Common.color.point}` : 'none')};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const TaskCont = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration-line: ${(props: IsStateType) => (props.isState === '2' ? 'line-through' : 'none')};
`;

export const TaskInfo = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 5px;
  opacity: ${(props: IsStateType) => (props.isState === '2' ? '0.6' : '1')};
`;
export const TaskInfoTop = styled.div`
  display: flex;
  gap: 10px;
  font-size: 0.9em;
`;
export const TaskTag = styled.span`
  display: inline-flex;
  border-radius: 5px;
  padding: 1px 4px 3px 4px;
  font-size: 0.8em;
  color: ${Common.color.white};
  background: ${(props: IsStateType) =>
    props.isState === '0'
      ? `${Common.color.lightGray}`
      : props.isState === '2'
        ? `${Common.color.gray}`
        : `${Common.color.point}`};
`;
export const TaskDate = styled.span`
  opacity: 0.6;
`;

export const TaskInfoCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  p {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const TaskTitle = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  color: ${Common.color.darkPoint};
`;
export const TaskMemo = styled.p`
  font-size: 0.9em;
`;

export const TaskInfoBottom = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.8em;
  opacity: 0.6;
  span {
    em {
      text-transform: uppercase;
      display: inline-block;
      font-weight: bold;
      margin-right: 2px;
    }
  }
`;
export const TaskCreated = styled.span``;
export const TaskUpdated = styled.span``;

export const TaskBtn = styled.div`
  width: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
    padding: 5px;
    display: inline-block;
  }
  svg {
    opacity: 0.8;
    width: 20px;
    height: 20px;
  }
`;
