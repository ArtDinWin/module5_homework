console.log(`5.4 Строки. Числа. Задание 3.`);
/* Задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
      Например, "Hello" -> "olleH". */

let string1 = prompt("Введите строку, чтобы перевернуть в ней символы:");
let string2 = "";
for (i = 0; i < string1.length; i++) {
  string2 = string1[i] + string2;
}
alert(string2);
