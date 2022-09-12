/*
    Questions for this assignment

    1. Создать объект с полем product, равным ‘iphone’

    2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

    3. Добавить поле details, которое будет содержать объект с полями model и color
*/

// 1. Создать объект с полем product, равным ‘iphone’

const card = {
  product: "iphone",
};

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

card.price = 1000;
card.currency = "dollar";

// 3. Добавить поле details, которое будет содержать объект с полями model и color

card.details = {};
card.details.model = "14";
card.details.color = "Black";
console.log(card);
