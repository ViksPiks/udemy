/*
    Questions for this assignment

    1. Чему равно а, почему?

        let a = 0 || 'string';
        let a = 1 && 'string';
        let a = null || 25;
        let a = null && 25;
        let a = null || 0 || 35;
        let a = null && 0 && 35;

    2. Что отобразится в консоли. Почему?

        12 + 14 + '12'
        3 + 2 - '1'
        '3' + 2 - 1
        true + 2
        +'10' + 1
        undefined + 2
        null + 5
        true + undefined

    3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

    4. Создать переменную и присвойте ей число.
        Используя if, записать условие:
        - если переменная равна нулю, присвоить ей 1;
        - если меньше нуля - строку “less then zero”;
        - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

    5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
        Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

    6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
        Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

    7. Дан следующий код:
        let product = {
        name: “Яблоко”,
        price: “10$”
        };

        let min = 10; // минимальная цена
        let max = 20; // максимальная цена

        Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
*/

// 1. Чему равно а, почему?

let a = 0 || "string"; // string
console.log(a);
a = 0 && "string"; // string
console.log(a);
a = null || 25; // 25
console.log(a);
a = null && 25; // 25
console.log(a);
a = null || 0 || 35; // 35
console.log(a);
a = null && 0 && 35; // null
console.log(a);

// 2. Что отобразится в консоли. Почему?

let b = 12 + 14 + "12"; // "2612"
console.log(b);
b = 3 + 2 - "1"; // 4
console.log(b);
b = "3" + 2 - 1; // 31
console.log(b);
b = true + 2 + "10" + 1; // "3101"
console.log(b);
b = undefined + 2; // NaN
console.log(b);
b = null + 5; // 5
console.log(b);
b = true + undefined; // NaN
console.log(b);

// 3. Создать произвольную переменную, присвоеть ей значение и написать условие,
// если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let condition = "hidden";

if (condition === "hidden") {
  condition = "visible";
} else {
  condition = "hidden";
}
console.log(condition);

//  4. Создать переменную и присвойте ей число.
// Используя if, записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let newCondition = 35;
if (newCondition === 0) {
  newCondition = 1;
} else if (newCondition < 0) {
  newCondition = "less then zero";
} else {
  newCondition *= 10;
}
console.log(newCondition);

// 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль
// сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true;
// иначе изменить на false.

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false,
};

const repairMessage = "Need Repair";

if (car.age > 5) {
  console.log(repairMessage);
  car.needRepair = "true";
} else {
  car.needRepair = false;
}
console.log(car);

// 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN
// а также есть поле price значение которого также не NaN то в объекте item создать поле
// priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль,
// обратите внимание что поля discount и price это строки и вам из них нужно получить
// числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле
// price в консоль.

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%",
};

const derivedPrice = parseFloat(item.price);
const derivedDiscount = parseFloat(item.discount);

if (!isNaN(derivedPrice) && !isNaN(derivedDiscount)) {
  item.priceWithDiscount =
    derivedPrice - derivedPrice * (derivedDiscount / 100);
  console.log(item);
} else {
  console.log(item.price);
}

// 7. Дан следующий код:
// let product = {
//  name: “Яблоко”,
//  price: “10$”
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене
// и меньше или равна максимальной цене то вывести в консоль название
// этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "10$",
};

let min = 10;
let max = 20;

const productPrice = parseFloat(product.price);

if (productPrice >= min && productPrice <= max) {
  console.log(product.name);
} else {
  console.log("Not Found");
}
