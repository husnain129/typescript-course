export const dateStringToDate = (date: string): Date => {
  const _date = date.split("/").map((value: string): number => {
    return parseInt(value);
  });
  return new Date(_date[2], _date[1], _date[0]);
};
