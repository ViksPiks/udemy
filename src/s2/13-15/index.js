const paragr = document.querySelector("p").textContent;
console.log(paragr);

//Создать функцию, которая принимает в качестве аргумента узел DOM и
// возвращает информацию (в виде объекта) о типе узла,
// об имени узла и о
// количестве дочерних узлов (если детей нет - 0).

const getNode = document.querySelector("div");

const getObjInfo = (node) => ({
  type: node.nodeType,
  name: node.nodeName,
  childrenCount: node.childNodes.length,
});

console.log(getObjInfo(getNode));

//Получить массив, который состоит из текстового содержимого ссылок внутри списка:
// getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const ul = document.querySelector("ul");

const getTextFromUl = (ul) => {
  const links = ul.querySelectorAll("a");

  const textArray = [...links].map((link) => link.textContent);
  return textArray;
};

console.log(getTextFromUl(ul));

//В параграфе заменить все дочерние текстовые узлы на “-text-”
// (вложенные теги должны остаться).
// результат:-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const p = document.querySelector("p");

const replaceNodes = (p) => {
  p.childNodes.forEach((node) => {
    if (node.nodeType === 3) {
      node.textContent = "-text-";
    }
  });
};

replaceNodes(p);

//Найти в коде список ul и добавить класс “list”

ul.classList.add("list");
console.log(ul);

//Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

const ul2 = document.querySelector("ul");
let next = ul2;

while (next) {
  next = next.nextElementSibling;
  if (next && next.tagName === "A") {
    next.id = "my-link";

    break;
  }
}

//На li через один (начиная с самого первого) установить класс “item”

const allLi = document.querySelectorAll("li");

allLi.forEach((li, i) => {
  if (i % 2 === 0) {
    li.classList.add("item");
  }
});

//На все ссылки в примере установить класс “custom-link”

const allLinks = document.querySelectorAll("a");
allLinks.forEach((a) => a.classList.add("custom-link"));

console.log(allLinks);

//В каждую ссылку, которая находятся внутри списка ul
// добавить по тегу strong (в каждую ссылку один - strong).

const weFindUl = document.querySelector("ul");
weFindUl.querySelectorAll("a").forEach((a) => {
  const strongEl = document.createElement("strong");
  strongEl.textContent = "strong";
  a.append(strongEl);
});

//В начало документа (в начало body) добавить картинку img
//с атрибутами src и alt (текст придумайте сами).
//В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const body = document.body;
const imgEl = document.createElement("img");
imgEl.setAttribute(
  "src",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoJGiSeTKX-yoDpuNrHEjCdzpqV1JCHnPUTo-CeRDaBtvQEtub4yliTvhXPl-hGIt7BkuK1BrjCTB9gS_dfYv77nxbQYQmymuPIBQDBCwL"
);
imgEl.setAttribute("alt", "some img");
body.prepend(imgEl);

console.log(imgEl);

//Найти на странице элемент mark, добавить в конец содержимого текст “green”
//и на элемент установить класс green

const mark = document.querySelector("mark");
mark.classList.add("green");
mark.textContent += "green";
console.log(mark.textContent);

//Отсортировать li внутри списка в обратном порядке (по тексту внутри)

const anotherUlEl = document.querySelector("ul");
const allLiEls = anotherUlEl.querySelectorAll("li");
const sortedLis = [...allLiEls].sort((prevLi, nextLi) => {
  if (prevLi.textContent < nextLi.textContent) {
    return 1;
  }
  if (prevLi.textContent > nextLi.textContent) {
    return -1;
  }
  return 0;
});

anotherUlEl.replaceChildren(...sortedLis);

// Не используя innerHTML, добавить в список несколько li
//  с классом ‘new-item’
//  и текстом ‘item’
//  + номер li:

/* <ul>

<li><a href="#">Link1</a></li>

...

<li class=”new-item”>item 5</li>

<li class=”new-item”>item 6</li>

</ul> */

// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

const yetAnotherUl = document.querySelector("ul");

const createLi = () => {
  const newLiEl = document.createElement("li");

  newLiEl.classList.add("new-item");
  newLiEl.textContent = `item ${yetAnotherUl.childElementCount + 1}`;

  yetAnotherUl.append(newLiEl);
};

const createMultipleLi = (count) => {
  for (let i = 1; i <= count; i++) {
    createLi();
  }
};

createMultipleLi(2);
