import { v4 as uuidv4 } from 'uuid';

import { TaskType } from 'types/task/types';
import { TaskList, Wrapper } from './style';
import Task from 'components/task';

export default function Main(): JSX.Element {
  const data: TaskType[] = [
    {
      id: uuidv4(),
      state: '0',
      startDate: '2024.01.02',
      endDate: '2024.01.05',
      title: '투두리스트 제목 대기중1111',
      contents: '투두리스트 내용 내용내용',
      memo: '',
      created: '2024.01.02',
      updated: '2024.01.02',
    },
    {
      id: uuidv4(),
      state: '1',
      startDate: '2024.01.02',
      endDate: '2024.01.05',
      title: '투두리스트 제목 진행중2222',
      contents: '투두리스트 내용 내용내용',
      memo: '',
      created: '2024.01.02',
      updated: '2024.01.02',
    },
    {
      id: uuidv4(),
      state: '2',
      startDate: '2024.01.02',
      endDate: '2024.01.05',
      title: '투두리스트 제목 완료3333',
      contents: '투두리스트 내용 내용내용',
      memo: '',
      created: '2024.01.02',
      updated: '2024.01.02',
    },
  ];

  return (
    <Wrapper>
      <TaskList>
        {data.map((task: TaskType) => (
          <Task key={task.id} data={task} />
        ))}
      </TaskList>
    </Wrapper>
  );
}
