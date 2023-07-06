/* const numbers = [ 1, 3, 4, NaN];

// для перебора массива, чтобы пройтись по каждому элементу for, while

// для проверки, исключения условия if
const checkisEmptyString = function() {
    const text = prompt("Enter your text", '');

    if(text!== ''){ // не равно пустой страке 
        return // функция закончится, если будет корректный текст
    }
    console.log(''); // если равно пустой строке, то выводит сообщение Вы ввели не правильный текст
}
// через while пользователь будет вводить число несколько раз пока не введет корректно, в реально жизни так не применяют  */

//forEach, map, filter, find, every, some, reduce, sort -отличается тесм, что они возвращают - принимают в параметры функцию

/* const numbers = [1, 212, -10, 25, 30];
// не примитивный тип данных

//array

//property
console.log((numbers.length)); // 5 

//methods
console.log(numbers.join(', ')); // 1, 212, -10, 25, 30 - метод вызываем с помощью крглых скобок

// методы имеют теже саммые свойства, что и фунция, и также работают с параметрами и return

function myJoin(numbers, separator = ' '){
    let str = ''; // выходе строка, которая по умолчанию пустая
    for (let i = 0; i <numbers.length; i++) { //работаем каждой итерацией
        const currentSeparator = i !== numbers.length-1?separator:''; // если последнее значение не separator, то ставим пробел  ''
        str += numbers[i] + currentSeparator; //каждая строка добавляется и снаячало numbers[i] к каждому элементу на итерации и separator
    }
    return str; // добавили проверку в конце, что наш 
}
console.log(myJoin(numbers, ', ')) // 1, 212, -10, 25, 30 */

// Неприметивы: string boolean null undefined NaN symbol

// Типы параметров функции может быть - функция, массив, объекты
// console.log(myJoin({}, [], function)

// ********* FOREACH  ***************
// Метод forEach()выполняет указанную функцию один раз для каждого элемента в массиве.

/* // обращаемся через имя массива numbers, литерал 
const numbers = [1, 212, -10, 25, 30];
//numbers.push[123];
//callback for forEach
function callback(item, index, arr){
    console.log(item, index, arr); // 1 0 (5) [1, 212, -10, 25, 30]
}
    // 1 -первое значение, 0 - индекс, (5) - длина массива, [1, 212, -10, 25, 30] - сам массив не меняется
// важно последовательность (item, index, arr)
// item - значаение определенной итерации
// arr - исходный массив
//для forEach функция может ничего не возвращать, не имеет модификаций 
//numbers.forEach(callback) // передая функцию callback, мы ее не вызываем, т.е без (), только ее название 
// в себя принимает callback-функцию  */

/* function sum(a, b){
    return a+b;
}
sum(1, 2, 3, 4, 5)
console.log(sum(1, 2, 3, 4, 5)); // 3 хотя параметров передали больше
console.log(sum(1));  // NaN если меньше парметров */

// также и callback, может работать с одним или больше параметров? но они всегда будут undefined

/* function callback(item, index, arr, a, b){
    console.log(item, index, arr, a, b);
} // 1 0 (5) [1, 212, -10, 25, 30] undefined undefined */

//метод ForEach так выглядит внутри и имеет определеную реализацию функции, callback-функции - обязательный параметр, который что-то передает. Может вызываться или передаваться дальше в параметр

/* function myForEach(array, callbackFn) {
    for(let i=0; i<array.length; i++) { // определеный перебор по нашему массиву
        callbackFn(array[i], i, array); // myForEach вызывает callbackFn на каждой итерации myForEach вызывает функцию, которую передали в параметре, в эту функцию передает также определенные параметры array[i] - массив и его элемент, i - индекс, array - массив
    }
}
myForEach(numbers, callback)

for(let i=0; i<5; i = i+1){ // 5 повторений цикла
} */

/* const numbers = [1, 212, -10, 25, 30];
//function callback(numbers, index){
//      console.log(numbers, index);  // 1 0 
function callback(item, index){ // если передаем два параметра 
    console.log(item, index); // 1 0 
}
function myForEach(array, callbackFn) {
    for(let i=0; i<array.length; i++) { 
        callbackFn(array[i], i, array);
    }
}
myForEach(numbers, callback) */

// анонимная (стрелочная) функция function(numbers, index)  это функция без имени, создается и используется в опреденый момент, т.е передача парметров для какой то другой функции

/* const numbers = [1, 212, -10, 25, 30];
numbers.forEach(function (numbers, index, array){
     console.log(numbers, index, array); //  1 0 (5) [1, 212, -10, 25, 30],  212 1 (5) [1, 212, -10, 25, 30]
    })

const callback = function() {}


const callback = (a, b, c) => {} //объявление функции через функциональное выражение, вместо function указывается => */

