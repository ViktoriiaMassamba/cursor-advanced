/* 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8*/

let number = 23597024;
//console.log("1. Будь-яке число -", number);
function getMaxDigit(n) {
  let counter = 0;
  n = n + "";
  for (let i = 0; i < n.length; i++) {
    if (n[i] > counter) {
      counter = n[i];
    }
  }
  return counter;
}
console.log(
  "1. Найбільша цифра -",
  getMaxDigit(number),
  "в числе" + " " + number
);

/*2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл */

function calculeinDegree(numeric = 2, degree = 4) {
  let result = 1;
  for (let i = 0; i <= degree; i++) {
    result *= numeric;
  }
  return result;
}
console.log("2. Cтупінь 4 числа 2 -", calculeinDegree());

/* 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);*/

let name = "joHn";
function upperlet() {
  const name = "joHn";
  let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return newName;
}
console.log("3. Перша буква імені велика", upperlet());

/* 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805*/

function netProfit(salary, tax) {
  let payRoll = salary - (salary * tax) / 100;
  return payRoll;
}

let index = netProfit(1000, 19.5);
console.log("4. Cума, що залишається після оплати податку", index);

/*5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5 */

function randInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min); // Метод Math.random()возвращает случайное число от 0 (включительно) до, но не включая 1 (исключая).
  return Math.floor(rand); // Метод Math.floor()округляет число ВНИЗ до ближайшего целого числа.
}
let r = randInt(1, 15);
console.log("5. Випадкове ціле число", r);
/* console.log(randInt(222, 333));
console.log(randInt(222, 333) + 100);  */

/*6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4 */
function countLetter(say, letter) {
  let counter = 0;
  let sayCase = say.toLowerCase().split("");
  let letterCase = letter.toLowerCase();

  for (let i = 0; i < sayCase.length; i++) {
    if (sayCase[i] === letterCase) {
      counter++;
    }
  }
  return counter;
}
console.log(
  "6. Cкільки разів певна буква повторюється в слові АстАалАвіста -",
  countLetter("АстАалАвіста", "а")
);

/* 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency "2500UAH") -> 100$
8. Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
*/

//let exchange = prompt("Введите сумму обмена");
//let course = 25;

function currencyExchange() {
  let exchange = prompt("Введите сумму обмена").toUpperCase();
  let course = 25;

  if (!exchange) {
    return "7. Значение не введено";
  }

  if (exchange.includes("$")) {
    const moneyUSD = exchange.slice(0, exchange.length - 1);
    let currencyUSD = +moneyUSD * course;
    return (
      "7. У меня есть - " +
      moneyUSD +
      "$" +
      ", " +
      "Я получу - " +
      currencyUSD +
      "UAH"
    );
  }

  if (exchange.includes("UAH")) {
    const moneyUAH = exchange.slice(0, exchange.length - 3);
    let currencyUAH = +moneyUAH / course;
    return (
      "7. У меня есть - " +
      moneyUAH +
      "UAH" +
      ", " +
      "Я получу - " +
      currencyUAH +
      "$"
    );
  } else {
    return "7. Не верно введена валюта";
  }
}
console.log(currencyExchange());

/* 
9. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. Приклад: getRandomPassword(4) -> 1875, etRandomPassword() -> 87240124*/

function getRandomPassword() {
  const chars = "0123456789";
  const passwordLength = prompt("Длина пароля");
  //console.log(passwordLength);
  let password = "";

  for (let i = 1; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
  //return "9. Случайный пароль ", password + " " + "количество символов", passwordLength;
}
console.log("9. Случайный пароль ", getRandomPassword());

/*10. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"*/

function deleteLetters(letters = "a", say = "blablabla") {
  delLetSay = "";

  for (let i = 0; i < say.length; i++) {
    if (letters !== say[i]) {
      delLetSay = delLetSay + say[i];
    }
  }
  return delLetSay;
}
console.log(
  "10. Видаляє всі букви 'a' з речення 'blablabla'  = ",
  deleteLetters()
);

/*11. Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true*/

function isPalyndrom(str = "Мадаg") {
  str = str.toLowerCase();

  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(
  "11. Створіть функцію, яка перевіряє, чи є слово паліндромом - ",
  isPalyndrom()
);

/*12. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" */
/* 
function deleteDuplicateLetter (
    text = "Бісквіт був дуже ніжним"){

        delDupplicate = "";
        for (let i = 0; i < text.length; i++) {
            if(text[i] !== text[text.length ]) {
             delDupplicate = delDupplicat + text[i];
             return counter++ < 1;
            }
        return false;
        }
    }
    console.log("12. видалить з речення букви, які зустрічаються більше 1 разу = ", deleteDuplicateLetter()); 
 */
document.writeln(`Функція No1: Найбільша цифра - ${getMaxDigit(number)}<br>`);
document.writeln(`Функція No2: Cтупінь 4 числа 2 - ${calculeinDegree()}<br>`);
document.writeln(`Функція No3: Перша буква імені велика ${upperlet()}<br>`);
document.writeln(
  `Функція No4: Cума, що залишається після оплати податку ${index}<br>`
);
document.writeln(`Функція No5: Випадкове ціле число, ${r}<br>`);
document.writeln(
  `Функція No6: Cкільки разів певна буква повторюється в слові АстАалАвіста - ${countLetter("АстАалАвіста", "а")}<br>`
);
document.writeln(`Функція No8: Конвертацыя валют ${currencyExchange()}<br>`);
document.writeln(`Функція No9: Случайный пароль ${getRandomPassword()}<br>`);
document.writeln(
  `Функція No10: Видаляє всі букви 'a' з речення 'blablabla'  = ${deleteLetters()}<br>`
);
document.writeln(
  `Функція No11: Створіть функцію, яка перевіряє, чи є слово паліндромом - ${isPalyndrom()}<br>`
);
