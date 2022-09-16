/*
    Questions for this assignment

    1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
    будут в верхнем регистре. Использовать for или while.

    2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

    3. Факториал числа - произведение всех натуральных чисел от 1 до n
    включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

    4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
    где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

    5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

    6. Дан объект:
    let list = {
    name: ‘denis’,
    work: ‘easycode’,
    age: 29
    }

    Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/

//  1. На основе строки “i am in the easycode” сделать новую строку где первые
// буквы каждого слова будут в верхнем регистре. Использовать for или while.

const str = "i am in the easycode";
let str2 = "";

for (let i = 0; i < str.length; i += 1) {
  const currentChar = str[i];
  const previousChar = str[i - 1];

  if (i === 0 || previousChar === " ") {
    str2 += currentChar.toUpperCase();
  } else {
    str2 += currentChar;
  }
}
console.log(str2);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
// (то есть последняя буква становится первой, предпоследняя - второй итд).

const newStr = "tseb eht ma i";
let newStr2 = "";
for (let i = newStr.length - 1; i >= 0; i -= 1) {
  newStr2 += newStr[i];
}
console.log(newStr2);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
//     включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить
//     факториал числа 10. Использовать for.

let factor = 10;
for (let i = factor - 1; i >= 1; i -= 1) {
  factor *= i;
}
console.log(factor);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//     где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let sentence = "JavaScript is a pretty good language";
let newSentence = "";

for (let i = 0; i < sentence.length; i += 1) {
  const currentChar = sentence[i];
  const previousChar = sentence[i - 1];

  if (currentChar === " ") {
    continue;
  }

  if (i === 0 || previousChar === " ") {
    newSentence += currentChar.toUpperCase();
  } else {
    newSentence += currentChar;
  }
}
console.log(newSentence);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
//  Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let odds = [];
for (let num of myArray) {
  if (num % 2 !== 0) {
    odds.push(num);
  }
}
console.log(odds);

// 6. Дан объект:
//     let list = {
//     name: ‘denis’,
//     work: ‘easycode’,
//     age: 29
//     }

//     Перебрать объект и если значение в свойстве это строка то переписать ее
//     всю в верхнем регистре. Использовать for in.

let list = {
  name: "denis",
  work: "easycode",
  age: 29,
};

for (let key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);
