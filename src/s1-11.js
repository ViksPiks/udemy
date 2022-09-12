/*
    Questions for this assignment

    Дана строка: "some test string";

    1. Получить первую и последнюю буквы строки

    2. Сделать первую и последнюю буквы в верхнем регистре

    3. Найти положение слова ‘string’ в строке

    4. Найти положение второго пробела (“вручную” ничего не считать)

    5. Получить строку с 5-го символа длиной 4 буквы

    6. Получить строку с 5-го по 9-й символы
    
    7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

    8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
*/

const str = "some test string";

// 1. Получить первую и последнюю буквы строки

const firstLetter = str[0];
const lastLetter = str[str.length - 1];
console.log(firstLetter, lastLetter);

// 2. Сделать первую и последнюю буквы в верхнем регистре

const sentance = str
  .replace(str[0], str[0].toUpperCase()) // "Some test string"
  .replace(str[str.length - 1], str[str.length - 1].toUpperCase()); // "Some test strinG"
console.log(sentance);

// 3. Найти положение слова ‘string’ в строке

const searchTerm = "string";
const firstIndex = str.indexOf(searchTerm);
const lastIndex = firstIndex + searchTerm.length - 1;
console.log(firstIndex, lastIndex);

// 4. Найти положение второго пробела (“вручную” ничего не считать)

const firstSpaceIndex = str.indexOf(" ");
const secondSpaceIndex = str.indexOf(" ", firstSpaceIndex + 1);
console.log(secondSpaceIndex);

// 5. Получить строку с 5-го символа длиной 4 буквы

const searchResult = str.slice(5, 5 + 4);
console.log(searchResult);

// 6. Получить строку с 5-го по 9-й символы

const searchResult2 = str.slice(5, 9);
console.log(searchResult2);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов

const newStr = str.slice(0, -6);
console.log(newStr);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

const a = 20;
const b = 16;
const year = `${a}${b}`;
console.log(year);
