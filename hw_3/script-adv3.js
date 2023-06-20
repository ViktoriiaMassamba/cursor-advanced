// functions
/* let name;
console.log(name); // undefined

function /* declarate world  calk  name  ( a, b  parametrs optional ) {
    //body function

    return a + b; //optional
}
*/

/* console.log(name); // Uncaught SyntaxError: Unexpected token '{' ошибка функция вызвана раньше, чем объявлена
let name;
function calk ( a, b ) {
    return a + b; 
} */

/*console.log(calc); // дублирование функции - когда объявляем через ключевое слово function 
// объявлять функцию можем до или после console.log(calc) мы можем обращаться раньше и будет доступна к выполнению

/*
console.log(name); обращение к переменной раньше
let name;   потом объявим
то будет ошибка
а с функциями так можно 

function calc (a, b) {
    console.log(a, b)
    return a + b; 
} */

//console.log(calc2); // при вызове переменной с функцией раньше, то будет ошибка

/* const calc2 = function () { //anonimus function -функция без имени // переменной присвоена функция
} */
//console.log(calc2);  // при вызове после переменой, ошибкми не будет, а покажет тело функции

//console.log(calc2());  // undefined - при передаче console.log объкта функции и не вызывать функцию (), то console.log передаст нам не результат. а код функции

// В декларировании через функциональное выражение console.log(calc2) будет работать только после объявления функции

// Если в функции используем переменную const через функциональное выражение, то мы ее не можем в дальнейшем изменить

// Camel case

/* function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
  //return 10;
} //return - функция возвращает

/*
const fullName1 = getFullName("Josh", "Smit");
const fullName2 = getFullName("Marry", "Smit");

console.log(fullName1); // Josh Smit
console.log(fullName2); // Marry Smit 

function viewFullName(fullName) {  //fullName - парметр котрый нужно вывести
  console.log(fullName); // Josh Smit
  return;
} //void - функция ничего не возвращает, птолько выполняет код
const fullName1 = getFullName("Josh", "Smit");
viewFullName(fullName1); // вызываем функцию и передаем fullName1

console.log(getFullName("Josh", "Smit")); // Josh Smit - в return указали параметры для передачи
console.log(viewFullName(fullName1)); // по умолчанию передает undefined, т.к указали в функции  return и ничего не передали 

// можно указать и два return в функции, но в разных {} */

//console.log(fullName1, fullName2); // Josh Smit Marry Smit

/* function getFullName(firstName, secondName = 12, lastName, a = 'middle name') {
  return `${firstName} ${lastName} ${secondName} ${a}`;
}

// a - параметр по умолчанию, заглушка, может быть не только строка, но и число, и булевый тип, переменная функции  и т.д

const fullName1 = getFullName("Josh", "Smit", "Pupkin");
const fullName2 = getFullName("Marry", "Smit");

console.log(fullName1); // Josh Pupkin Smit - порядок соответственно значениям функции и return 
console.log(fullName2); // Marry Smit undefined- вместо пустого параметра  */

/* function getFullName(
    a = prompt('Enter first name: ', ' '),
    c = prompt('Enter last name: ', ' '),
    b = prompt('Enter middle name: ', ' ')
) {
    return `${a} ${b} ${c} `
}
const fullName1 = getFullName("Josh", "Smit");
const fullName2 = getFullName("Marry");

console.log(fullName1); // Josh  prompt1 Smit 
console.log(fullName2); // Marry prompt3 prompt2  */

/* function getFullName(
    a = '',
    c = '',
    b = ''
) {
    return `${a} ${b} ${c} `// если нет в функции return то функция ничего не делает
}
const fullName1 = getFullName("Josh", "Smit");
const fullName2 = getFullName("Marry");

console.log(fullName1); // Josh  Smit 
console.log(fullName2);  // Marry

console.log(getFullName('Marry2', 'Smit2')); //Marry2  Smit2  */

/* function name1(params) {
  console.log("name1"); // функция переобъявлена
}

function name1(params) {
  console.log("name2"); //
}

const name2 = function () {
  console.log("Name2");
};

 name2 = function () {
  console.log("Name3");
}; // name2 можем переназначить только если удет объявлено через let name2, а при const name2 будет ошибка 

name2();*/

