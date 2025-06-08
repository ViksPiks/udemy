// Questions for this assignment

// Реализовать примитивный дропдаун.
// Изначально все dropdown-menu скрыты через класс .d-none.
//  При клике на dropdown-item должен отображаться блок
//  dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик.
//  При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
//  При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться
//  а на тот который кликнули открываться.

const allDropdowns = document.querySelectorAll(".dropdown-item");

let latestUsedDropdownMenu;

allDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    const isAdded = dropdownMenu.classList.toggle("d-none");

    if (latestUsedDropdownMenu && latestUsedDropdownMenu !== dropdownMenu) {
      latestUsedDropdownMenu.classList.add("d-none");
    }

    if (!isAdded) {
      latestUsedDropdownMenu = dropdownMenu;
    }
  });
});

// const menu = document.querySelector(".menu");

// menu.addEventListener("click", (e) => {
//   if (e.target.classList.contains("dropdown-item")) {
//     const dropdownMenu = e.target.querySelector(".dropdown-menu");
//     dropdownMenu.classList.toggle("d-none");
//   }
// });
