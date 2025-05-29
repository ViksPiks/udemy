//

const tickets = [
  {
    id: 1,
    destination: "Rome",
  },
  {
    id: 2,
    destination: "Milan",
  },
  {
    id: 3,
    destination: "Florence",
  },
];

const secondTicket = tickets.find((ticket) => ticket.id === 2);

const ticketsObj = tickets.reduce((acc, ticket) => {
  acc[ticket.id] = ticket;

  return acc;
}, {});

ticketsObj[2];

/*
1. Создать функцию multiply, которая будет принимать любое количество чисел
и возвращать их произведение
Пример вызова:
multiply(1,2,3) => результат 6 (1*2*3); */

const multiply = (...numbers) => {
  return numbers.reduce((acc, num) => acc * num, 1);
};
console.log(multiply(2, 2, 2));

// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arrayOfNumbers = [1, 2, 3, 5, 8, 9, 10];

const digitInfoList = arrayOfNumbers.map((num) => ({
  digit: num,
  odd: num % 2 !== 0,
}));
console.log(digitInfoList);

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

const someArr = [12, 4, 50, 1, 0, 18, 40];

const hasZero = someArr.some((num) => num === 0);

console.log(hasZero);

// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what'].
// Если да - вернуть true

const words = ["yes", "hello", "no", "easycode", "what"];

const hasItemsWithMoreThenThreeChars = words.every((word) => word.length > 3);

console.log(">>>>", hasItemsWithMoreThenThreeChars);

// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const arrOfArrs = [[14, 45], [1], ["a", "c", "d"]];

const listsSortedByLength = arrOfArrs.sort(
  (prev, next) => prev.length - next.length
);
console.log(listsSortedByLength);

/*
Есть массив объектов:
[
  {cpu: 'intel', info: {cores:2, cache: 3}},
  {cpu: 'intel', info: {cores:4, cache: 4}},
  {cpu: 'amd', info: {cores:1, cache: 1}},
  {cpu: 'intel', info: {cores:3, cache: 2}},
  {cpu: 'amd', info: {cores:4, cache: 2}}
]

Отсортировать их по возрастающему количеству ядер (cores).*/

const productsInfo = [
  { cpu: "intel", info: { cores: 2, cache: 3 } },
  { cpu: "intel", info: { cores: 4, cache: 4 } },
  { cpu: "amd", info: { cores: 1, cache: 1 } },
  { cpu: "intel", info: { cores: 3, cache: 2 } },
  { cpu: "amd", info: { cores: 4, cache: 2 } },
];

const productsSortedByCores = productsInfo.sort(
  (prev, next) => prev.info.cores - next.info.cores
);
console.log(productsSortedByCores);

// 3. Создать функцию, которая будет принимать массив продуктов и две цены.
// Функция должна вернуть все продукты, цена которых находится в указанном диапазоне,
// и сортировать от дешевых к дорогим:

// let products = [
// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

const products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 },
];

const filterProductsByPriceRange = (arr, min, max) => {
  return arr
    .filter((product) => product.price > min && product.price < max)
    .sort((prev, next) => prev.price - next.price);
};
console.log(filterProductsByPriceRange(products, 15, 30));

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке
//  {буква: “a”, позиция_в_предложении: 1}:

/*[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!” */

const charArr = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

//solution 1
function createWordWithForEach(arr) {
  const result = [];

  arr.forEach((charObj) => {
    result[charObj.index] = charObj.char;
  });

  return result.join("");
}

//solution 2

function createWordWithReduce(arr) {
  const sortedCharList = arr.reduce((acc, charObj) => {
    acc[charObj.index] = charObj.char;
    return acc;
  }, []);

  return sortedCharList.join("");
}

//solution 3
function createWordWithSort(arr) {
  return [...arr] // чтб не мутировать
    .sort((prev, next) => prev.index - next.index)
    .map((charObj) => charObj.char)
    .join("");
}

//

const userList = [
  { id: 1, name: "Vladimir", password: "" },
  { id: 2, name: "Viktor", password: "" },
  { id: 3, name: "Valery", password: "" },
];

const res = userList.reduce((acc, user) => {
  acc[user.id] = user;

  return acc;
}, {});

console.log(res);
