/* /* let Daria = {
    name: "Daria",
    age: 25,
    walk: function() {
        console.log(`${this.name} is walking...`) // Daria is walking...
    },
    eat: function() {
        console.log(`${this.name} who is ${this.age} is eating`); 
    }    
};

};

let Alex = {
    name: "Alex",
    age: 25,
    walk: function() {
        console.log(`${this.name} is walking...`) // Alex is walking...
    },
    eat: function() {
        console.log(`${this.name} who is ${this.age} is eating`); 
    }    
};

let Sveta = {
    name: "Sveta",
    age: 21,
    walk: function() {
        console.log(`${this.name} is walking slowling...`) // Sveta is walking slowling...
    },
    eat: function() {
        console.log(`${this.name} who is ${this.age} is eating`); 
    }    
};

Daria.walk();
Alex.walk();
Sveta.walk(); */

// class сокращает функцию не дублируя одни и те же параметры

/* class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} is walking slowling...`); // Daria is walking slowling...  Alex is walking slowling...  Sveta is walking slowling...  
        }
    
    eat() {
        console.log(`${this.name} who is ${this.age} is eating`); // lex Shevchenko who is 50 is eating
    }    
}

let Daria = new Person("Daria", 25);
let Alex = new Person("Alex", 25);
let Alex_2 = new Person("Alex Shevchenko", 50);
let Sveta = new Person("Sveta", 21);

Daria.walk();
Alex.walk();
Sveta.walk(); 

Alex_2.eat(); */

/* class Animal {
    constructor(kind){
        this.kind = kind;
    }
    eat(){
        console.log(`${this.kind} is eating...`);
    }
    run(){
        console.log(`${this.kind} is runing...`);
    }
    breath(){
        console.log(`${this.kind} is braething...`);
    }
    attention() {
        console.log(`${this.kind} is in attention situation...`); // Bird is in attention situation...
    }
}

class Cat extends Animal {
        constructor(kind){
        super(kind);
    }

    cat_meow(){
        console.log(`${this.kind} is meowing...`);
    }
}

class Bird extends Animal {
        constructor(kind){
        super(kind);
    }

    breath(){
        console.log(`${this.kind} is breathing...`)
    }
}

class Dog extends Animal {
        constructor(kind){
        super(kind);
    }

    bark(){
        console.log(`${this.kind} is barking...`);
    }
}

bird = new Bird("Bird");
bird.attention(); // вызвали здесь и результат на 83 строке */

// Класс это  возможность сгруппирировать функции и расширить их. Также КЛАССЫ это возможность проще писать объекты

/*function dog_bark(){
    console.log("Dog is barking...");
}
function dog_eat(){
    console.log("Dog is eating...");
}
function dog_run(){
    console.log("Dog is runing...");
}
function dog_breath(){
    console.log("Dog is breathing...");
}

function cat_meow(){
    console.log("Cat is meowing...");
}
function cat_eat(){
    console.log("Cat is eating...");
}
function cat_run(){
    console.log("Cat is runing...");
}
function cat_breath(){
    console.log("Cat is breathing...");
}


function bird_fly(){
    console.log("Bird is flying...");
}
function bird_eat(){
    console.log("Bird is eating...");
}
function bird_run(){
    console.log("Bird is runing...");
}
function bird_breath(){
    console.log("Bird is breathing...");
} */

/* class Person {

}
Person() 


function name(){

}
name() */

// Функция name() и класс Person()  вызываются одинаково, но классы вызываются с большой буквы, также как и Date() Object() Number(), чтобы вызывать объект new Number() С маленькой буквы это функция, список, метод

/* class Person {
    name = "Alex"
    age = 25;
}
let person = new Person();
console.log(person); // Person {name: 'Alex', age: 25}

let person1 = new Person();
let person2 = new Person();
console.log(person1.name); // Alex
console.log(person2.name); // Alex
console.log(person1.name); // Alex
console.log(person2.name); // Alex */

// когда выводим класс, нам всегда нужно писать new !!!! , т.к всегда создается новый объект, этим самым увеличивается память, но помогает сделать так чтобы эти элементы между собой не взаимодействовали и буждут отдельно

// классах не НИКОГДА не пишем слово function

