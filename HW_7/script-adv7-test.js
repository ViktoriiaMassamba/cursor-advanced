// stack

/* function words(){
    console.log("hello");// 4.  функции words() выводит результат консоли
}
function tell() {
    words(); // 3. функции tell() вызывает  words()
}

function hello(){
    tell(); //2. функции hello() вызывает tell()
}
hello(); // 1. hello() обращается к function hello()
 */

/* let i = 0;
i = 3;
function works () {1
   // i = 1; // в первую очерь вызывается, то что в функции тогда результат 1
    console.log(i);
}
//i = 2; // если в функции нет значения, то выводится, то что идет после тела функции
works(); */

//лексический круг
/* 
let i = 0;
let a = 3;
// {link: null, data: {i: 0}}// 1. link - ссылка, data - содержит в себе все глобальные функции и переменные т.е i = 0/ здесь переменная записывася как объект i: - ключ, 0 - индекс

function works () {
    i = 2; //3. {link: null, data: i: 2 } - создавая переменную внутри функции, глобальный круг не меняется, а становится другим локальным кругом и имеет ссылку на глобальную функцию
    console.log(i); // 2
    console.log(a); // 3
   }
i = 1; // 2. когда изменяется переменная глобальный объект выглядит {link: null, data: i: 1 }
works(); */

// link: null - это все глобальный круг
// когда функция пытается взять с другого места, это называется замыкание, т.е сначала ищет внутри console.log(i); данные, и если не находит, то ищет за предлами console.log(a);

/* let i = 0;
let a = 3; // 4. ищет значение глобально за пределами функции, находит

// {link: null, data:{i: 0,  a: 3 }
function works() {
  // 3.  ищет значение внутри функции works, не находит
  i = 2;

  // {link: global, data:{i: 2}
  function works_2() {
    // {link: works, data:{ }
    function works_3() {
      // {link: works_2, data:{ }
      console.log(a); // 1. ищет значение внутри функции works_3, не находит
    }
    works_3(); // 3 // 4. выводит в works_3
  } // 2.  ищет значение внутри функции works_2, не находит

  console.log(i); // 2
  works_2();
}
i = 1;
works();
 */
// если нашло значение в локальном круге, то дальше не ищет

/* function hello () {
    alert("It works");
}

hello(); */

// разница между обычной и стрелочной функцией (с названием)

/* let hello_1 = () => {
    console.log("It works");
}
function hello_2(){
    console.log("It works");
}

hello_1();
hello_2();

// let hello_3  = "hello"  // обычная переменная
let hello_3  =  (text) => { // стрелочная функция 
    console.log(text);
}

let hello_4  = text => { // если передается одно значение, то можно писать text без ()
    console.log(text);
}

let hello_5  = (text1, text2) => { // если два и больше значений, то обязательно ()
    console.log(text1, text2);
}

/* let hello_6  = text1, text2 => { // если два и больше значений, без () работать не будет
    console.log(text1, text2);
} 

let hello_7  = _ => { // _ вместо () восприниматся как "необязательный атрибут", не принимает никаких аргументов
    console.log("It works");  // undefined
}

hello_3("hello");
hello_4("hello");
hello_5("hello", "word");
hello_7(_);
hello_7(h); */

// разница между обычной и стрелочной функцией (ананимной)

// addEventListener и onclick (onmousedown, onmouseenter, ondblclick) - использовать обычные функции. В других случаях использовать стрелочные

// при нажатии на hello запускается It works 1 и через 2 секунды It works 2

/* document.querySelector("#hello").addEventListener("click", function(){
    console.log("It works 1");

    setTimeout(function(){
        console.log("It works 2");
    }, 2000); // 2000- милисекунд = 2 сек
}) */

/* document.querySelector("#hello").addEventListener("click", function(){
    console.log(this);

    setTimeout(function(){
         console.log(this);
        //console.log(this.textContent);
    }); 

    setTimeout(() => { //  =>  стрелочная функция помогает инорировать this
        console.log(this);
        //console.log(this.textContent);
    })
})

 // this это упрощение, чтобы повторно не писать элемент, который уже написан выше 
 */

