console.log(`5.4 Строки. Числа. Задание 2.`);
/*  Задание 4. Записать в переменную случайное целое число в диапазоне [0;
      100]. Используйте объект Math. */
const min = 0;
const max = 100;
result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result);
