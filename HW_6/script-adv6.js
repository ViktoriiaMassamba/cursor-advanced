/* У цьому домашньому завданні, ви будете працювати з масивом об'єктів.
Для початку необхідно створити наступний масив (ви можете його просто
скопіювати): */


const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
        }
    }, 
{
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
        }
    }, 
{
    name: "Anton",
    course: 2,
        subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
        }
    }];

/* 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

function getSubjects(students) {
    const subjKey = Object.keys(students.subjects)
    const newSubj = subjKey.map(subjKey => {
        return subjKey.charAt(0).toUpperCase() + subjKey.slice(1).replace("_", " ");});
return newSubj;
    }
    console.log("1. Список предметів для студента",students[0].name, (getSubjects(students[0])))
 

/* 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА
СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) */

function getAverageMark(students) {
    const subjVal = Object.values(students.subjects).flat(); // Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
    const averageMark = subjVal.reduce((sum, item) => {
        return sum + item
    }, 0)
   return (averageMark / subjVal.length).toFixed(2);
} 
console.log("2. Cередня оцінка по усім предметам для переданого студента", students[2].name, (getAverageMark(students[2])));


/*3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка. */

function getStudentInfo(students) {
    const studentInfo = 
    {  course: students.course,
        name: students.name,
        averageMark: getAverageMark(students)
}
return studentInfo;
}

console.log("3. Інформація по студенту", getStudentInfo(students[0]));

/*4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку. */

function getStudentsNames(students) {
const nameStudents = students.map(students => students.name)
return nameStudents.sort()
}
console.log("4. Імена студентів у алфавітному порядку", getStudentsNames(students));

/*5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.*/
/* function getBestStudent(students) {
    let bestStudents = students[0];

}

console.log("5. Кращий студент", getBestStudent(students))  */


function getBestStudent(students) { 
let counter = 0;
let bestStudents = [];
for(let i = 0; i < students.length; i++) {
    if(counter < getAverageMark(students[i])) {
       counter = getAverageMark(students[i])
    }
}
students.forEach((students) => {
    if(counter === getAverageMark(students)){
        bestStudents.push(students.name)
    }
})
    return bestStudents
}

console.log("5. Кращий студент", getBestStudent(students)) 

/* let number = 23597024;
console.log("1. Будь-яке число -", number);
function getMaxDigit(n) {
  let counter = 0;
  n = n + "";
  for (let i = 0; i < n.length; i++) {
    if (n[i] > counter) {
      counter = n[i];
    }
  }
  return counter;
} */

/*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень. */

/* function calculateWordLetters(text) {
    const WordLetters = {};
    const watchordLetters = {};
    text.forEach(function(item, index){
        wordLetters[item] = index;
        console.log(watchordLetters);
    })


}
console.log("6. Ключі це букви у слові, а значення – кількість їх повторень", calculateWordLetters(text)); */
/* 
const text = [t, e, s, t];
const watchordLetters = {};
text.forEach(function(item, index){
    wordLetters[item] = index;
});
console.log(watchordLetters); */

function calculateWordLetters(text) {
    const calculate = {}; // объект
    for (let i = 0; i < text.length; i++) {
        const letter = text[i]; 
        if (calculate.hasOwnProperty(letter)) {
            calculate[letter]++;
        } else {
            calculate[letter] = 1;
        }
    }
    return calculate;
}

console.log("6. Ключі це букви у слові, а значення – кількість їх повторень",calculateWordLetters("тест")); 