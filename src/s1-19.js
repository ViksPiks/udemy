/*
1. Создать функцию, которая принимает число n и возвращает массив, заполненный
числами от 1 до n: getArray(10); [1,2,3,4,5,6,7,8,9,10]

2. Создать функцию, которая принимает массив, а возвращает новый массив с
дублированными элементами входного массива.
doubleArray([1,2,3]); [1,2,3,1,2,3]

3. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из
каждого массива первый элемент, а возвращает массив из оставшихся значений.
changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
Не забудьте про проверкку того что массив является массивом. Это можно сделать с
помощью метода Array.isArray(arr);

4. Создать функцию которая принимает массив пользователей, поле которое хочу проверить
и значение на которое хочу проверять указанное поле. Проверять что все аргументы
переданы. Если что то не переданно то возвращать объект ошибки
return new Error('Error message'). Возвращать новый массив с пользователями
соответсвующие указанным параметрам.
Массив пользователей
[
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]

filterUsers(users, “gender”, “male”);
Result :
[
   {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
   },
 ]
*/

function getArray(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array[i] = i + 1;
  }
  return array;
}
console.log(getArray(10));

//or

function returnArray(n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return array;
}
console.log(returnArray(9));

// 2. Создать функцию, которая принимает массив, а возвращает новый массив с
// дублированными элементами входного массива.
// doubleArray([1,2,3]); [1,2,3,1,2,3]

function doubleArr(arr) {
  return arr.concat(arr);
}

const b1 = doubleArr([1, 2, 3]);

/*Создать функцию, которая принимает произвольное (любое) число массивов 
и удаляет из каждого массива первый элемент, 
а возвращает массив из оставшихся значений.
changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]

Не забудьте про проверку массив is массив. методом Array.isArray(arr);*/

function changeCollection(...arrays) {
  const result = [];

  for (let arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new Error(`Not an array`);
    }

    const copiedArrWithoutFirstElement = arr.slice(1);

    result.push(copiedArrWithoutFirstElement);
  }

  return result;
}

console.log(changeCollection([1, 2, 3], ["a", "b", "c"], [23, 22]));

// 1. Создать функцию которая принимает массив пользователей,
// поле которое хочу проверить и значение на которое хочу проверять указанное поле.
// 2. Проверять что все аргументы переданы.
// 3. Если что то не передано то возвращать объект ошибки return new Error('Error message').
// 4. Возвращать новый массив с пользователями соответствующие указанным параметрам.

// Массив пользователей:
const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

/**
 * @typedef {{
 * _id: string,
 * balance: string,
 * picture: string,
 * age: number,
 * name: string,
 * gender: string
 * }} User
 */

/**
 * @param {User[]} usersList
 * @param {string} property
 * @param {number | string} value
 */

function filterUsers(usersList, property, value) {
  if (
    usersList === undefined ||
    property === undefined ||
    value === undefined
  ) {
    return new Error("NOPE");
  }

  const filteredUsers = [];

  for (let user of usersList) {
    if (user[property] === value) {
      filteredUsers.push(user);
    }
  }

  return filteredUsers;
}

console.log(filterUsers(users, "age", 33));