/* const ids = [1, 212, 10, 25, 30];

/* ids.forEach(function(item, index) {
    console.log(item, index)
}) 

function sendEmail(id) {
    console.log('Email is sended: ', id); //1 212 10 25 30
}


 ids.forEach(function(id){
    sendEmail(id)
})
const ids = [1, 212, 10, 25, 30]; 

const res = ids.forEach(function(id){
    sendEmail(id)
})
console.log(res, ids); // (5) [1, 212, 10, 25, 30] */

// **************** MAP  **********************
// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

/**
 * не модифицирует исходный массив
 * возвращает новый  массив, и т.к возвращает, мы можем записать в переменную const
 * если ничего не возвращаем, то создастся новый массив с undefined
 * не изменяет исходный массив
 */

/* const ids = [1, 212, 10, 25, 30]; 
const result = ids.map(function(item, index, array){
    
})
console.log(result); // (5) [undefined, undefined, undefined, undefined, undefined] */

/* const ids = [1, 212, 10, 25, 30]; 
const result = ids.map(function(item, index, array){
    return item;
    
})
console.log(result); // (5) [1, 212, 10, 25, 30]
console.log(result === ids) ; // false - т.к map создает новый array, т.е новую ссылку для нового массива и наполняет его определенными данными, которые возвращаем из callback-функции  */

/*const ids = [1, 212, 10, 25, 30]; 
const result = ids.map(function(item, index, array){
    return  Math.pow(item, 2); // возведение к степени
    
})
console.log(result) // (5) [1, 44944, 100, 625, 900]  */

/* const ids = [1, 212, 10, 25, 30]; 
const result = ids.map(function(item, index, array){
    return  `${index + 1}. ${item}`; // создаем список, строку
    
})
console.log(result) // (5) ['1. 1', '2. 212', '3. 10', '4. 25', '5. 30']
console.log(result, ids) // (5) ['1. 1', '2. 212', '3. 10', '4. 25', '5. 30'] - входящий массив изменен  (5) [1, 212, 10, 25, 30] исходящий массив неизменен */

/* const ids = [1, 212, 10, 25, 30]; 
const result = ids.map(function(item, index, array){
  //  return ids[0] + item // сумма первого элемента + item
    return array[0] + item  // или так
})
console.log(result) // (5) [2, 213, 11, 26, 31] */

// использовали третий параметр array, чтобы не зависить от того какой массив, набор данных будем использовать
/* const ids = [1, 212, 10, 25, 30]; 
const numbers = [1, -1, 5, 3, 0]; 

function callback(item, index, array){ // метод map принимает в себя callback функцию, которая имеет такую же структуру как ForEach
    return array[0] + item // возвращает новый массив, который не равен исходному массиву, а будетновая ссылка в памяти и будет независимыми, и соответственно не модифицирет наш массив 
}
const result1 = ids.map(callback)
const result2 = numbers.map(callback)
console.log(result1, result2) //(5) [2, 213, 11, 26, 31] (5) [2, 0, 6, 4, 1] */

// Адаптер данных API -> [] --> map

// **************** FILTER  **********************

/**
 * метод перебирающих массивов
 * обязательно возвращает true || false
 * не модифицирует исходный массив
 * возвращает новый массив, поэтому нужно присвоить переменную const result  и выводить в console.log
 * filter создает новый массив и записывает туда значания item, если мы вернули return item
 */

//
/* const numbers = [1, 212, -5, -120, 30, 0]; 
const result = numbers.filter(function(item, index, array){
   // если не указывать return, то возвращается пустой массив
   // return true; // возвращает в console.log(result); (6) [1, 212, -5, -120, 30, 0] результат идентичный исходящему массиву, но имеет другую ссылку, поэтому result === numbers и результат false
    return item >=0; // (4) [1, 212, 30, 0] - отфильтровали все числа с минусом, если item больше 0, то будет true и попадет в новый массив, если меньше, то false и исключится из нашего массива

})
console.log(result, result === numbers); //(6) [1, 212, -5, -120, 30, 0]
 false */

// **************** FIND  **********************
/**
 * не модифицирует исходный массив
 * возвращает первое значание массива, которое удовлетворяет наше условие
 * если не удовлетворяет условие, то возвращает undefined
 */

/* const numbers = [1, 212, -5, -120, 30, 0]; 
const result = numbers.find(function(item, index, array){
/*     return item < 0 }) // true || false 
       console.log(result); // -5 */

/*return item < -1000 })// true || false
        console.log(result); // undefined - не нашел ни одного меньшего элемента и ничего не возвращает */

// **************** EVERY  **********************
/**
 * возвращает true || false,   если все элементы удовлетворяют условие
 * не модифицирует исходный массив
 * работает до первого false и работает как && ИЛИ до первого false, после заканчивает итерацию
 * перебирает каждый элемент и проверяют условие
 */

