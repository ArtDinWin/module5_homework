let fruits = new Map([
  ["Андрей", "Сисадмин"],
  ["Олег", "Директор"],
  ["Наталья", "Главбух"],
  ["Сергей", "Дизайнер"],
  ["Маша", "Редактор"],
  ["Ольга", "Менеджер"],
]);
for (let [key, values] of fruits) {
  console.log(`Ключ — ${key}, значение — ${values}.`);
}