/* class Person {
    name = "Alex"
    age = 25;

    constructor() {
        console.log("constructor working");// constructor working при вызове создании переменной с новым классом
    }
    abagagalamaga(){ // магический метод, который запускается когда пишем new Aaaaa
        console.log("abagagalamaga working"); // abagagalamaga working при вызове класса на 209 стр
    }
}
let person = new Person(); // функция сразу работает когда пишем Создать новый элемент new Person()
//person.constructor(); // при вцызове функции будет ошибка. constructor работает тогда когда создаем  new Person(), () обозначают параметры которые принимаем в этом конструкторе
//person.abagagalamaga();
//let person1 = new Person();
 */

/* class Person {
    name = "Alex"
    age = 25;

    constructor(name) { //(name) обозначают параметры которые принимаем в этом конструкторе
        console.log(name); // hello
    }
    abagagalamaga(data){ 
        console.log(data); // abagagalamaga working
    }
}
let person = new Person("hello"); // Person автоматически передает значение параметра
person.abagagalamaga("abagagalamaga working") // передача данных  */

//Функции которые есть в классе называют методом function constructor(), function abagagalamaga()
/* class Person {

    constructor(name, age) { //(name) обозначают параметры которые принимаем в этом конструкторе
        console.log(name, age); // Alex 25
    }
    abagagalamaga(data){ 
        console.log(data); 
    }
}
let person = new Person("Alex", 25); // Person автоматически передает значение параметра
person.abagagalamaga("abagagalamaga working")  */

/* class Person {

    constructor(firstname, age) { 
        this.name = firstname; // обязательно пишится this. т.к this. и есть наш Person, а namе это свойство нашего Person
        console.log(name); // Alex
    }
}
let person = new Person("Alex", 25); // 
console.log(person.name); // Alex */

/* class Person {

    constructor(firstname, age) { 
        this.name = firstname; 
        console.log(name); // Alex 
    }

    hello() {
        console.log(this.name); // Dasha 
    }
}
let person = new Person("Dasha", 25); // изменяя значение на Dasha, автоматически меняется hello везде
person.hello() // Dasha

person.hello() // Dasha
person.hello() // Dasha
person.hello() // Dasha
person.hello() // Dasha
 */

/* class Person {

    constructor(firstname, age) { 
        this.name = firstname; 
        console.log(name); // Alex 
    }

    hello() {
        console.log(name); // Dasha . Если написать только console.log(name) то везде в person.hello() останется Alex 
    }
}
let person = new Person("Dasha", 25); 
person.hello() // Alex 

person.hello() // Alex 
person.hello() // Alex 
person.hello() // Alex 
person.hello() // Alex   */

/* class Person {

    constructor(firstname, age) { 
        this.name = firstname;  // обычно пишут this.name = name, чтобы не путтаться в разных названияч переменных
    }

    hello(name) { // (name) - локальная переменная только в этом методе, тогда значение "Daria" нужно вызвать в 306
        console.log(this.name + " " + name);  // this.name - глобальный, а name - ожидается что есть переменная в hellо стр 306 или параметр кторый передан в стр 300
    }
}
let person = new Person("Alex", 25); 

person.hello("Daria") // Alex Daria  */

//аналогичный вариант при п

/* class Person {

    constructor(name, age) { 
        this.name = name; 
        this.age = age; 
    }

    hello() {
        console.log(this.name); // Alex 
        console.log(this.age) // 25
    }
}
let person = new Person("Alex", 25); 
console.log(person.name) // Alex 
person.hello(); */

// НАСЛЕДОВАНИЕ ООП

/* class Person {
    constructor(name, age) { 
        this.name = name; 
        this.age = age; 
    }

    let person = new Person("Alex", 25); 

    class Adult {
        eat() {
            console.log("This person can eat");
        }

        sleep() {
            console.log("This person can sleep");
        }

        cry() {
            console.log("This person can cry");
        }
        run() {
            console.log("This person can run");
        }
    }

    
    class Child {
        eat() {
            console.log("This person can eat");
        }

        sleep() {
            console.log("This person can sleep");
        }

        cry() {
            console.log("This person can cry");
        }

        run() {
            console.log("This person can run");
        }
    }
}

console.log(person.name);
person.hello(); */

// Чтобы все eat() sleep() cry() run() не дублировать в классах можно написать extends Person т.е расширить от Person те функции которые одиннаково повторяются

