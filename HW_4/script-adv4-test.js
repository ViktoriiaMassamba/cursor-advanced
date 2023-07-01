// primitives types:
/**
 * string
 * number
 * booltan
 * null
 * undefined
 * NaN
 * symbol
 * bigint
 */

/* let a = 10;
const b = a;
a = 25;
console.log(b); //10 */

/* let a = 10;
a = 25;
const b = a;
console.log(b); //25  */

/**
 * not-primitives Links types
 * object - object, Array
 */

/* const array1 = new Array(3);
const array11 = new Array('xvcbxb');

const array2 = [1, true, 'cgcgj', null, [], {}];

const array3 = new Array(1, 2, 3);

console.log(array1); //(3) [пусто * 3] - метод создает массив, но не присвает никаких значение, хотя указывает длину массива, скольо элементов
console.log(array11); // если используем один нечисловой параметр, то  в массиве будет пусто, который дальше нужно будет заполнить
console.log(array2); // (6) [1, true, 'cgcgj', null, Array(0), {…}] - метод передает массив 
console.log(array3); // (3) [1, 2, 3] */

/* let a = 10;
const b = a;
a = 25;
console.log(b);  */

/*const array1 = [1, 2, 3, 4, 5]; //несмотря что у нас переменная const , значения внутри массива мы можем изменять

const array2 = array1;

//console.log(array1[0], array1[1], array1[2], array1[4]); // 1 2 3 5

array1[0] = 25;

console.log(array1[0], array1[1], array1[2], array1[4]); // 25 2 3 5 */

/* const array1 = [1, 2, 3, 4, 5];
const array2 = array1;
array1[0] = 25;
console.log(array2[0]); //25 */

/* const array1 = [1, 2, 3, 4, 5];
const array2 = array1;
console.log(array2[0]); //1
array1[0] = 25;*/

/* const fruits = ['apple', 'orange', 'lemon']; // let a = 10;
const fruitsCanIEat = fruits; // const b = a;
fruits[2] = 'banana'; // a = 25;
console.log(fruitsCanIEat) // (3) ['apple', 'orange', 'banana'] // console.log(b); //10

fruitsCanIEat.push('kavun')
console.log(fruits) // (4) ['apple', 'orange', 'banana', 'kavun'] // изменяя массив , мы изменяем и массив a */

/* let a = 10;
const b = a;
console.log(a === b);  // true - a = 10, и значит b = 10
a = 25; // когда мы изменили значение а равно 25
console.log(a === b);  // false - в этом консол.лог а 25 Не равно b 10 */

/* const fruits = ['apple', 'orange', 'lemon']; 
const fruitsCanIEat = fruits; 
console.log(fruits === fruitsCanIEat); // true
fruits[2] = 'banana'; 
console.log(fruits === fruitsCanIEat); //  true - т.к копируется ссылка и изменяя значения, сама ссылка остается без изменений, &fruits : &fruitsCanIEat  т.е сравниваем только ссылки
 */

/* const fruits = ['apple', 'orange', 'lemon'];  // ссылка fruits
const fruitsCanIEat = ['apple', 'orange', 'lemon'];  // ссылка fruitsCanIEat
    const fruitsCanIEat2 = fruits; // не создается ссылка, а присвается ссылка уже существующего массива
console.log(fruits === fruitsCanIEat); // false - несмотря на одинаковый массив внутри ссылка fruits и ссылка fruitsCanIEat всегда будут разными
fruits[2] = 'banana'; 
console.log(fruits === fruitsCanIEat); // false */

/*const number = [1, 2, 3, 4, 5, 6];
console.log(number.length); // 6 - элементов Определение количества элементов в массиве 

const numbers = [1, 2, 3, 4, 5, 6, 121, 15, 188];
console.log(number[numbers.length -1], numbers) //(9) [1, 2, 3, 4, 5, 6, 121, 15, 188] //188  // Опередение последнего элемента в массиве

 function getMeasure(arr){
    let sum = 0;
    //for while
    for(let i = 0; i <arr.length; i++) { // перебираем до < меньше длины length нашего массива arr
    sum += arr[i]; // += перебираем каждый элемент массива arr который будет в [i] 0 1 2 3 и так дальше до конца нашего массива, т.е по очереди будем получать значения 1 2 3 4 5 и тд и добавлять их
    }
    return sum/arr.length // чтобы вернуть среднуюю сумму, количество мы знаем из длины массива (9) 
}
console.log(getMeasure(numbers)); // 38.333333333333336 */

