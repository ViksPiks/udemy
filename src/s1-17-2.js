/*
1. Создать функцию multiply, которая будет принимать любое количество чисел
и возвращать их произведение
Пример вызова:
multiply(1,2,3) => результат 6 (1*2*3); */

const multiply = (...numbers) => {
  let result = 1;

  for (let num of numbers) {
    result *= num;
  }

  return result;
};

console.log(multiply(1, 2, 3));

//Создать функцию, которая принимает строку и возвращает строку-перевертыш:

// reverseString("test"); // "tset"
// reverseString(""); // ''
// reverseString(null); // llun
// reverseString(undefined); // denifednu
// reverseString(); // denifednu

const reverseString = (value) => {
  let revSrt = "";
  const stringifiedValue = "" + value;

  for (let i = stringifiedValue.length - 1; i >= 0; i -= 1) {
    revSrt += stringifiedValue[i];
  }

  return revSrt;
};
console.log(reverseString(undefined));

// Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined
// и возвращает строку,
// где каждый символ разделен пробелом
// и заменен на юникод-значение символа:
// getCodeStringFromText("hello") // “104 101 108 108 111”
// подсказка: в решении задачи вам помогут методы charCodeAt и trim

function getCodeStringFromText(value) {
  let newStr = "";
  const stringifiedValue = "" + value;

  for (let i = 0; i <= stringifiedValue.length - 1; i++) {
    newStr += stringifiedValue.charCodeAt(i) + " ";
  }

  return newStr;
}

console.log(getCodeStringFromText(2222));

// Создать функцию угадай число oна принимает число от 1-10
// (обязательно проверить что число не больше 10 и не меньше 0).
// Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").
// Если передано не число то верните ошибку return new Error("Please provide a valid number");

// Далее функция генерирует рандомное число от 1-10
// и сравнивает с заданным числом если они совпали то возвращает строку “You win!”
// если нет то строку “You are lose, your number is 8, the random number is 5”.

// Если передано число в виде строки оно должно быть преобразовано к числу.

const guessNumber = (value) => {
  const parsedNumber = parseFloat(value);

  if (Number.isNaN(parsedNumber)) {
    throw new Error(
      `Please provide a valid number. Value of "${value}" is not a valid number`
    );
  }

  if (parsedNumber < 0 || parsedNumber > 10) {
    throw new Error(
      `Please provide number in range 0 - 10. Number of "${parsedNumber}" is out of range.`
    );
  }

  const generatedNum = Math.floor(Math.random() * 11);
  if (generatedNum === parsedNumber) {
    return `Your number is ${parsedNumber} You win!`;
  }

  return `You lose, your number is ${parsedNumber}, the random number is ${generatedNum}`;
};

console.log(guessNumber(""));
