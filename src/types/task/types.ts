export interface TaskType {
  state: string;
  startDate: string;
  endDate: string;
  title: string;
  memo?: string;
  contents: string;
  created: string;
  updated: string;
}

export interface IsStateType {
  isState: string;
}