/** ========== МЕТОДЫ МАССИВОВ ================= */
// * indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
// возвращает первый индекс(первое вхождение) значит что как только система находит нужно число, номер это индекса выводится в результат и дальше проверка не идет

/* const arr1 = [1, 2, 5, 87, 3, 0, -2, 87]; //
console.log(arr1.indexOf(87)); // 3 - номер индекса первого 87 */

/* const arr1 = [1, 2, 5, 87, 3, 0, -2, 87]; //
console.log(arr1.indexOf(87, 5)); // 7 - номер индекса первого 87 после вхождения с 5 индекса, т.е поиск начинается с 0 значения
console.log(arr1.indexOf(0, 5)); // 5 
console.log(arr1.indexOf(657)); // -1  */

// * lastindexOf() Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.

/* const arr1 = [1, 2, 5, 87, 3, 0, -2, 87];
console.log(arr1.lastIndexOf(87)); //7  - аналогично indexOf(), только поиск с конца
console.log(arr1.lastIndexOf(1)); //0  */

// * push() добавляет один или более элементов в конец массива и возвращает новую длину массива. Возвращает не новый массив, а только длину.

// * unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.

// !!! ПРИ ДОБАВЛЕНИИ элементов push(), unshift() - возвращают нам длина массива
// !!! ПРИ УДАЛЕНИИ элементов pop(), shift() - возвращают значение, которое было удалено возвращается (выносится вперди)

// * pop() удаляет последний элемент из массива и возвращает его значение.

// * shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
/* 
const arr1 = ['pigs', 'goats', 'sheep'];
console.log(arr1.length, arr1);// (3) ['pigs', 'goats', 'sheep']
let newLenght = arr1.push('cows', 'dog'); // новый массив
console.log(newLenght, arr1.length, arr1); // (4) ['pigs', 'goats', 'sheep', 'cows', 'dog']
/*newLenght = arr1.unshift('cat', 'dog2');
console.log(newLenght, arr1) //(5) [dog2', 'cat', 'pigs', 'goats', 'sheep', 'cows'] 

newLenght = arr1.unshift('cat', 'dog2');
arr1.pop()
arr1.pop()
arr1.pop()
console.log(newLenght, arr1)  // (4) ['cat', 'dog2', 'pigs', 'goats']

const valueWasDeleteEnd = arr1.pop();
console.log(valueWasDeleteEnd, arr1);  // cows (4) ['cat', 'pigs', 'goats', 'sheep']
const valueWasDeleteStart = arr1.shift();
console.log(valueWasDeleteStart, arr1);  // cat (3) ['pigs', 'goats', 'sheep'] */

// first in -> first out (первый зашел -> первый вышел)

// Пример: Очередь на отправку электронных писем

/*const usersToSendEmail = [];

function createUser(name) {

    usersToSendEmail.push(name); //функция добавляет новых людей в очередь на отправку письма 
    console.log(`User was added to email list: ${name}`); //Пользователь был добавлен в список адресов электронной почты
}

function sendEmail() {
    const user = usersToSendEmail.shift(); // функция отправляет письмо
    console.log(`Send email to user: ${user}`);  // Отправить письмо пользователю
}

function checkMyEmeilList(){
    while(usersToSendEmail.length > 0) //Оператор while создает цикл, который выполняет указанный оператор до тех пор, пока условие проверки оценивается как истинное. Условие оценивается перед выполнением инструкции.
        sendEmail()
}

createUser('Josh');
createUser('Anna');
// by time by 1 minute - вызываем функцию каждую минуту
checkMyEmeilList();

createUser('Emmy');

checkMyEmeilList(); */

/*
00:09:42.951 script-adv4-test.js:177 User was added to email list: Josh
00:09:42.951 script-adv4-test.js:177 User was added to email list: Anna
00:09:42.952 script-adv4-test.js:182 Send email to user: Josh
00:09:42.952 script-adv4-test.js:182 Send email to user: Anna
00:09:42.952 script-adv4-test.js:177 User was added to email list: Emmy
00:09:42.953 script-adv4-test.js:182 Send email to user: Emmy */

/* * includes()определяет, содержит ли массив определенное значение среди своих записей, возвращая true или false при необходимости.*/

/* const pets = ['cat', 'dog', 'bat', 'cat'];

console.log(pets.includes('cat')); // true
console.log(pets.includes('cows')); // false */

//indexOf lastIndexOf Includes - методы поиска элемента -> 1 number boolean
// 0 -> false -1 -> true

/* * concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.*/

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [10, 15];

/* console.log(arr1); // (3) [1, 2, 3]
const newArr = arr1.concat(arr2);
console.log(arr1, newArr); // (3) [1, 2, 3] (6) [1, 2, 3, 4, 5, 6] */

/* const newArr = arr1.concat(arr3, arr2);
console.log(newArr); // (8) [1, 2, 3, 10, 15, 4, 5, 6] 

console.log(arr1, arr2) // (3) [1, 2, 3] (3) [4, 5, 6]
const newArr = arr1.concat(arr3, arr2);
console.log(arr1, arr2) // (3) [1, 2, 3] (3) [4, 5, 6] */

/**
 * slice()возвращает неглубокую копию части массива в новый объект массива, выбранный из start до end ( endне включенный), где startи end представляет индекс элементов в этом массиве. Исходный массив не будет изменен. (вырезает элементы из массива)
 */

/* 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
              //   0       1        2        3         4
              //  -5      -4       -3       -2        -1 
*/

/* const newAnimals = animals.slice(2); // -> .slice создает новый массив не изменяя старый
console.log(animals); // (5) ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(newAnimals); // (3) ['camel', 'duck', 'elephant']

console.log(animals === newAnimals); //false т.к при методе slice создает новый массив и новую ссылку */

/*const newAnimals = animals.slice(2, 3); 
console.log(newAnimals);  // ['camel'] */

/* const newAnimals = animals.slice(2, animals.length -1); 
console.log(newAnimals);  // (2) ['camel', 'duck'] */

/*const newAnimals = animals.slice(0, animals.length -1); 
console.log(newAnimals);  // (4) ['ant', 'bison', 'camel', 'duck']*/

/* const newAnimals = animals.slice(-2); // минусовое значение убирает элементы с конца
console.log(newAnimals);  // (2) ['duck', 'elephant'] */

/*
 *splice()изменяет содержимое массива, удаляя или заменяя существующие элементы и/или добавляя новые элементы на место . Не создает новый массив, а модрнизирует существующий Метод вырезает и заменяет, если есть значение для замены
 */

/**
 * [{
 * name: 'gxhhh'
 * age: 18
 * }
 * {
 * name: 'gxhhh'
 * age: 18
 * }
 * {
 * name: 'gxhhh'
 * age: 18
 * }
 * ]
 */

/* const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, 'Feb'); // 1 - индекс куда вставить, 0 -вставить без изменений, 1 - удаляет Март, 2 - удаляет Март, Апрель
// Inserts at index 1
console.log(months); // (5) ['Jan', 'Feb', 'March', 'April', 'June'] */

/* months.splice(0, 2); // 'Feb - можно не вставлять 1 - индекс куда вставить, 0 -вставить без изменений, 0 - удаляет 'Jan' на нулевом индексе и до 1  индекс
console.log(months); // (3) ['April', 'June'] */

/* const result = months.splice(0, 1); 
console.log(months); // (3) ['March', 'April', 'June']
console.log(result); // ['Jan'] - элемент который вырезали  */

/* const result = months.splice(0, 1, 'Feb'); 
console.log(months); // (4) ['Feb', 'March', 'April', 'June']
console.log(result); // ['Jan'] - элемент который вырезали и заменили*/

/* const result = months.splice(0, 2); 
console.log(months); // (2) ['April', 'June']
console.log(result); // (2) ['Jan', 'March'] - элемент который вырезали  */

/* const result = months.splice(1, 2, 'Feb', 'Dec'); 
console.log(months); // (4) ['Jan', 'Feb', 'Dec', 'June'] вырезали и заменили
console.log(result); // (2) ['March', 'April'] - элемент который вырезали */

/* const result = months.splice(1, 0, 'Feb', 'Dec', 'Nov'); 
console.log(months); // (7) ['Jan', 'Feb', 'Dec', 'Nov', 'March', 'April', 'June']  добавили
console.log(result); // [] - пустой массив */

/**
 * Метод join()создает и возвращает новую строку путем объединения всех элементов массива (или объекта, подобного массиву ), разделенных запятыми или заданной строкой-разделителем. Если в массиве только один элемент, то этот элемент будет возвращен без использования разделителя.
 */

