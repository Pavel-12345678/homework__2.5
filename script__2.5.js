

function smallerNumber(a, b) {
   return a < b ? a : b;
}

function namber(num) {
   if (num % 2 === 0) {
      return 'Четное число';
   } else {
      return 'Нечетное число';
   }
}

function squareNumber(num) {
   console.log(num * num);
}

function squareNumber(num) {
   return num * num;
}

function howOldUser() {
   let age = prompt('Сколько Вам лет?');
   if (age < 0) {
      console.log('Вы ввели неравильное значение');
   } else if(age <=12) {
      console.log('Привет, друг!');
   } else{
      console.log('Добро пожаловать!');
   }
}

function checksNumbers(a, b) {
   if (isNaN(a) || isNaN(b)) {
      return 'Одно или оба значения не являются числом';
   } else {
      return a * b;
   }
}

function numberCheck() {
   let num = prompt('Введите число');
   num = Number(num);
   if (isNaN(num)) {
      return 'Переданный параметр не является числом';
   } else {
      return `${num} в кубе равняется ${num ** 3}`;
   }
}
console.log(numberCheck());

const circle1 = {
   radius: 5,
   getArea,
   getPerimetr,
}

const circle2 = {
   radius: 10,
   getArea,
   getPerimetr,
}

function getArea() {
   return Math.PI * this.radius * this.radius;
}

function getPerimetr() {
   return 2 * Math.PI * this.radius;
}

function seasons(month) {
   if (month >=3 && month <=5) {
      return 'Весна';
   } else if(month >=6 && month <=8) {
      return 'Лето';
   } else if(month >=9 && month <=11) {
      return 'Осень';
   } else if(month =12 || month <=2) {
      return 'Зима';
   } else {
      return 'Вы ввели неправильное значение';
   }
}
console.log(seasons(prompt('Введите число')));