/* Функции, которые возвращают 

function sum (a, b) {
  // a = 1
  // b  = undefined
  // 1 + undefined = NaN 
  return a + b
}
console.log(sum(1)); // NaN

function sum (a, b) {
  return a + b
}
console.log(sum(1, 2)); // 3

function sum (a, b = 0) {
  return a + b
}
console.log(sum(1)); // 1 */

/* function seyHi() {
  alert("Hello!");
}
seyHi(); // выдает сообщение Hello!

function seyHello(name = " ") {
  alert(`Hello, ${name}!`);
}

console.log(seyHello("Josh")); // выдает сообщени Hello, Josh!  */

//rest operator ... args ...rest используются на случай неизвестного количества параметров
/* function sum(... args) {
  console.log(args);
}
sum(1, 2, 3, 4) // (4) [1, 2, 3, 4] */

/*function sum(... args) {
  console.log(args, args.length);
}
sum(1, 2, -3, 4, 15, -6, 70, -8, 9) // (9) [1, 2, -3, 4, 15, -6, 70, -8, 9] 9 */

/*  Сумма значений

function sum(... args) {
  let total = 0;
  debugger;
  for (let i = 0; i<args.length; i++) {
    total = total + args[i];

  }
  console.log(args, args.length) //  (9) [1, 2, -3, 4, 15, -6, 70, -8, 9] 9
  return total;
}
console.log(sum(1, 2, -3, 4, 15, -6, 70, -8, 9)) // 84
 */

/* function sum(a, b, c, d) {
  return a + b + c + d;
}
console.log(sum(1, 2, 3, 4)) // 10 */

//Минимальное значение
/* function min(... args) {
  let minValue; // по умолчанию это значение не объявлено

  for (let i = 0; i<args.length; i++){
/*     if(minValue !== undefined && args[i] < minValue) //если наше значение minValue было присвоено, тогда мы его переповеряем, что minValue не равно !== undefined и аргумент меньше minValue
      minValue == args[i];// тогда minValue перезапишим нашим args[i] 

    if (minValue === undefined) { // если наше значение равно undefined
      minValue = args[i]; // тогда minValue присвоим args[i]
      continue; // переходим до следущей итерации
    }

    if(args[i] < minValue) { // если args[i] не меньше minValue, то мы ничего с ним не делаем
      minValue = args[i];
    }
  }
  return minValue; // выводим минимальное значание
}

console.log(min(1, 2, -3, 4, 15, -6, 70, -8, 9)) // -8 */

/* function max(...args) {
  let maxValue; //начальное значение нам не извстно, поэтому будет undefined 
  for (let i = 0; i < args.length; i++) {
    if (maxValue === undefined) { // при первой итерации, т.к maxValue равен undefine, то приравнивается к 1 (из console.log(max(1,) и переходит к следующему действию 
        maxValue = args[i]; 
        continue; // пропускаем и переход к следущему шагу
    }

    if (args[i] > maxValue) { //1 не больше 2, поэтому maxValue =2, сравниваем 2 и 0, т.к 0 меньше, то пропускаем его
      maxValue = args[i];
    }
  }
  return maxValue;
}

console.log(max(1, 2, 0, 4, 15, 9)); //15 */

// сокращеный вариант
/* function max(...args) {
  return Math.max(...args);
}
console.log(max(1, 2, 0, 4, 15, 9)) //15  */

/* 
function minOrMax(operator, ...args) {
    if (operator === 'min') {
      return Math.min(...args)
    } else if (operator === 'max') {
      return Math.max(...args)
    } else {
      console.log('Unknown operator'); // Unknown operator
    }
}

console.log(minOrMax(1, 2, 0, 4, 15, 9)); // undefined
console.log(minOrMax('max', 1, 2, 0, 4, 15, 9)); // 15
console.log(minOrMax('min', 1, 2, 0, 4, 15, 9)); // 0 */

/* function minOrMax(operator = 'min', ...args) { // если хотим использовать оператор 'min' по умолчанию
  if (operator === 'min') {
    return Math.min(...args)
  } else if (operator === 'max') {
    return Math.max(...args)
  } else {
    console.log('Unknown operator'); // Unknown operator
  }
}
console.log(minOrMax(undefined, 1, 2, 0, 4, -15, 9)); // -15 - первым значение нужно поставить undefined */

/* function minOrMax(operator, errorMessage = 'Unknown operator', ...args) {
  if (operator === 'min') {
    return Math.min(...args)
  } else if (operator === 'max') {
    return Math.max(...args)
  } else {
    console.log(errorMessage); // Some error
  }
}
console.log(minOrMax(undefined, 'Some error', 1, 2, 0, 4, -15, 9)) // undefined */

