class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.deflection = false;
  }

  getInfo() {
    return `Студент ${this.course}, ${this.university}  ${this.fullName}`;
  }

  set setMarks(val) {
    if(this.deflection) return;

    if(val > 0) this.marks.push(val);
  }

  get getMarks() {
    if(this.deflection) {
      console.log('Студент исключен, ставить оценки нельзя');
      return null;
    } 
    return this.marks;
    }
  

  getAverageMark() {
      if(this.deflection) {
        console.log('Студент исключен, средний бал не определить');
        return null;
      } 
      return this.marks.reduce((sum, item) => 
        sum + item)/ this.marks.length;
  }

  dismiss(){
    this.deflection = true;
    console.log('Студент исключен!');
  }

  recover() {
    this.deflection = false;
    console.log('Студент восстановлен!');
}
}

const student = new Student(
  "Вища Школа Психотерапії м.Одеса",
  "1го курсу",
  "Остап Родоманський Бендер"
);

console.log('2.', student.getInfo());
student.marks = [5, 4, 4, 5];
console.log('3. Оценки студента ', student.marks);
console.log("4. Поставили оценку студенту", student.setMarks = 3);
console.log('4. Оценки студента ', student.marks);
console.log('5. Средний бал', student.getAverageMark());
student.dismiss();
console.log("6. Поставили оценку студенту", student.setMarks = 2);
student.recover();
console.log("7. Поставили оценку студенту", student.setMarks = 4);
console.log('7. Оценки студента ', student.marks);


