const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useFormatDate = (date: string) => {
  const newDate = date.replaceAll("-", " ");
  const monthNumber = parseInt(newDate.substring(0, 2));
  const month = months[monthNumber];
  const articleDate =
    newDate.substring(2, 5) + " " + month + " " + newDate.substring(5);
  return articleDate;
};

export default useFormatDate;
