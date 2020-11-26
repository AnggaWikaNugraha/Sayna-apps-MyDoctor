export const getChattime = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (OlDdate) => {
  const year = OlDdate.getFullYear();
  const month = OlDdate.getMonth() + 1;
  const date = OlDdate.getDate();

  return `${year}-${month}-${date}`;
};