/* const numbers = [1, 212, -5, -120, 30, 0]; 
const result = numbers.every(function(item, index, array){
    return item >= 0; }) // найти отрицательный элемент

console.log(result); // false - нашел первый false в -5 и дальше не проверяет */

// **************** SOME  **********************
/**
 * противоположность EVERY
 * работает до первого true и работает как || И
 * возвращает true || false,   если один из элементов удовлетворяют условие, если не один элемент не удовлетворит условие, то возвращает false
 * перебирает каждый элемент и проверяют условие
 */

/* const numbers = [1, 212, -5, -120, 30, 0]; 
const result = numbers.some(function(item, index, array){
    return item >= 0; }) // найти отрицательный элемент

console.log(result); // true, т.к первый элемент 1 больше нуля, то возвращает true и дальше не проверяет 

const numbers = [-5, -120, 30, 0]; 
const result = numbers.some(function(item, index, array){
    return item >= 0; }) // найти отрицательный элемент

console.log(result); //true, т.к первый элемент положительный 30 больше нуля, то возвращает true и дальше не проверяет  */

/* const numbers = [-5, -120, 30, 0]; 
const result = numbers.some(function(item, index, array){
    return item >= 100; }) // найти элемент больше 100
console.log(result); // false */

// **************** REDUCE  **********************
/**
 * не модифицирует исходный массив
 * возвращает определенное значение return value(item)
 */
/* const numbers = [-5, -120, 30, 999]; 
const result = numbers.reduce(
    function(previusValue, currentItem, index, array) {})
console.log(result); // undefined или 0 */

// previusValue- accumuletor - накапливает в себе результаты всех предыдущих, возвращающихся в callback функции
// currentItem - нынешнее значение, как предыдущих вариантах Item

/* const numbers = [-5, -120, 30, 999]; 
const result = numbers.reduce(
    function(previusValue, currentItem, index, array) {
        return currentItem
    },
    0 // InitialValue(начальное значение)нашей суммы
    )
console.log(result); // 999  */

// callback функция перезаписывает InitialValue(начальное значение) на каждой итерации и попадает в previusValue, последнюю итерацию отдает в result. Чтобы получить сумму нужно каждую итерацию добавлять к предыдущей

/* const numbers = [-5, -120, 30, 999]; 
const result = numbers.reduce(
    function(previusValue, currentItem, index, array) {
        console.log(previusValue, currentItem, index); //  -5 -120 1          -125 30 2           -95 999 3
        // 1000 -5 0  995 -120 1   2 875 30 2    905 999 3
        return previusValue + currentItem
    },
    //0
    1000
    )
console.log(result); //904  //1904 */

/** 0
 * previusValue = 0;
 * currentIte = -5
 * result: 0 + -5 = -5
 *
 * 1
 * previusValue = -5;
 * currentIte = -120
 * result: -5 + -120 = -125
 *
 * 2
 * previusValue = -125;
 * currentIte = 30
 * result: -125 + 30 = -95
 *
 * 3
 * previusValue = -95;
 * currentIte = 999
 * result: -95 + 999 = 904
 *
 */

/* На первой итерации previusValue попадает 1000, котрую мы передали, дальше -currentItem -5, дальше следующее значение 1000-5 = 995 и возвращает и так далее */

/* const numbers = []; 
const result = numbers.reduce(
    function(previusValue, currentItem, index, array) {
        console.log(previusValue, currentItem, index); 
        return previusValue + currentItem
    }
    )
console.log(result); */

/* InitialValue может быть не обязательным параметром и ничего не передавать, то станет на одну итерацию меньше. Если передадим пустой массив const numbers = []; будет ошибка Uncaught TypeError: Reduce of empty array with no initial value at Array.reduce (<anonymous>) at */

/* const numbers = [1,2,4]; 
if(numbers.length>0) {
const max = numbers.reduce(
    function(previusValue, currentItem, index, array) {
        return  currentItem < previusValue? previusValue:currentItem
    }
)
console.log(max)
}; //ничего не выводит, если, const numbers = []; , если const numbers = [1,2,4]; , то выведет 4
console.log(numbers) // (3) [1, 2, 4] не изменился, не модифицирует исходный массив, но возвращает значение которое будет сакамулировано с тех return и того InitialValueй, что мы передим для previusValue. По параметрам принимает два параметр: callback функции и InitialValue */

// **************** SORT  **********************
/*
* метод сортирования
* модифицирует массив как push, pop
* возвращает не новый массив array, а возращает старую ссылку на него
* функция сравнения, работает как для чисел, так и для строк
* в себя принимает callback функции сравнения или не принимать ничего 

*/

