// Create a function that takes two dates and returns the number of days between the first and second date.

const getDays = (date1, date2) => {
  return Math.ceil((date2 - date1) / (1000 * 3600 * 24));
};

getDays(new Date("June 14, 2019"), new Date("June 20, 2019"));
