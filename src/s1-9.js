/*
    Questions for this assignment

    1. Получить число pi из Math и округлить его до 2-х знаков после точки

    2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

    3. Работа с Math.random:
        a. Получить случайное число и округлить его до двух цифр после запятой
        b. Получить случайное целое число от 0 до X. X - любое произвольное число.

    4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

    5. Получить число из строки ‘100$’
*/

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

const pi = Math.PI;
const fixedPi = Number(pi.toFixed(2));
console.log(fixedPi);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

const minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(maxNumber);
console.log(minNumber);

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

const randomNumber = Math.random();
const fixedRandomNumber = Number(randomNumber.toFixed(2));
console.log(fixedRandomNumber);

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

const x = 100;
const randomNumber2 = Math.round(Math.random() * x);
console.log(randomNumber2);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

const sumOfNumbers = 0.6 + 0.7;
const fixedSumOfNumbers = Number(sumOfNumbers.toFixed(1));
console.log(fixedSumOfNumbers);

// 5. Получить число из строки ‘100$’

const price = "100$";
const derivedPrice = parseFloat(price);
console.log(derivedPrice);
