//Получить первую и последнюю буквы строки

const str = "some test string";
let firstLet = str[0];
let lastLer = str.charAt(str.length - 1);

//was
let firstChar = str[0];
let lastChar = str[str.length - 1];

//Сделать первую и последнюю буквы в верхнем регистре

let toUpperCase =
  firstLet.toUpperCase() + str.slice(1, -1) + lastLer.toUpperCase();

// was
let str2 = "some test string";

let strUp =
  str2[0].toUpperCase() + // первая заглавная
  str2.slice(1, str2.length - 1) + // середина
  str2[str2.length - 1].toUpperCase(); // последняя заглавная

//3
//Найти положение слова ‘string’ в строке
let position = str.indexOf("string");
let secPos = str.length - 1;
console.log(position, secPos);
//was
const searchTerm = "string";
const firstIndex = str.indexOf(searchTerm);
const lastIndex = firstIndex + searchTerm.length - 1;

// Найти положение второго пробела (“вручную” ничего не считать)
const sentance = "some test string";
const space = " ";
const firstSpace = sentance.indexOf(space);
const secondSpace = firstSpace + sentance.indexOf("test");

console.log(firstSpace, secondSpace);

//was
const firstSpaceIndex = str.indexOf(" ");
const secondSpaceIndex = str.indexOf(" ", firstSpaceIndex + 1);
console.log(secondSpaceIndex);

//gpt task найти положение 'scripting'
const sentence = "JavaScript is a powerful scripting language";
const scriptingFirstSymbol = sentence.indexOf("scripting");
const scriptingLastSymbol = scriptingFirstSymbol + "scripting".length - 1;
console.log(scriptingFirstSymbol, scriptingLastSymbol);

// Вырезать 'power' с slice
const quote = "Knowledge is power only if applied";
const power1 = quote.indexOf("power");
const powerLast = power1 + "power".length;
const slicePower = quote.slice(power1, powerLast);

console.log(power1, powerLast, slicePower);

//Получить строку с 5-го символа длиной 4 буквы

const quote1 = "Knowledge is power only if applied";
const newStr = quote1.slice(5, 5 + 4);
console.log(newStr);

//Получить строку с 5-го по 9-й символы

const sentence2 = "JavaScript is a powerful scripting language";
const newSentence2 = sentence2.slice(5, 9);

console.log(newSentence2);

// Получить новую строку из исходной путем удаления последних 6-и символов

const myQuote = "Knowledge is power only if applied";
const subStr = myQuote.substring(0, myQuote.length - 6);

//better
const newStr1 = myQuote.slice(0, -6);
console.log(newStr1, subStr);

//Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

const numA = 20;
const numB = 16;

const concatAB = numA.toString().concat(numB.toString());
//or

const year = `${numA}${numB}`;

console.log(concatAB, year);

// PART 2

//Создать произвольную переменную, присвоеть ей значение и написать условие,
//если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let value = "visible";

if (value === "hidden") {
  value = "visible";
} else {
  value = "hidden";
}
console.log(value);

//Создать переменную и присвойте ей число.
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10

let someNumber = 30;

if (someNumber === 0) {
  someNumber = 1;
} else if (someNumber < 0) {
  someNumber = "less then zero";
} else {
  someNumber *= 10;
}

console.log(someNumber);

// 5. Дан объект
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль
// сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true;
// иначе изменить на false.

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true; //!!!!
} else {
  car.needRepair = false;
}
console.log(car);

// 6. Дан объект
// Написать условие если у item есть поле discount и его значение не NaN
// и есть поле price значение которого также не NaN то в объекте item создать поле
// priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль,
// обратите внимание что поля discount и price это строки и вам из них нужно получить
// числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле
// price в консоль.

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: NaN,
};

const hasDiscountProperty = item.hasOwnProperty("discount"); //if ("price" in item)/То же самое
const isDiscountNaN = item.discount === NaN;

const hasPriceProperty = item.hasOwnProperty("price");
const isPriceNaN = item.price === NaN;

if (hasDiscountProperty && !isDiscountNaN && hasPriceProperty && !isPriceNaN) {
  const priceToNum = parseFloat(item.price);
  const discountToNum = parseFloat(item.discount);
  item.priceWithDiscount = priceToNum - priceToNum * (discountToNum / 100);
  console.log("YES", item.priceWithDiscount);
} else {
  console.log("NO");
}

// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
//будут в верхнем регистре. Использовать for или while.

const loopStr = "i am in the easycode";
let newLoopStr = "";

for (let i = 0; i <= loopStr.length - 1; i++) {
  if (loopStr[i - 1] === " " || i === 0) {
    newLoopStr += loopStr[i].toUpperCase();
    console.log(loopStr[i]);
  } else {
    newLoopStr += loopStr[i];
  }
}
console.log(newLoopStr);

//Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

const revTheStr = "tseb eht ma i";

let revertedStr = "";

for (let i = revTheStr.length - 1; i >= 0; i--) {
  revertedStr += revTheStr[i];
}
console.log(revertedStr);

//На основе строки “JavaScript is a pretty good language” сделать новую строку,
//где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

const newSentance = "JavaScript is a pretty good language";
let newSentanceDone = "";

for (let i = 0; i <= newSentance.length - 1; i++) {
  if (newSentance[i] === " ") {
    continue;
  }

  if (newSentance[i - 1] === " " || i === 0) {
    newSentanceDone += newSentance[i].toUpperCase();
  } else {
    newSentanceDone += newSentance[i];
  }
}
console.log(newSentanceDone);

const newSentance2 = "JavaScript is a pretty good language";
let newSentanceDone2 = "";

const splitWords = newSentance.split("");

const ar = splitWords.map((char, i) => {
  if (splitWords[i - 1] === " ") {
    return char.toUpperCase();
  }
  return char;
});

console.log(ar.join(""));
