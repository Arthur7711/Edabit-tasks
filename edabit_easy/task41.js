// Операция сдвига влево аналогична умножению на степени двойки .

// Пример расчета с использованием оператора сдвига влево ( <<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Напишите функцию, которая имитирует (без использования << ) оператор сдвига влево и возвращает результат из двух заданных целых чисел.

function shiftToLeft(num, much) {
  let count = 2;
  for (let i = 1; i < much; i++) {
    count *= 2;
  }
  let result = num * count;
  return result;
}

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));

console.log(shiftToLeft(-32, 2));

console.log(shiftToLeft(-6, 5));

console.log(shiftToLeft(12, 4));

console.log(shiftToLeft(46, 6));
