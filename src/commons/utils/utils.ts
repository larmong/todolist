import dayjs from 'dayjs';

export const getAntdFormatDate = (date: string) => {
  return dayjs(date).format('YYYY.MM.DD');
};
