// objects

// ключевая структура
// ключ: присвоение ключа єто значение, через запятую присваивается несколько ключей
// если ключ имеет значение не функцию, то єто будут свойства объекта
// если в значении функция, то это будет метод объекта
// в методах объекта есть this, который работает с нашим объктом какое бы не имел названиие
// методы объекта можем вызывать, как и функцию user.getFullName();
// функции которые объявлены в объекте, которые призначены для ключа объекта, имееют особенность this
// в this лежит вся информация об объекте котррый мы создали, независимо от имени. К примеру  getFullName(получить полное имя) которое состоит из firstName и lastName объединеные через пробел. Соответствено в этой функции берем this в шаблоную строку return this.firstName + ' ' + this.LastName, чтобі обратиться к ним firstName и lastName используем this

/* const myFirstObj = {}
console.log(myFirstObj, typeof myFirstObj); // {} 'object' */

/* const myFirstObj = {
    "my first: key": "my first value",
    name: "Josh", - свойство объекта
    first: "Smit",
    lastName: "Neo"
    1: 234
    // строка или число: 
}
console.log(myFirstObj) // {my first: key: 'my first value', name: 'Josh', first: 'Smit', lastName: 'Neo'}
 */

/* const array = [12, 45, -5];
console.log(array, typeof array); // (3) [12, 45, -5] 'object'

// associated array - не четкая нумарация элементов, которую не контролируем
// Определенный ключ ассоциируется с определенным значанием

const myFirstObj = {
    0: 23,
    2: 45,
    10: -5
}
console.log(myFirstObj) // {0: 23, 2: 45, 10: -5}0: 232: 4510: -5[[Prototype]]: Object */

/* const user = {
    firstName: "Josh",
    lastName: "Smit",
    age:18,
   /*  address: {
        street: "Barek",
        house: "2B"
    }
} 

// . [] 
console.log(user.firstName, user.lastName, user["age"]); // Josh Smit 18

const address = user.address
console.log(address.street, address.house); // Barek 2B

// или можно  вызвать так

console.log(user.address.street, 
            user.address.house,
            user["address"].street,
            user["address"]["house"],// Barek 2B
            user["my.first key"] //  undefined
            )

console.log(user['unfefinedKey']); // undefined

console.log(user.address['unfefinedKey']); // при закомментированых строках 36-39 будет ошибка script-adv6-test.js:46 Uncaught TypeError: Cannot read properties of undefined (reading 'street')

// неизвестый ключ в объкте дает нам undefined, но не ошибку */

//Object hasOwnProperty - встроенный метод. Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

// Пример:  проверяем найден ключ или нет

/* let user = {
    firstName: "Josh",
    lastName: "Smit",
    age:18, 
    address: {
        street: "Barek",
        house: {
        number: "2",
        district: "B"
        }
    }
} 

/* if(user.hasOwnProperty("address") 
&& user.address.hasOwnProperty("house")
&& user.address.hasOwnProperty("number")) {
console.log(
    user.address.house.number
    )
} else {
    console.log('Key is not found'); // Key is not found
}

console.log(user.address) // {street: 'Barek', house: '2B'} 

// эту всю конструкцию можно заменить на 

console.log(user?.address?.house?.number); // 2 // если оставить только let user - в консоле будет undefined 

console.log(user?.['address']?.house?.number); // 2 - ['address'] - это полезно когда работаем с динамическими ключами */

/*let user = {
    firstName: "Josh",
    lastName: "Smit",
    age: 18, 
    address: {
        street: "Barek",
        house: {
        number: "2",
        district: "B"
        }
    }    
}
    }, // запятая обязательно, иначе покажет ошибку
    getFullName: function() {
         return `${user.firstName} ${user.lastName}`
    }
}  

console.log(user.getFullName()); // Josh Smit - методы объектов*/

// незнаем конкретного имени объекта

/* function createUser(firstName, lastName) {
  // функция ничего не примает, а только возвращает
  return {
    // в {} литерал объекта
    firstName: firstName,
    lastName: lastName,
    age: Math.ceil(10 + 10 * Math.random()),
  };
}

const user1 = createUser("Anna", "Smit");
const user2 = createUser("Josh", "Smit");

console.log(user1, user2); // {firstName: 'Anna', lastName: 'Smit', age: 15} 
                            // irstName: 'Josh', lastName: 'Smit', age: 16} */

/** =================== THIS  ====================== */