/* function minOrMax(operator, errorMessage = 'Unknown operator', firstNumber, ...args) {
  console.log(firstNumber); // -100
  if (operator === 'min') {
    return Math.min(firstNumber, ...args)
  } else if (operator === 'max') {
    return Math.max(firstNumber,...args)
  } else {
    console.log(errorMessage, firstNumber); // Some error
  }
}
console.log(minOrMax('min', 'Some error', -100, 2, 0, 4, -15, 9)) // -100 */

/* const b = 10;
{
  console.log(b) // будет ошибка Uncaught ReferenceError: Cannot access 'b' before initialization at 
  const b = 15; // если мы объявляем переменную, которая существует вне блока const b = 10;, то мы не можем ее const b = 15; использовать до нашего объявления
  console.log(b);
} // block
function minOrMax (){
} */

/* // При таком варианте наша переменная переназначится и результат будет 15
const b = 10;
{
  const b = 15;
  console.log(b); //15
} // block
function minOrMax (){
} */

/* const b = 10;
{
  console.log(b); //10 - т.к console.log(b) ищет переменную b в нашем блоке, не находит ее и тогда ищет вне блока, находит ее и выводит в сonsole.log(b)
} // block
function minOrMax (){
} */

/* // С var  console.log(b) выводит все переменные, которые находит 
var b = 10;
{
  console.log(b) //10
  var b = 15; 
  console.log(b); //15
} // block
function minOrMax (){
}  */

/* // C функциями переменные работают также, сначало ищет внутри блока и выводит
var b = 10;
function minOrMax (){
  console.log(b) //undefined
  var b = 15; 
  console.log(b); //15
}
minOrMax(); */

/* var b = 10;
function minOrMax (){
  const b = 15; 
  console.log(b); //15
}
minOrMax(); */

/* let b = 10; // если мы используем let, const то объявив за функцией переменную, которую  мы позже можем переназначить, у нас будет возникать ошибка, т.к мы вызываем ее раньшем, чем декларируем
function minOrMax (){
  console.log(b) // script-adv3.js:344 Uncaught ReferenceError: Cannot access 'b' before initialization at minOrMax
  let b = 15; 
  console.log(b); //15
}
minOrMax(); */

/* function minOrMax (){
  console.log(b)
}
minOrMax(); 
let b = 10; // Uncaught ReferenceError: Cannot access 'b' before initialization at minOrMax - т.к хоть и функция объявлено, но вызываем ее раньше, чем нашу переменную */

/* function minOrMax (){
  console.log(b); // undefined - т.к переменная обьявлена, но не назначена let b
}
let b;
minOrMax(); 
b = 10;  */

/* function minOrMax (){
  console.log(b); //script-adv3.js:367 Uncaught ReferenceError: Cannot access 'b' before initialization at minOrMax - т.к в этот момент такой переменой еще не существует и он незнает где взять undefined
}
minOrMax(); 
let b = 10;  */

/* function minOrMax (){
  console.log(b); //script-adv3.js:367 Uncaught ReferenceError: Cannot access 'b' before initialization at minOrMax - т.к в этот момент такой переменой еще не существует и он незнает где взять undefined
}
let b;

minOrMax(); // undefined
b = 10;

minOrMax(); // 10 */

/* function minOrMax (){
  let b = 10;
}

minOrMax();
console.log(b) // Uncaught ReferenceError: b is not defined - т.к b нигде нет, все переменные объявленые внутри блока, будут доступны только внутри функции, также и с параметрами в следующем примере  */

/* function minOrMax (a){
  let b = 10;
  console.log(a, b); // undefined 10
}

minOrMax();
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(a) */

/* function minOrMax(operator, ...args){
  return operator === 'min'? Math.min(...args) : operator === 'max'? Math.max(...args): null;
}

console.log(minOrMax('min', 12, 123, 4, -2)); // -2
console.log(minOrMax('min', 12, 123, 4, -2, 2, 1, 3, 45, 56, -100)); // -100
console.log(minOrMax('max', 231, 321, 31, 41, 1000)) // 1000 */

/* function minOrMax(number){
  const element = String(number).split('')
  const value;
  for(let i = 0; 0<element.length; i++){
    Number
  }
  return
} */
