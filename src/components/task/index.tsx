import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';

import * as S from './style';

export default function Task({ data }: any): JSX.Element {
  console.log(data);
  return (
    <S.Wrapper>
      <S.TaskState isState={data.state}>
        <span></span>
      </S.TaskState>
      <S.TaskCont isState={data.state}>
        <S.TaskInfo isState={data.state}>
          <S.TaskInfoTop>
            <S.TaskTag isState={data.state}>
              {data.state === '0' ? '할 일' : data.state === '1' ? '진행중' : '완료'}
            </S.TaskTag>
            <S.TaskDate>
              {data.startDate} ~ {data.endDate}
            </S.TaskDate>
          </S.TaskInfoTop>
          <S.TaskInfoCenter>
            <S.TaskTitle>{data.title}</S.TaskTitle>
            <S.TaskMemo>{data.contents}</S.TaskMemo>
          </S.TaskInfoCenter>
          <S.TaskInfoBottom>
            <S.TaskCreated>
              <em>create</em> {data.created}
            </S.TaskCreated>
            <S.TaskUpdated>
              <em>update</em> {data.updated}
            </S.TaskUpdated>
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