/* function createUser(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: Math.ceil(10 + 10 * Math.random()),
        getFullName: function() { // объект имеет определенный метод getFullName. Создовая этот объект мы незнаем куда будет вызвана эта ункция, чему присвоена. Нужно обратиться к ключам firstName, lastName:
            //console.log('My this:', this); // this имеет все данные нашего объекта
            return `${this.firstName} ${this.lastName}`
        }, 
        getAge: function () {
            return this.age;
        },
        getInfo: function () {
            return `${this.getFullName()} ${this.getAge()}`
        }                           
    }
}
//const user1 = createUser("Anna", "Smit");
const user2 = createUser("Josh", "SmitAAAA");
                            
console.log(createUser("Anna", "Smit") .getInfo(), user2.getFullName()); // {Anna Smit 13 Josh SmitAAAA */

/* let user = { 
    firstName: "Josh",
    lastName: "Smit",
    age: 18, 
    getFullName: function() {
        return `${user.firstName} ${user.lastName}`
   },
   age: 100
} 

// user['age'] = 25;
user.hasAccess = true; // добавили ключ
delete user.getFullName // удаление метода getFullName, при удалении метода не ставим (), т.е не вызываемж

console.log(user); // firstName: 'Josh', lastName: 'Smit', age: 100, getFullName: ƒ}age: 100firstName: "Josh"getFullName: ƒ (), hasAccess: true, lastName: "Smit"[[Prototype]]: Object - выводится последнее значение age: 100,
  */

/* const user = {                             // let a  = 10;
    firstName: "Josh",
    lastName: "Smit",
    age: 18, 
    getFullName: function() {
        return firstName + ' ' + lastName
   },
}

const user2 = user;                        // const b = a;
user.age = 25;                             // a = 25
console.log(user === user2, user2.age);       //console.log(b) // 10
                   //  true 25 */

/* const arr = [1, 2, 3];
const user = {
  // let a  = 10;
  firstName: "Josh",
  lastName: "Smit",
  age: 18,
  getFullName: function () {
    return firstName + " " + lastName;
  },
};

const user2 = user; // const b = a;
user.age = 25; // a = 25
//console.log(typeof arr === typeof user);      // true
//console.log(arr.map(), user.map()); // Uncaught TypeError: undefined is not a function at Array.map (<anonymous>)

// Array.isArray(arr) - определяет является массивом или нет?

if (Array.isArray(arr)) {
    arr.map()
} else {
    arr.hasOwnProperty()
}

console.log(
    Array.isArray(arr), // true - массив
    Array.isArray(user) // false - не массив
); */

/* const arr = [1, 2, 3];
const user = {
  // let a  = 10;
  firstName: "Josh",
  lastName: "Smit",
  age: 18,
  getFullName: function () {
    return firstName + " " + lastName;
  },
}

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3 - цикл для массива 
} 

for(let key in user) { // key - как i, in - в каком объекте будем перебирать, user - имя ообъекта где будем перебирать. Итераций будет столько сколько свойств и методов
   // console.log(`${key}: `,  user.key) // firstName:  undefined     lastName:  undefined     age:  undefined     getFullName:  undefined
    console.log(`${key}: `,  user[key]) // firstName:  Josh lastName:  Smit   age:  18    getFullName:  ƒ () {return firstName + " " + lastName;
} */

/* const arr = [1, 2, 3];
const user = {
  // let a  = 10;
  firstName: "Josh",
  lastName: "Smit",
  age: 18,
  getFullName: function () {
    return firstName + " " + lastName;
  },
}

console.log((Object.keys(user))); // (4) ['firstName', 'lastName', 'age', 'getFullName'] - массив всех ключей 
console.log((Object.values(user))); // (4) ['Josh', 'Smit', 18, ƒ] - массив всех значений */

/* const data = {}
data.firstName = 'dsadsad'
data.lastName = 'vjhvjhv'

console.log(Object.keys(data).length > 2) // (2) ['firstName', 'lastName'] - получили все наявные ключи и к примеру их должно быть 3, а мы получили только два  */

/* const arr = [1, 2, 3];
const user = {
  // let a  = 10;
  firstName: "Josh",
  lastName: "Smit",
}
// преобразование объекта в такой массив 
/* [
    ["age", 18],
    ["firstName", "Josh"]
    ["lastName", "Smit"]
] 

console.log(Object.entries(user).forEach((item, index) => { // (2) [Array(2), Array(2)]
console.log(item[0], item[1], index) // script-adv6-test.js:285 firstName Josh 0 lastName Smit 1  undefined
})) */

// приобразование из массива в объект

/* const arr = [1, 2, 3]

const objectFromArray = arr.reduce(function(acc, curr, index) {
    acc[curr] = index;
    return acc
}, {})

console.log(objectFromArray); // 1: 0, 2: 1, 3: 2} - создали объект где ключи объекта являются значния массива, а индекс является значение ключей объекта */

/* const arr = [1, 2, 3];
const aobj = {};
arr.forEach(function (item, index) {
  aobj[item] = index;
});
console.log(aobj); // {1: 0, 2: 1, 3: 2} */

/* const aaa
for(let key in user) {
    console.log(`${key}: `,  user[key])
    aaa.push([key, user[key]])
} */

