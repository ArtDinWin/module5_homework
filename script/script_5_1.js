console.log(`5.3 Логический тип и ветвление. Задание 1.`);
/* Задание 1. Напишите программу, которая работала бы следующим образом: в
      prompt вводится значение. С помощью унарного плюса (арифметический
      оператор) необходимо преобразовать его в число, затем проверить с помощью
      typeof, принадлежит ли оно к множеству Number.<br />
      Если это число, то вывести в консоль чётное оно или нечётное.<br />
      Если передано не число, выведите: «Упс, кажется, вы ошиблись».<br />
      *NaN, хоть и относится к типу Number, числом не является. Добавьте
      отдельную проверку для этого значения. */
let result = prompt(
  "Введите любое значение, чтобы выяснить четное или нечетное число:"
);
if (!result) {
  alert("Упс, вы ничего не ввели. Кажется, вы ошиблись!");
} else if (typeof +result === "number") {
  if (isNaN(+result)) {
    alert("Упс, вы ввели: НЕ ЧИСЛО. Кажется, вы ошиблись!");
  } else {
    if (+result % 2 == 0) {
      alert("Вы ввели число: " + result + " это четное число");
    } else {
      alert("Вы ввели число: " + result + " это нечетное число");
    }
  }
}
