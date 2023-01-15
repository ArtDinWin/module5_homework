console.log(`5.6 Циклы. Задание 7.`);
/* Задание 7. Дан массив. Нужно вывести в консоль количество чётных и
      нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он
      учитывается и выводится отдельно. 
      При выполнении задания необходимо учесть, что массив может содержать не
      только числа, но и, например, знаки, null и так далее. */
const array = ["1", 2, "три", 4, null, 8, "+", 1];
let even = 0,
  odd = 0,
  notNumbers = 0,
  emptyItems = 0;

array.forEach((item) => {
  if (item === null) {
    emptyItems++;
    notNumbers++;
  } else if (typeof item === "number") {
    if (isNaN(item)) {
      notNumbers++;
    } else {
      if (item % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
  } else {
    notNumbers++;
  }
});

if (even) {
  console.log(`Четных элементов в массиве = ${even}`);
}
if (odd) {
  console.log(`Нечетных элементов в массиве = ${odd}`);
}
if (notNumbers) {
  console.log(`Остальных элементов в массиве = ${notNumbers}`);
}
if (emptyItems) {
  console.log(`из которых нулевых элементов = ${emptyItems}`);
}