// Деструктуризация - способ получить переменную, ключа с нашего массива и ее использовать дальше

// const user = [] // в Деструктуризации все значения без [] или { } будет выдавать ошибку

/* const arr = [103, 22, -3, 5];

const user = { // в user  задаем ключ age с значанием 18,
    age: 18,
    firstName: "Josh",
    lastName: "Smit",
  }
 */
/* const [a, b, c, d]  = arr // a = 103, b = 22, c = -3, d = 5
console.log(a, b, c, d) // 103 22 -3 5

const [, , , d]  = arr // 
console.log( d) //  5 */

/* const {a, b, c, d}  = arr
console.log(a, b, c, d) // undefined undefined undefined undefined т.к ищет в объекте как ключи и будет выдавать ошибку и не будет работать деструктуризация по массиву */

/* const { age } = user; // с user достаем ключ age в котором будет лежать значение 18
console.log(age) // 18
console.log(age + 2) // 20 */

/* const { age, firstName, lastName, key } = user;
console.log(age, firstName, lastName, key); // 18 'Josh' 'Smit' undefined */

/* const arr = [103, 22, -3, 5];

const user = {
    age: 18, 
    firstName: "Josh",
    lastName: "Smit",
    address: {
        house: {
            number: "2",
            district: "B"
        }
    }    
}

const [a, b, c, d ] = arr
const { address: {  // деструктуризация в деструктуризации
    house: {
        number, district
    }
} } = user;

console.log(number, district); // 2 B
console.log(number, district, address); // при указании address -  Uncaught ReferenceError: address is not defined  at будет ошибка, т.к  address: при повторной деструктуризации уже не доступен. Подсвечивается сетлым цветом  */

/* const number = user.address.house.number
const district = user.address.house.district
const district = user.address.house.district
const district = user.address.house.district
const district = user.address.house.district
const district = user.address.house.district */

// переменная  number, district должна иметь полное совпадение с ключем

/* const arr = [103, 22, -3, 5];

const user = {
    age: 18, 
    firstName: "Josh",
    lastName: "Smit",
    address: {
        house: {
            number: 2,
            district: "B"
        }
    }    
}

const [a, b, c, d ] = arr
const number = 1000;
const { address: {  
    house: {
        number: myUniceKey, district // после : можем указать новую переменную myUniceKey, у нас уже не будет переменной number, мы ее переназвали 
    }
} } = user;

console.log(district, number, myUniceKey); // B 1000 2 */

// деструктуризация item => [key, value]
/*const arr = [103, 22, -3, 5];

const user = {
    age: 18, 
    firstName: "Josh",
    lastName: "Smit",
    address: {
        house: {
            number: 2,
            district: "B"
        }
    }    
}
const [a, b, c, d ] = arr
const number = 1000;
const { address: {  
    house: {
        number: myUniceKey, district 
    }
} } = user;
console.log(Object.entries(user).forEach(([key, value], index) => {
    console.log(key, value, index) 
}))
console.log(district, number, myUniceKey) 
/* age 18 0
firstName Josh 1
lastName Smit 2
address {house: {…}} 3
 undefined
 B 1000 2 */

// ********** REST OPERATOR   ******************

/* const arr = [103, 22, -3, 5];

const user = {
    age: 18, 
    firstName: "Josh",
    lastName: "Smit",
    address: {
        house: {
            number: 2,
            district: "B"
        }
    }    
}
const [a, b, c, d ] = arr
const number = 1000;
const { address: {  
    house: {
        number: myUniceKey, district 
    }
}, ...data } = user; // ... data в эту переменную применяется REST OPERATOR которую соберутся все ключи которые не деструктуризовали
console.log(user, data);

/* Исходные данные 
{age: 18, firstName: 'Josh', lastName: 'Smit', address: {…}}
address : {house: {…}} // так и остался 
age: 18
firstName: "Josh"
lastName: "Smit"
[[Prototype]]: Object
 
Здесь остались все те ключи которые не деструктуризовали 
{age: 18, firstName: 'Josh', lastName: 'Smit'}
age: 18
firstName: "Josh"
lastName: "Smit"
[[Prototype]]: Object */

// ********** spread OPERATOR   ******************
/* const arr = [103, 22, -3, 5];

const user = {
  age: 18,
  firstName: "Josh",
  lastName: "Smit",
  address: {
    house: {
      number: 2,
      district: "B",
    },
  },
};

/* const copyUser = user;
console.log(copyUser === user); // true 

const copyUser = {
  ...user, // spread OPERATOR
};

const copyArr = [...arr];
arr[0] = 999;

user.age = 25;

console.log(copyUser === user, copyUser); // false {age: 18, firstName: 'Josh', lastName: 'Smit', address: {…}}

// получили разные ссылки на объекты, имеем те же самые свойства
// при изменении user.age = 25 у нас изменения не происходят, age: 18, т.к const copyUser = {    ...user   сделали раньше до его замены

console.log(copyArr === arr, copyArr); // false (4) [103, 22, -3, 5]
console.log(copyArr === arr, copyArr, arr); // при изменении arr[0] = 999;, также arr изменился, а copyArr остался бе з изменений */