/* const numbers = [1, -5, 0, -3, 999, 10]; 
const avengers = ['Spider man', 'Iron man', 'Capitan of America']

const result = numbers.sort()
avengers.sort(); // 3) ['Capitan of America', 'Iron man', 'Spider man']
avengers.reverse(); // ['Spider man', 'Iron man', 'Capitan of America']
console.log(result, numbers === result); // 6) [-3, -5, 0, 1, 10, 999] -сортирует от меньшего к большему , numbers === result дает true, т.к ссылка не меняется
console.log(avengers); // (3) ['Capitan of America', 'Iron man', 'Spider man'] */

/* const numbers = [1, -5, 0, -3, 999, 10]; 
function compare() {
    // return number, если отрицательное,то меняются местами (b, а)
// a - нынешнее значение
// b - будущее значение
}
numbers.sort(compare);
console.log(numbers); // (6) [1, -5, 0, -3, 999, 10] массив не изменился
 */

/* const numbers = [1, -5, 0, -3, 999, 10]; 
function compare(a, b) {
    if( a>b) return -1;
    if (a===b) return 0;
    if(a<b) return 1; 
}
numbers.sort(compare);
console.log(numbers); // (6) [999, 10, 1, 0, -3, -5]  */

/* const numbers = [1, -5, 0, -3, 999, 10]; 
function compare(a, b) {
    if( a<b) return -1;
    if (a===b) return 0;
    if(a>b) return 1; 
}
numbers.sort(compare);
console.log(numbers); // (6) [-5, -3, 0, 1, 10, 999]  */

/* const numbers = [1, -5, 0, -3, 999, 10]; 
function compare(a, b) {
   //return a - b;  // [-5, -3, 0, 1, 10, 999] 
   return b - a;  // (6) [999, 10, 1, 0, -3, -5]
}
numbers.sort(compare);
console.log(numbers);  */

/* const avengers = [ "Iron man", "Spider man", "Capitan of America"];

avengers.sort(function (a, b) {
  // return a < b?-1:1; // при сравнении строк должны сделать такую конструкцию // (3) ['Capitan of America', 'Iron man', 'Spider man']
  return a > b?-1:1; //  ['Spider man', 'Iron man', 'Capitan of America']
});
console.log(avengers); // (3) ['Spider man', 'Iron man', 'Capitan of America'] */



// **************** CHEINING  **********************

/* const numbers = [2, 4, -5, 0, 3, -29];

const res1 = numbers.filter(function(numbers){
    return numbers >= 0 // отфильтровали все отрицательные значения
})
console.log(res1); // (4) [2, 4, 0, 3]

const res2 = res1.map(function(number){
    return number + 10; // добавил к каждому элементу +10
})
console.log(res2); // (4) [12, 14, 10, 13]

const sum = res2.reduce(function(accumuletor, number){
    return accumuletor + number; // суммируем 
}, 0)
console.log(sum); // 49 */

// сокращаем эту функцию с помощью CHEINING

/* const numbers = [2, 4, -5, 0, 3, -29];
const sum = numbers.filter(function(numbers){
    return numbers >= 0;
}).map(function(number){
    return number + 10;
}).reduce(function(accumuletor, number){
    return accumuletor + number; // суммируем 
}, 0)
console.log(sum); //49
 */
// действия выполняются по таблице приоритетности операторов, сначало фильтр, потом операторы присваивания

/* const elements = ['apple', 'tomato', 'cucumber', 'banana', 'orange']
const vagetables = elements.filter(function(item) {
    return item  === 'tomato' || item  ==='cucumber'
})
const fruits = elements.filter(function(item) {
    return item  !== 'tomato' && item !=='cucumber'
})
console.log(vagetables); // (2) ['tomato', 'cucumber']
console.log(fruits); // (3) ['apple', 'banana', 'orange'] */


/* let myArray = [1, 1, 1, 1, 1, 1, 1];
const randomArray = myArray.map(function(item, index, array) {
  for (let i = 0; i <= myArray.length; i++) {
    //if (myArray[i] * (Math.floor(Math.random() * 20) + 1)) {
        callbackFn(myArray[i] * (Math.floor(Math.random() * 20) + 1));
    }
  }
  return newArray;
);
console.logn(randomArray); */

/* let myArray = [1, 1, 1, 1, 1, 1, 1];
let myNewArray = myArray[i];
let result = myNewArray * (Math.floor(Math.random() * 20) + 1);

for (let i = 0; i < myArray.length; i++) {
    result.
  }
  return result;

console.log(result); */



/* let myArray3 = [];
const average = getAverage() {
    for (let i = 0; i < myArray1; i++) {
}
return myArray3;
}
console.log(average(myArray3)); */

// Number.isInteger