// более простой пример

/*  let data = {
    name: "Dasha",
  //  func: () => { // если () то обращение идет к всему сайту 
    func: function() { 
        console.log(this.name); // возвращает name

        setTimeout(function() { // вызывает глобальный объект 
            console.log(this); // Window
        });

        setTimeout(() => { // игнорирует внутри себя какие либо this, и берет this в этом элементе func: function() {  стр 152
            console.log(this); // 
        })
    }
}
data.func(); */

/* let ob = {
  a: 5,
  b: 6,
  //  c: function(){return ob1.a + ob.b} // this
  c: function () {
    return ob1.a + this.b;
  }, // this берется от своего элемента от ob
};

let ob1 = {
  a: 5,
  b: 6,
  c: function () {
    return ob1.a + this.b;
  },
}; */

// Переименование

/* function func_1(){
    console.log("It works"); // It works
}

let data = {
    name: "Dasha",
    func_main: func_1 // 
}
data.func_main();
 */

// Создали function func_1() отдельно

/* function func_1(){
    console.log(this) // {name: 'Dasha', func_main: ƒ}
}

let data = {
    name: "Dasha",
    //func_main: func_1.bind(document) // при .bind(document) в консоли выводится {name: 'Dasha', func_main: ƒ}
    func_main: func_1.bind(window) // при .bind(window) в консоли выводится Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 } 
data.func_main(); */

// Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.

/* function func_1(){
    console.log(this) // {age: 25, gender: 'female'}
}

let info = {
    age: 25,
    gender: "female"
}

let data = {
    name: "Dasha",
    func_main: func_1.bind(info)  // благодаря bind и меняется this, в этом конкретном месте bind заменяет this, чтобы не передавать в консоле несколько раз к примеру (document.querySelector), как в строке 225-229, а писать только (this.querySelector), а document передать в 246 и не писать document
 } 
data.func_main();

// если нужно использовать document кастомный, т.е свой, то можно использовать this

function func_1(){
    console.log(document.querySelector)
    console.log(document.querySelector)
    console.log(document.querySelector)
    console.log(document.querySelector)
}
//или 
/* function func_1(){
    console.log(this.querySelector)
    console.log(this.querySelector)
    console.log(this.querySelector)
    console.log(this.querySelector)
} 

let info = {
    age: 25,
    gender: "female"
}

let data = {
    name: "Dasha",
   // func_main: func_1.bind(document) // при стр 233-236
    func_main: func_1.bind(info)  // 
 } 
data.func_main(); */

//переделали на document и теперь this совсем другой документ
/* function func_1(){
    console.log(this); // #document, также здесь может быть и window
}
func_1.bind(document)();  

function func_1(){
    console.log(this); // #document, также здесь может быть и window
}
func_1(); // без .bind в консоле будет Window {window: Window, self: Window, document: document, name: '', location: Location, …}


/* function func_1(){
    console.log(this); // #document, также здесь может быть и window
}

let info = {
    age: 25,
    gender: "female"
}
func_1.bind(info)();
func_1(); // также без .bind не сможем передавать свой объект */

/* let info = {
    age: 25,
    gender: "female"
}

function func_1(){
    console.log(this);
}
func_1.bind(info)(); // .bind переделывает, но не запускает, поэтому обязательно нужны ()

let data = {con
    name: "Dasha",
    func_main: func_1.bind(info)  // используем .bind когда нужно переделать данные в объекте
 } 
data.func_main(); // когда используем функции, то обязательно пишем data и (); */

// Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.

/* let info = {
    age: 25,
    gender: "female"
}

function func_1(firstname, lastname){ // в () можем принимать данные
    console.log(this, firstname, lastname); // {age: 25, gender: 'female'} 'Dasha' 'Shevchenko'
}
// func_1.bind(info)();
func_1.call(info, "Dasha", "Shevchenko"); //.call делает тоже самое что и .bind , только в конце не используем () */

// Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива (либо массивоподобного объекта (en-US)).

