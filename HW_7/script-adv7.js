/*1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this*/


    function getMyTaxes (salary){
        return salary * this.tax;
    }

let salary = 5000;
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };  

console.log("1. Cкільки податків ви заплатите як IT-спеціаліст в якійсь з країн",  ((getMyTaxes.call(ukraine, salary)* 100) /100).toFixed(2) + " " + "грн." + "," + " в Латвіі - ", ((getMyTaxes.call(latvia, salary)* 100) /100).toFixed(2) + " " + "грн." + "," + " в Літві - ", ((getMyTaxes.call(litva, salary)* 100) /100).toFixed(2) + " " + "грн.") 

/* 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платять IT-спеціалісти у кожній країні. (tax *
middleSalary). Функція повинна викликатись через call та працювати з даними
через this*/

    function getMiddleTex (country, salary){
        return this.tax * this.middleSalary;
    }

console.log("2. Cкільки у середньому податків платять IT-спеціалісти в Україні - ",  ((getMiddleTex.call(ukraine)* 100) /100).toFixed(2) + " " + "грн." + "," + " в Латвіі - ", ((getMiddleTex.call(latvia)* 100) /100).toFixed(2) + " " + "грн." + "," + " в Літві - ", ((getMiddleTex.call(litva)* 100) /100).toFixed(2) + " " + "грн.") 

/*3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
vacancies). Функція повинна викликатись через call та працювати з даними
через this*/

    function getCountryTexs (country){
        return this.tax * this.middleSalary * this.vacancies;
    }

console.log("3. Cкільки у середньому податків платять IT-спеціалісти в Україні",  Math.floor(getCountryTexs.call(ukraine)* 100) /100 + " " + "грн." + "," + "в Латвіі - ", ((getCountryTexs.call(latvia)* 100) /100).toFixed(2) + " " + "грн." + "," + " в Латвіі - ", ((getCountryTexs.call(litva)* 100) /100 ).toFixed(2) + " " + "грн.")

/* let countryTexs = {
    getCountryTexs: function (country){
        return this.tax * this.middleSalary * this.vacancies;
    }
} 

console.log("3. Cкільки у середньому податків платять IT-спеціалісти в Україні",  Math.floor(countryTexs.getCountryTexs.call(ukraine)* 100) /100 + " " + "грн." + "," + "в Латвіі - ", ((countryTexs.getCountryTexs.call(latvia)* 100) /100).toFixed(2) + " " + "грн." + "," + " в Латвіі - ", ((countryTexs.getCountryTexs.call(litva)* 100) /100 ).toFixed(2) + " " + "грн.") */


/* 
4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval */


function getMySalary(country) {
    setInterval(() => {
    let min = 1500;
    let max = 2000;
    let salaryRandom = Math.floor(Math.random() * (max - min + 1)) + min;


    const mySalary = {
        salary: salaryRandom,
        taxes: parseInt(salaryRandom * country.tax * 100/100),
        profit: salaryRandom - Math.round((salaryRandom * country.tax * 100) /100),
        }

        return console.log("4. Створити об'єкт кожні 10 секунд.", mySalary);
}, 10000);
}

getMySalary(ukraine);
getMySalary(litva);
getMySalary(latvia);

