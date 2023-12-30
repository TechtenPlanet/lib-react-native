const dayOfTheWeekShort = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const dayOfTheWeekLong = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNameLong = [
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

const monthNameShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const getDay = (): string => {
  let d = new Date();
  return dayOfTheWeekLong[d.getDay()];
};

export const printDate = (date: Date) => {
  return (
    dayOfTheWeekLong[date.getDay() - 1] +
    ", " +
    monthNameShort[date.getMonth()] +
    " " +
    date.getDate()
  );
};
