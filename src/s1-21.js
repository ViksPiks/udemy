function getQuestion(job) {
  const jobDictionary = {
    developer: "что такое JavaScript",
    teacher: "какой предмет вы ведете",
  };

  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}

const getDeveloperQuestion = getQuestion("developer");

const developerQuestion = getDeveloperQuestion("Vladimir");

console.log(developerQuestion);
console.log(getQuestion("teacher")("Victoria"));

// Создать функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки
//Подсказка: функция handler должна быть представлена функцией, которая принимает
//один аргумент (каждый элемент массива) и возвращает результат его обработки

/*
1. firstFunc(["my", "name", "is", "Trinity"], handler1) → "New value: MyNameIsTrinity"
2. firstFunc([10, 20, 30], handler2) → "New value: 100, 200, 300,"
3. firstFunc([{age: 45, name: "John"}, {age: 20, name: "Aaron"}], handler3) → "New value: John is 45, Aaron is 20,"
4. firstFunc(["abc", "123"], handler4) → "New value: cba, 321,"// строки инвертируются


*/

function firstFunc(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return `New value: ${newArr.join(" ")}`;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}
console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

function handler2(el) {
  return el * 10;
}
console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
  return `${el.name} is ${el.age}`;
}
console.log(
  firstFunc(
    [
      { age: 45, name: "John" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  )
);
[1, 2, 3][(3, 2, 1)];

function handler4(el) {
  return el.split("").reverse().join("");
}
console.log(firstFunc(["abc", "123"], handler4));

/* Практическое задание по функциям высшего порядка
Написать аналог метода every. 
1. Создайте функцию every, она должна принимать первым аргументом массив чисел 
2. (обязательно проверьте что передан массив) 
3. вторым аргументом callback (обязательно проверьте что передана функция). 
4. Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.")
Функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.*/

function every(arr, fn) {
  if (!Array.isArray(arr) && typeof fn !== "function") {
    throw new Error("it's not going to work, my friend");
  }

  const resultsList = [];

  for (let i = 0; i < arr.length; i++) {
    // collect all booleans from fn() results
    resultsList.push(fn(arr[i], i, arr));
  }

  // check all collected booleans and return boolean
  for (let result of resultsList) {
    if (!result) {
      return false;
    }
  }

  return true;
}

function isLessThanFive(num) {
  return num > 5;
}
console.log(every([6, 7, 8, 4], isLessThanFive));

function isGmail(email) {
  return email.endsWith("@gmail.com");
}
console.log(
  every(["user@gmail.com", "victoria@gmail.com", "vladimir@gmail.com"], isGmail)
);

function isPositiveNumber(num) {
  return num;
}
console.log(every([6, 7, 0, 4], isPositiveNumber));
