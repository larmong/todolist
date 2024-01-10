import { TaskList, Wrapper } from './style';
import Task from '../../components/task';
import { TaskType } from '../../types/task/types';

export default function Main(): JSX.Element {
  const data: TaskType[] = [
    {
      state: '0',
      startDate: '2024.01.02',
      endDate: '2024.01.05',
      title: '제목은 루이랑 애견카페 가기',
      contents: '내용은 루이랑 애견카페 가기',
      memo: '',
      created: '2024.01.02',
      updated: '2024.01.02',
    },
    {
      state: '1',
      startDate: '2024.01.02',
      endDate: '2024.01.05',
      title: '리액트 공부하기',
      contents: '리액트 공부해야징',
      memo: '',
      created: '2024.01.02',
      updated: '2024.01.02',
    },
    {
      state: '2',
      startDate: '2024.01.02',
      endDate: '2024.01.05',
      title: 'react query 공부해야댐',
      contents: '이것두 리액트얌',
      memo: '',
      created: '2024.01.02',
      updated: '2024.01.02',
    },
  ];

  return (
    <Wrapper>
      <TaskList>
        {data.map((task: TaskType) => (
          <Task data={task} />
        ))}
      </TaskList>
    </Wrapper>
  );
}