/* let info = {
    age: 25,
    gender: "female"
}

function func_1(firstname, lastname){ 
    console.log(this, firstname, lastname); // {age: 25, gender: 'female'} 'Dasha' 'Shevchenko'
}
func_1.apply(info, ["Dasha", "Shevchenko"]); // тоже самое, что и .call, только значения передаем не через , а через [ ] как массив */

// Контекст

// код ниже называется рекурсия
/* const calculate = (x, n) => {
  if (n == 1) {
    return x;
  } else {
    return x * calculate(x - 1, n - 1); // если поставить только n, то будет бесконечность
  }
};

console.log(calculate(5, 3)); // 60 */

// бесконечный цикл
// x = 5 * 4 * 3 * 2 * 1 * 0 .......
// n = 3 * 3 * 3 * 3 * 3 * 3.......

// при -1  дойдет до 1 и оставится цикл
// x = 5 * 4 * 3
// n = 3, 2 , 1

// цикл - когда проходитесь по массиву, когда перебираете число от и  до
// рекурсии - когда нужно сделать уникальное прохождение по своей функции , но с другими данными. Максимально рекурсия может быть 10 000 раз. Это функция, которая вызывает сама себя.

/* let i = 0;

function hello() {
  i++;

  console.log("hello"); // hello hello hello hello
  if (i < 4) { // функцмя будет вызываться небольше 4-х раз, иначе будет вызываться бесконечно
    hello();
  }
}
hello();
 */

// Контекст - это данные которые сохраняет рекурсия, когда входиь в саму себя. (Это как отправили 5 детей в школу и помним кто в какую школу пошел)
/* 
const calculate = (x, n) => {
    if (n == 1) {
        return x;
    } else {
        let data = x * calculate(x -1, n - 1);
        console.log(n); // 2 3 эта строка не начнет работать пока не начнет работать верхнее строка (стек)
        return data
    }
}

console.log(calculate(5, 3));  */

// Первый этап: передаются данные 5, 3 и это конекст, он запоминает контекст и далее останавливается на 359 строке .... ждет и НЕ переходит на 360
// Второй этап: 4, 2 (конекст), останавливается на 359 стр , .... ждет и НЕ проходит на 360 стр
// Третий этап: 3, 1 (конекст), запускаю стр 360, там где console.log(n).... ждет и заканчивает свою функцию на 357 стр, т.к у return x нет обратной функции
// Четвертый этап 4, 2 (конекст перед 3, 1  помнит есть 4, 2)(поднимается вверх) запускаю строку 360 там где console.log(n) и заканчивается СВОЮ ФУНКЦИЮ
// Пятый этап: 5, 3 (конекст)(поднимается вверх) -  запускает стр 360 там где console.log(n) и заканчивается СВОЮ ФУНКЦИЮ

// ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ В JS: map, filter, reduce

/* let data = [1, 2, 3];

for (let i = 0; i < data.length; i++) {
    console.log(data[i] + 1);
}
 

let data = [5, 7, 8];
 for (let i of data) {
  // of  показывает данные с массива
  console.log(i); // 5 7 8
}

for (let i of data) {
    // of  показывает данные с массива
    console.log(i + 1); // 6 8 9
  }

for (let i in data) {
  // of  показывает данные с массива и индексы
  console.log(i); // 5 7 8 0 1 2
} */

//Чтобы этого не писать

/* let data = [5, 7, 8];
let sum = 0;
for (let i of data) {
  sum += i; // или sum = sum + i;
}
console.log(sum); // 20

// МОЖНО использовать reduce
data.reduce(function (sum, val) {
  // передаем два значания сумма и просто значение
  return sum + val;
});
console.log(sum); // 20 */

// REDUCE используется, если из списка нужно вернуть одно значение, к примеру есть список и нуно вывести среднеарифметическое число

// Т.к это правило не попадает по addEventListener и onclic мы можем использовать стрелочную функцию
/* let data = [5, 7, 8];
let sum = data.reduce((suma, val) =>
  suma + val
);
console.log(sum); // 20 */

/* let data = [5, 7, 8];
let sum = data.reduce((suma, val) => {
  if (val == data[data.length]) { //  если val == среднему элементу списка
    return suma + val / data.length; // то добавляем val  и делим на длину строки
  } else {
    return suma + val;
  }
});

console.log(sum); // 20 */

