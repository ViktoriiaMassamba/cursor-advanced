/* Створіть 3 змінних з наступими значеннями:
15.678, 123.965, 90.2345.
Ці змінні зберігають ціни на товари.
Придумайте їм назви (товар можна придумати будь-який) */

const milk = 15.678;
const fish = 123.965;
const fruits = 90.2345;

// 1. Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(milk, fish, fruits);
console.log("1. Максимальне число:", maxPrice + " " + "грн.");

// 2. Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(milk, fish, fruits);
console.log("2. Мінімальне число:", minPrice + " " + "грн.");

// 3. Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let allSum = milk + fish + fruits;
console.log("3. Вартість всіх товарі:", allSum + " " + "грн.");

// 4. Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНШУ сторону.
let roundPrice = Math.floor(milk) + Math.floor(fish) + Math.floor(fruits);
console.log("4. Вартість всіх товарі без копійок:", roundPrice);

// 5. Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let roundHundredPrice = Math.round(roundPrice / 100) * 100;
console.log("5. Cума товарів округлену до сотень:", roundHundredPrice);

// 6. Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let evenNumber = roundPrice % 2;
if (evenNumber == 0) {
  console.log("6. Cума всіх товарів чи є парним чи непарним числом?:", true);
} else {
  console.log(false);
}

// 7. Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let restMoney = 500 - allSum;
console.log("7. Cума решти:", restMoney + " " + "грн.");

// 8. Виведіть середнє значення цін, округлене до другого знаку після коми
let averagePrice = allSum / 3;
console.log(
  "8. Cереднє значення цін, округлене до другого знаку після коми: ",
  averagePrice.toFixed(2) + " " + "грн."
);

//9. Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random). Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

const saleRandom = Math.floor(Math.random() * 20) + 1;
console.log(
  "9. Випадкова знижка у відсотках:",
  saleRandom.toFixed(2) + " " + "%"
);

const saleMoney = (allSum * saleRandom) / 100;
console.log(
  "9. Випадкова знижка у грошах:",
  saleMoney.toFixed(2) + " " + "грн"
);

let randomDiscount = allSum - saleMoney;
console.log("9. Cума до оплати:", randomDiscount.toFixed(2) + " " + "грн.");

// 10. Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let costPrice = allSum / 2;
let netProfit = randomDiscount - costPrice;
console.log("10. Чистий прибуток:", netProfit.toFixed(2) + " " + "грн."); /*


(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток =
130 - 26 -> 104)
(Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 -
90 -> -40) */
