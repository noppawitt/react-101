export const formatDate = (v: string): string => {
  const [date, time] = v.split('T');
  const [y, m, d] = date.split('-');

  return `${[d, m, y].join('/')} ${time}`;
};