/* let data = ["hello", "word", "!"];
let sum = data.reduce((suma, val) => suma + " " + val);
console.log(sum); // hello word !
// suma - проход, который добавляется до конца, т.е первый элемент  */

/* data.map(val => { // map пройдется по каждому элементу. Используею когда с каждым элементом нужно что-то сделать
    consolele.log(val)
}) */

/* let data = ["hello", "word", "!", "how", "are", "you"]; // найти элемент в котором первая буква H
/* let new_data = data.filter((val) => {
  // возвращает список элементов, которые найдет
  return val[0] == "h";
});
 

// или сокращенее
let new_data = data.filter((val) => val[0] == "h");
console.log(new_data);
 */

// Цепочка - это когда в объекте при вызове функции function(){ всегда возвращаем  return this; это даст возможность писать несколько методов одновременно
/* 
let data = {
  num: 1,
  up: function () {
    this.num++;
    return this;
  },
  down: function () {
    this.num++;
    return this;
  },
  show: function () {
    console.log(this.num);
    return this;
  },
};

data.up().up().down().show().up().up().show(); */

//https://www.youtube.com/watch?v=wU5GJv9lq-I
//#10. Bind, call, apply и значение this в Javascript (+ вопрос, который я завалил на интервью).

/*const auto = {
  brand: "Tesla",
  drive() {
    // console.log(this)
    return `Заведем наш ${this.brand}`;
  }
}
/* const autoDrive = auto.drive();
console.log(autoDrive) // Заведем наш Tesla */

/* const autoDrive = auto.drive;
console.log(autoDrive)  // ƒ drive() {
    // console.log(this)  return `Заведем наш ${this.brand}`;  } // получаем определение нашей функции, значит, что можем использовать наш метод drive() за пределами нашего авто  */

/* const auto = {
    brand: "Tesla",
    drive() {
        console.log(this) //  {brand: 'Tesla', drive: ƒ}
        return `Заведем наш ${this.brand}`;
    }
}
      
//auto.drive(); // значаение this равняется значению auto {brand: 'BMW', drive: ƒ}

// значаение this внутри какой то функции определяется тем где вызывается, а не тем где она была определена.

// bind - принудительно привязываем контекст с нашей функцией к нужному объекту, т.е можем менять значение this

const autoDrive = auto.drive.bind(auto); // говорим JS  создай новую функцию autoDrive и когда она будет вызываться значение this внутри нашей функции будет = тому., что я передаю внутри метода .bind, т.е (auto)
//const motorDrive = auto.drive.bind({ brand: "Корабль" }); */

/* const auto = {
  brand: "BMW",
  drive() {
    console.log(this)
    return `Заведем наш ${this.brand}`;
  }
}

const motorBike = {
  brand: "Suzuki"
} */

// const autoDrive = auto.drive.bind(auto);
// const motorDrive = auto.drive.bind(motorBike); // Заведем наш Suzuki
// const motorDrive = auto.drive.bind({brand: "Корабль"});  // Заведем наш Корабль

/* const header = document.querySelector('h2')
console.log(header);


const $ = document.querySelector.bind(document);
console.log($ === document.querySelector) // true
const header = $('h2')
console.log($);
 */

/* var animals = [
    { species: 'Лев', name: 'Король' },
    { species: 'Кит', name: 'Фэйл' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  } */

/*   function Product(name, price) {
    this.name = name;
    this.price = price;
  
    if (price < 0) {
      throw RangeError('Нельзя создать продукт ' +
                        this.name + ' с отрицательной ценой');
    }
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'еда';
  }
  
  Food.prototype = Object.create(Product.prototype);
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'игрушка';
  }
  
  Toy.prototype = Object.create(Product.prototype);
  
  var cheese = new Food('фета', 5);
  var fun = new Toy('робот', 40); */

/* var person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person.fullName.call(person1, "Oslo", "Norway"));
 */

const person = {
    firstName: 'Александр',
    lastName: 'Мальцев',
    age: 28,
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }