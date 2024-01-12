import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';

import * as S from './style';

export default function Task({ data }: any): JSX.Element {
  return (
    <S.Wrapper>
      <S.TaskState isState={data.state}>
        <span></span>
      </S.TaskState>
      <S.TaskCont isState={data.state}>
        <S.TaskInfo isState={data.state}>
          <S.TaskInfoTop isState={data.state}>
            <span>{data.state === '0' ? '할 일' : data.state === '1' ? '진행중' : '완료'}</span>
            <p>
              {data.startDate} ~ {data.endDate}
            </p>
          </S.TaskInfoTop>
          <S.TaskInfoCenter>
            <p>{data.title}</p>
            <span>{data.contents}</span>
          </S.TaskInfoCenter>
          <S.TaskInfoBottom>
            <span>
              <em>create</em> {data.created}
            </span>
            <span>
              <em>update</em> {data.updated}
            </span>
          </S.TaskInfoBottom>
        </S.TaskInfo>
        <S.TaskBtn>
          <span>
            <FaRegPenToSquare />
          </span>
          <span>
            <FaRegTrashAlt />
          </span>
        </S.TaskBtn>
      </S.TaskCont>
    </S.Wrapper>
  );
}