/* const user = {
    age: 18,
    firstName: "Josh",
    lastName: "Smit",
    address: {
      house: {
        number: 2,
        district: "B",
      }
    }
  }
  
  
  const copyUser = {
    ...user, /* spread OPERATOR not deep copy - не глубокое копирование, т.е проходит по первому урвню, также и в массиве 
    const arr = [[2, 23, 4]] arr[0] [0]
    const copyArr = [...arr] 
  };

  user.age = 25;
  user.address.house.number = 100; // в консоле намбер стал 100 и в начальном коде user и в copyUser
  console.log(copyUser === user, copyUser, user); // age не изменился 
/*   {age: 18, firstName: 'Josh', lastName: 'Smit', address: {…}} 
     {age: 25, firstName: 'Josh', lastName: 'Smit', address: {…}} 

 */

//Глубокое копирование
// lodash
//JSON - создаем структуру объекта, передаем строку и из нее делает объект    

/* const copyUser = {
    ...user
}
const copyUser2 = JSON.parse(JSON.stringify(user)) */


// https://www.youtube.com/watch?v=NsLJ_GBU-A4
//Топ-10 фишек программирование на JavaScript ОБЪЕКТЫ, все что ты должен знать!

//Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.

/* const person = Object.assign({
    name: 'Alex',
    id: 10
})

const newPerson = Object.assign({}, person, {
    email: 'wdb@gmail.com'
})
console.log(person); // {name: 'Alex', id: 10} 

Object.assign(person, {
    email:'newwebDevblog@gmail.com'
})
console.log(person); // {name: 'Alex', id: 10, email: 'newwebDevblog@gmail.com'}
console.log(newPerson); // {name: 'Alex', id: 10, email: 'wdb@gmail.com'} */


/* const person = {
    name: 'Alex',
    id: 10
}

const newPerson ={
    ...person,
    address: 'USA, New York'
}
console.log(newPerson); // {name: 'Alex', id: 10, address: 'USA, New York'} */


/* const person = {
    name: 'Alex',
    id: 10,
    age: 24,
    lastName: 'Oleg'
};
console.log(Object.keys(person)); //(4) ['name', 'id', 'age', 'lastName']

console.log(Object.values(person)); // (4) ['Alex', 10, 24, 'Oleg'] 

console.log(Object.entries(person)); // (4) [Array(2), Array(2), Array(2), Array(2)]  0: (2) ['name', 'Alex']  1: (2) ['id', 10]  2: (2) ['age', 24]  3: (2) ['lastName', 'Oleg'] length : 4 [[Prototype]]: Array(0) */

// Метод Object.freeze() замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости. В сущности, объект становится эффективно неизменным. Метод возвращает замороженный объект.

/* Object.freeze(person);
person.name = 'Ivan';
console.log(person.name); //Alex  */

//Метод Object.seal() запечатывает объект, предотвращая добавление новых свойств к объекту и делая все существующие свойства не настраиваемыми. Значения представленных свойств всё ещё могут изменяться, поскольку они остаются записываемыми.

/* Object.seal(person);
person.name = 'Ivan';
console.log(person.name); //Ivan  */
/* 
const newPrsn = Object.assign(person)
const isEqual = Object.is(person, newPrsn)
console.log(isEqual); // true */

/* 
const keys = Object.values(person);
for(const key of keys) {
    console.log(key); // Alex 10 24 Oleg
}

const entries = Object.entries(person);
for(const [key, value] of entries) {
    console.log(`${key} : ${value}`); // name : Alex  id : 10  age : 24   lastName : Oleg
}
 */


/* getSubjects() {
    return {
        subjects {

        }
    };
} */
/* const keys = Object.values(students);
for(const key of keys) {
    console.log(key);
}
const {subjects} = students;
console.log((subjects)); */

/* const {
    course: {subjects},
} = students;
console.log(subjects); */

/*  const {name, subjects} = students;
console.log( subjects); // undefined */

/* const [, name] = students;
console.log(name); // {name: 'Victor', course: 4, subjects: {…}} */

/* const [, {name}, {subjects}] = students
console.log(name, subjects);  // Victor {statistics: Array(10), english: Array(2), cosmology: Array(4)  */

/* const subj = Object.keys(students.subjects);
console.log(subj);  */

/* const [{name, subjects}] = students
console.log(name, subjects); // Tanya {math: Array(4), algorithms: Array(6), data_science: Array(4)} */


