/* Кожне завдання виконується у вигляді чистої функції.
Функція повертає масив або інше значення, але не змінює його!
У консоль/html виводите результат виклику функції:
const pairs = getPairs(students);
console.log(pairs);

Перед виконанням цього домашнього завдання необхідно створити 3 масиви:
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів","Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];*/

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури  даних",
];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = [];

const pairsStudent = function separate() {
  const boy = [];
  const girl = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const nameStudent = student[student.length - 1]; // определение последней буквы
    // console.log(student, nameStudent);
    if (nameStudent !== "а") {
      boy.push(student);
    } else {
      girl.push(student);
    }
  }

  for (let i = 0; i < boy.length; i++) {
    pairs.push([boy[i], girl[i]]); // пары
  }
  return pairs;
};
console.log(pairs); // [] 0 : (2) ['Олександр', 'Олена'] 1: (2) ['Ігор', 'Іра'] 2: (2) ['Олексій', 'Світлана'] length: 3
console.log("1. Розділіть студентів на пари: ", pairsStudent(students)); // (3) [Array(2), Array(2), Array(2)] 0: (2) ['Олександр', 'Олена'] 1: (2) ['Ігор', 'Іра'] 2:  (2) ['Олексій', 'Світлана'] length: 3[[Prototype]]: Array(0)

//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const studentThemes = [];
const projectGroup = function addThemes() {
  for (let i = 0; i < themes.length; i++) {
    //const theme = themes[i];
    // console.log(theme);
    studentThemes.push([pairs[i].join(" i "), themes[i]]); // пары + тема
  }
  return studentThemes;
};
console.log("2. Теми проєктів, над якими студенти будуть працювати", projectGroup(studentThemes));

//3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
studentEvaluate = [];
const studentGrade = function evaluatWork() {
  // console.log(students);
  for (let i = 0; i < marks.length; i++) {
    studentEvaluate.push([students[i], marks[i]]);
  }
  return studentEvaluate;
};
console.log("3. Оцінка студенту", studentGrade(studentEvaluate));

/*4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */

pairsAssessment = [];
const pairsGrade = function evaluatPair(){
  randomAssessment = (Math.floor(Math.random() * 5) + 1);
  for (let i = 0; i < studentThemes.length; i++) {
    pairsAssessment.push([studentThemes[i].join(", "), (Math.floor(Math.random() * 5) + 1)]);
  }
  return pairsAssessment;
};
console.log("4. Випадкову оцінку(від 1 до 5) за проєкт кожній парі", pairsGrade(pairsAssessment));


// перебрать массив студентов через фор ич
//создать функцию проверки мальчик или девочка и создать массив

//const allowerBoys = ["Олександр", "Олексій"]

// входит ли имя мальчика в массив allowerBoys
// allowerBoys.includes{students(1)}

// создать очередь для пары М и Д

// можно вырезать всех М и вставить в новый массив

// проверить не меньше ли количество тем, чем пар и назнать паре тему рамдомно или последовательно




/* числа.forEach(function(число) {
    console.log(число);
});
 */
/* for (let i = 0; i < students.length; i++) {
    push(students[а] = students i])
}
 */

//const studentsGirl

/* const items = ['item1', 'item2', 'item3']
const copy = []

// до
for (let i = 0; i < items.length; i++) {
  copy.push(items[i])
}

// после
items.forEach(function(item){
  copy.push(item) 
})

console.log(copy); */


/* for (i) {
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