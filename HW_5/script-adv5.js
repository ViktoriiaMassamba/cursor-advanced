/*  У цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)
1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length -
довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/

let myArray1 = [];
const randomArray = function getRandomArray() {
  const min = 1;
  const max = 20;
  const numlength = 7;
  for (let i = 0; i < numlength; i++) {
    myArray1.push(Math.floor(Math.random() * max) + min);
  }
  return myArray1;
};
console.log("1. Масив випадкових цілих чисел:", randomArray(myArray1));

/*2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2 */

/* const moda = function getModa() {
    const result = myArray1.filter();
    for (let i = 0; i < myArray1.length; i++) {
        myArray3.push(myArray1[i] > 0);}
        count++;
      }
      return myArray3;

console.log(moda());
console.log(result()); */

let myArray3 = {};

let getModa = (elementArray, myArray, objOutput) => {
  let buffs = [];

  myArray.forEach((e) => {
    if (e === elementArray) {
      buffs.push(e);
    }
  });

  objOutput[elementArray] = buffs.length;
};
[...myArray1].forEach((e) => {
  getModa(e, myArray1, myArray3);
});

console.log("2. Мода всіх переданих в неї аргументів.", myArray3);

/*
3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

// Number.isInteger

const sum = myArray1
  .filter(function (myArray1) {
    return myArray1 >= 0;
  })
  .reduce(function (accumuletor, myArray1) {
    return accumuletor + myArray1;
  }); /* function averageValue (){
     return sum / myArray1.length;
} */
//console.log(sum);

let averageValue = function () {
  return sum / myArray1.length;
};
console.log("3. Cереднє арифметичне:", averageValue().toFixed(2));

/*4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3 */

const median = (myArray1) => {
  const arrays = myArray1.sort((a, b) => a - b);
  const centerArray = Math.floor(myArray1.length / 2);
  return myArray1.length / 2 !== 0
    ? arrays[centerArray]
    : (arrays[centerArray - 1] + arrays[centerArray]) / 2;
};
console.log("4. Медіана всіх переданих в неї аргументів - ", median(myArray1));

/*

5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

const filterEvenNumbers = myArray1.filter(function (myArray1) {
  return myArray1 % 2 === 0;
});
console.log("5. Фільтрує парні числа - ", filterEvenNumbers);

/*
6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3*/

/* const countPositiveNumbers = myArray1.filter(function (myArray1) {
  return;
});
console.log("6. Кількість чисел більших - ", countPositiveNumbers);
 */
/*
7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

const getDividedByFives = myArray1.filter(function (myArray1) {
  return myArray1 % 5 === 0;
});
console.log(
  "7. Елементи в масиві, які діляться на ціло на 5 - ",
  getDividedByFives
);

/*
8. Створіть функцію replaceBadWords(string) – яка 
1) розіб'є фразу на слова,
2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив
необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати cписок цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"]

10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте
слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.
Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
Приклад: generateCombinations("ol") -> ["ol", "lo"]  */

/* const str1 = '';
function check(str) {
  const arr = str.split(""); // "АН" -> array ["А", "Н"] -> ["Н", "А"] -> 'НА'
  return arr.reverse().join(" ") == str;
}
console.log(check()) */