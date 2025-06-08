//1. По нажатию на кнопку "btn-msg" должен появиться
// aлерт с тем текстом который находится в атрибуте data-text у кнопки.

const button = document.getElementById("btn-msg");
button.addEventListener("click", () => {
  const dataTxt = button.dataset.text;
  alert(dataTxt);
});

//2. При наведении указателя мыши на "btn-msg", кнопка становится красной;
// когда указатель мыши покидает кнопку, она становится прежнего цвета.
// Цвет менять можно через добавление класса.

const btn = document.getElementById("btn-msg");
btn.addEventListener("mouseenter", () => {
  btn.classList.add("hover-red");
});

btn.addEventListener("mouseleave", () => {
  btn.classList.remove("hover-red");
});

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега
// нажатого элемента.

const tag = document.getElementById("tag");
const initialText = tag.textContent;

document.body.addEventListener("click", (event) => {
  tag.textContent = `${initialText} ${event.target.nodeName}`;
});

//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li
// с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const ul = document.querySelector("ul");

const generateLi = () => {
  const newLi = document.createElement("li");
  newLi.textContent = `Item ${ul.childElementCount + 1}`;

  return newLi;
};

const btnGenerate = document.getElementById("btn-generate");

btnGenerate.addEventListener("click", () => {
  ul.append(generateLi());
});
