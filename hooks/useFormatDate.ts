const months = [
  "Farvardin",
  "Ordibehesht",
  "Khordad",
  "Tir",
  "Mordad",
  "Shahrivar",
  "Mehr",
  "Aban",
  "Azar",
  "Dey",
  "Bahman",
  "Esfand",
];

const useFormatDate = (date: string) => {
  // Split the input string by ',' and '|'
  const parts = date.split(/,| \| /);

  // Extract day, month, and year from the split parts
  const day = parseInt(parts[0].trim(), 10);
  const month = parseInt(parts[1].trim(), 10);
  const year = parseInt(parts[2].trim(), 10);

  // Create the object with the desired format
  const result = { day, month, year };

  const formatedDate = day + " " + months[month - 1] + " " + year;
  return formatedDate;
};

export default useFormatDate;