/* class Person {
    eat() {
        console.log("This person can eat");
    }

    sleep() {
        console.log("This person can sleep");
    }

    cry() {
        console.log("This person can cry"); //This person can cry
    }
}

class Adult extends Person {
    run() {
        console.log("This person can run"); // This person can run
    }
}

class Child extends Person {
    craw() {
        console.log("This person can craw");
    }
}

let adult = new Adult();
adult.run();
adult.cry(); */

/* class Person {
    eat() {
        console.log("This person can eat");
    }

    sleep() {
        console.log("This person can sleep");
    }

    cry() {
        console.log("This person can cry"); 
    }
}

class Adult extends Person {
    constructor(name){ // если пишем constructor, то обязательно на первой строке пишем функцию super(); Person как родительский элемент может быть только сверху иначе конструктор и super() не будет работать
        super(); // если не писать super() то сразу возвникнет ошибка  Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.name = name;
    }

    run() {
        console.log(this.name + " " + "can run");  //Alex can run
        }
}

class Child extends Person {
    constructor(name){
        super();
        this.name = name;
    }

    crawl() {
        console.log(this.name + "can crawl"); // This person can cry
    }
}

let adult = new Adult("Alex");
adult.run();
adult.cry();  */

/* class Person {
    constructor(name, age, gender){ 
        this.name = name; // пишем здесь чтобы не копировать в 476-478 и 489-491, а пишем         super(name, age, gender); 
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(this.name + " " + " can eat");
    }

    sleep() {
        console.log(this.name + " " + "can sleep");
    }

    cry() {
        console.log(this.name + " " + "can cry"); 
    }
}
//если в родительком элементе пишем this.name, то в конструкторе
class Adult extends Person {
    constructor(name, age, gender){ 
        super(name, age, gender); 
       // this.name = name;
      //  this.age = age;
       // this.gender = gender;
    }

    run() {
        console.log(this.name + " " + "can run");  
        }
}

class Child extends Person {
    constructor(name, age, gender){
        super(name, age, gender);
       // this.name = name;
        //this.age = age;
        // this.gender = gender;
    }

    crawl() {
        console.log(this.name + "can crawl"); 
    }
}

let adult = new Adult("Ivan", 25, "sale"); // "Ivan", 25, "sale" передаются в значения стр 474, потом они передаются в super(name, age, gender); стр 475 и дальше передаются в родительские элементы constructor(name, age, gender) стр 454 это и есть наследование
adult.run();
adult.cry();  */

/* function person(name, age){
    this.name = name;
    this.age = age;
/*     this.walk = function(){
        console.log(`${this.name} is walking...`);
    };
    this.eat = function(){
        console.log(`${this.name} who is ${this.age} is eating`); // Daria who is 18 is eating   Alex who is 23 is eating
    } 
};

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ
// чтобы функции недозагружались повторно есть prototype
person.prototype.eat = function() {
    console.log(`${this.name} who is ${this.age} is eating`);
}

person.prototype.walk = function() {
    console.log(`${this.name} who is ${this.age} iswalking...`);
} // результат true т.к элементы похожи между собой

let Daria = new person("Daria", 18);
let Alex = new person("Alex", 23);

Daria.eat();
Alex.eat();

console.log(Daria.eat == Alex.eat); // false - когда пишем new person то создается новая функция с отдельными элементами при стр 507-512 */

/* class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  set change_my_name(val) {
    if (val.length > 2) this.name = val;
  }

get name_show() { //и в console.log(person.name_show) - show без ()
    // c get  это свойство, без - функция
   // if(new Date()){
    return "Name of this person is" + this.name;
    }
  } 

/*  name_show(val) { // без - функция и в скобках нужно передать значение и в console.log(person.name_show()) - show с ()
    return "Name of this person is" + this.name;
  } 
}
 
let person = new Person("Alex", 25, "sale")
console.log(person.name_show()); // Alex // Name of this person isAlex
//person.change_my_name("Daria"); // из функции поменять свойства так person.change_my_name = "Daria"; то нужно написать set  перед функцией
person.change_my_name = "Daria";
console.log(person.name_show());  */// person.name - Daria // person.name_show - Name of this person isDaria

// set - изменить данные в скобках (один атребут) в консоле вызывается с ()
// get - взять данные (ничего не пишем) в консоле вызывается без ()
