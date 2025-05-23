/*
1. Создать функцию multiply, которая будет принимать любое количество чисел 
и возвращать их произведение
Пример вызова:
multiply(1,2,3) => результат 6 (1*2*3);

Если нет ни одного аргумента, вернуть ноль: multiply() // 0

2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
Примеры вызовов и результаты
reverseString('test') // "tset"
reverseString('') // ''
reverseString(null) // llun
reverseString(undefined)// denifednu
reverseString()// denifednu

3. Создать функцию, которая в качестве аргумента может принять строку, числа, 
null или undefined и возвращает строку, 
где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText("hello") // “104 101 108 108 111”
подсказка: в решении задачи вам помогут методы charCodeAt и trim

4. Создать функцию угадай число.
Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
Если число не соответствует условию то верните ошибку return new
Error("Please provide number in range 0 - 10"). Если переданно не число то верните 
ошибку return new Error("Please provide a valid number");
*/

// 1. Создать функцию multiply, которая будет принимать любое количество чисел
// и возвращать их произведение
// Пример вызова:
// multiply(1,2,3) => результат 6 (1*2*3);
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  if (arguments.length === 0) {
    return 0;
  }

  let result = arguments[0];

  for (let i = 1; i < arguments.length; i += 1) {
    result *= arguments[i];
  }

  return result;
}

const multiplyResult = multiply();

console.log(multiplyResult);

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// Примеры вызовов и результаты
// reverseString('test') // "tset"
// reverseString('') // ''
// reverseString(null) // llun
// reverseString(undefined)// denifednu
// reverseString()// denifednu

function reverseString(element) {
  let newString = "";

  // element -> null

  if (element === null || element === undefined) {
    element += "";
  }

  // element -> "null"

  for (let i = element.length - 1; i >= 0; i -= 1) {
    newString += element[i];
  }

  return newString;
}
console.log(reverseString(undefined));

// OR
// const exString = "the best string";
// const newString = exString.split("").reverse().join("");
// console.log(newString);

// OR
function reverseString(str) {
  let apple = str;
  if (apple === null || apple === undefined) {
    apple += "";
  }
  return apple.split("").reverse().join("");
}
console.log(reverseString(null));

// Grand Master's the best decision king kong black star mafia
const reverseGM = (str) => (str + "").split("").reverse().join("");
console.log(reverseString());

// 3. Создать функцию, которая в качестве аргумента может принять строку, числа,
// null или undefined и возвращает строку,
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText("hello") // “104 101 108 108 111”
// подсказка: в решении задачи вам помогут методы charCodeAt и trim

function getCodeStringFromText(str) {
  let stringFromText = "";
  for (let i = 0; i < str.length; i++) {
    stringFromText += str.charCodeAt(i) + " ";
  }
  return stringFromText.trim();
}
console.log(getCodeStringFromText("hello"));

// 4. Создать функцию угадай число.
// Она принимает число от 1-10 (обязательно проверить что число не больше 10 и
// не меньше 0).
// Если число не соответствует условию то верните ошибку return new Error
// ("Please provide number in range 0 - 10").Если переданно не число то верните ошибку
//  return new Error("Please provide a valid number");

function quiz(number) {
  if (typeof number !== number) {
    return new Error("Please provide a valid number");
  }
  if (number < 0 && number > 10) {
    return new Error("Please provide number in range 0 - 10");
  }
}

console.log(quiz(89));

let myString = "Search this string";
let charToSearch = "i";
for (let i = 0; i > myString.length; i++) {
  console.log(myString[i]);
}
