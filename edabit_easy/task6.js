// Сочельник почти на пороге, так что, естественно, нам нужно приготовить немного молока и печенья для Санты! Создайте функцию, которая принимает Dateобъект и возвращает trueего в канун Рождества (24 декабря) или в falseпротивном случае. Имейте в виду, что месяц в JavaScript отсчитывается от Date0, то есть декабрь - 11-й месяц, а январь - 0.

function helpSanta(year, month, day) {
  if ((month === 11, day >= 24)) {
    let date = new Date(year, month, day);
    return [true, date];
  }
  return false;
}
console.log(helpSanta(15, 11, 25));
