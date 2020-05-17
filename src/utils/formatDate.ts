export default (date: Date): string => {
  return `${date.getFullYear()}-${
    String(date.getMonth()).length === 1
      ? `0${date.getMonth()}`
      : date.getMonth() + 1
  }-${
    String(date.getDate()).length === 1 ? `0${date.getDate()}` : date.getDate()
  } ${
    String(date.getHours()).length === 1
      ? `0${date.getHours()}`
      : date.getHours()
  }:${
    String(date.getMinutes()).length === 1
      ? `0${date.getMinutes()}`
      : date.getMinutes()
  }`;
};