/* const months = ["Jan", "March", "April", "June"];
console.log(`My mons: `, months); // (4) ['Jan', 'March', 'April', 'June'] - строка + массив
console.log(`My mons: ` + months); // My mons: Jan,March,April,June - все одной строкой
console.log(`My mons: ` + months.join()); // My mons: Jan,March,April,June - по умолчанию разделение запятой
console.log(`My mons: ` + months.join(" ," )); // можно добавить пробел " ", пробел с запятой " ,", без пробела ''
console.log('Jan March April June' .split(' ')); // возвратный метод для строки My mons: Jan,March,April,June   ->   (4) ['Jan', 'March', 'April', 'June']
console.log('Jan March April June' .split(''));  // (20) ['J', 'a', 'n', ' ', 'M', 'a', 'r', 'c', 'h', ' ', 'A', 'p', 'r', 'i', 'l', ' ', 'J', 'u', 'n', 'e']
console.log(months.join(" ").split(' '))// (4) ['Jan', 'March', 'April', 'June'] */

/**
 * reverse()переворачивает массив на месте и возвращает ссылку на тот же массив, при этом первый элемент массива становится последним, а последний элемент массива становится первым. Другими словами, порядок элементов в массиве будет повернут в сторону, противоположную указанной ранее.

Чтобы поменять местами элементы в массиве без изменения исходного массива, используйте toReversed().

 */

// АННА

//const str1 = '';

/* function check(str) {
  // split("") - разбиваем посимвольно
  const arr = str.split(""); // строку с помощью split преобразуем в массив, разобъем посимвольно ("") мсходная строка "АН" ->  получили массив array ["А", "Н"] перевернули -> ["Н", "А"] -> 'НА'
  return arr.reverse().join("") == str; // arr.reverse() - переворачиваем массив, потом объеденим в строку .join(" ") и сравним наши входящие данные с изначальными
}

console.log(check("АННА")); //true
console.log(check("АННИ")); //false */

// !!! Метод за методом можно вызывать последоватьно через запятую, не выводя на кадую новую строку

// ЧИСТАЯ ФУНКЦИЯ принимает вс себя данные как параметр (str) и отдает эти данные. т.е не зависит от внешних свойств

/* function check(str) {
    const arr = str.split(""); // "АН" -> array ["А", "Н"] -> ["Н", "А"] -> 'НА'
    return arr.reverse().join(" ") == str;
}
 */
// str1 - пример НЕЧИСТОЙ ФУНКЦИИ, т.к если мы вызовем ее 349 строке и изменим значение на 358 строке и вызовим check1() на 360 строке, то это будет совсем другое значение

/* const str1 = ''

function check1() {
    const arr = str1.split(""); // "АН" -> array ["А", "Н"] -> ["Н", "А"] -> 'НА'
    return arr.reverse().join(" ") == str1;
}

check('А')
check('А')
check('А')
check('А')
check('А')


check1()

str1 = 'adsada'

check1()  */

/* Кожне завдання виконується у вигляді чистої функції.
Функція повертає масив або інше значення, але не змінює його!
У консоль/html виводите результат виклику функції:
const pairs = getPairs(students);
console.log(pairs);

Перед виконанням цього домашнього завдання необхідно створити 3 масиви:
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
У вас повинен вийти вкладений масив з парами студентів:
[["Олександр", "Олена"], [..], [...]];

2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */

/* const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури  даних"];
const marks = [4, 5, 5, 3, 4, 5]; */

// перебрать массив студентов через фор ич
//создать функцию проверки мальчик или девочка и создать массив

//const allowerBoys = ["Олександр", "Олексій"]

// входит ли имя мальчика в массив allowerBoys
// allowerBoys.includes{students(1)}

// создать очередь для пары М и Д

// можно вырезать всех М и вставить в новый массив

// ппроверить не меньше ли количество тем, чем пар и назнать паре тему рамдомно или последовательно
/* 
for (i) {
    return.push([students[i], marks[i]])
}

function task1(students, themes) {
    return []
}

function task2(doubleStudents, marks) {
    return []
}

const pars = task1(students, themes)

const result2 = pars(pars, marks) */

/* let number = function(num) {
  let chet = 0;
  let nechet = 0;
  for (let i = 0; i < num.lenght; i++) {
    if (num[i] % 2 == 0) chet++;
    else nechet++;
  }
  return [chet, nechet];
};
let a = number("5548762140");

console.log(function());
 

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi()*/

/* let phrase; // a
phrase = "Hello"; //10
phrase = "Bay"; //25
//console.log(phrase); //25

//Function Declarations
function say(name) {
  console.log(`${phrase}, ${name}`); // Bay, Ann
}

say("Ann");
//console.log(say()); */
