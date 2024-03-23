const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
   if (numbs[i] == 10) break; 
console.log(numbs[i]); 
}

const numbs1 = [1, 5, 4, 10, 0, 3];
const index = numbs1.indexOf(4);
console.log(index);

const numbs2 = [1, 3, 5, 10, 20];
let joinNumbs2 = numbs2.join(' ');
console.log(joinNumbs2);

let numbs3 = [];
for( let a = 0; a < 3; a++) {
let innerLoop  = [];
for(let b = 0; b < 3; b++) {
innerLoop.push(1);
}
numbs3.push(innerLoop);
}
console.log(numbs3);

const numbs4 = [1, 1, 1];
numbs4.push(2, 2, 2);
console.log(numbs4);

const numbs5 = [9, 8, 7, 'a', 6, 5];
numbs5.sort();
const filterednumbs5 = numbs5.filter(numbs5 => numbs5 >= 9);
numbs5.pop('a');
console.log(numbs5); 

const numbs6 = [9, 8, 7, 6, 5];
let enterValue = Number(prompt('Введите значение'), 10); 
   if(numbs6.includes(enterValue)) {
      alert('Угадал');
         } else {
            alert('Не угадал');
         }

const str = 'abcdef';
const reversStr = str.split('').reverse().join('');
console.log(reversStr);

const numbs7 = [[1, 2, 3],[4, 5, 6]];
const arrayUnion = numbs7.flat();
console.log(arrayUnion);

const numbs8 = [1, 3, 5, 7, 9, 10];
for(let i = 0; i < numbs8.length - 1; i++) {
   console.log(numbs8[i] + numbs8[i + 1]);
}

function squareNumbers(arr) {
   return arr.map(num => num * num); 
  };
console.log(squareNumbers);

function wordLength(word) {
   return word.map(word => word.length) 
};
console.log(wordLength);

function filterPozitive(arr) {
   let result = [];
   for(let i = 0; i < arr.length; I++) {
      if(arr[i] < 0)  {
         result.push(arr[i]);
      }
   }
   return result;
};
console.log(filterPozitive)



const numbs9 = [];
for(let i = 0; i < 10; i++) {
   numbs9.push(Math.floor(Math.random() * 10) + 1);
}
const numbs10 = [];
numbs9.forEach((num) => {
if (num % 2 === 0) {
  numbs10.push(num); 
} 
})
console.log(numbs10);

const numbs11 = [];
for(let i = 0; i < 6; i++) {
   numbs11.push(Math.floor(Math.random() * 10) + 1);
}
const sum = numbs11.reduce((total, number) => total + number, 0);
console.log(sum / numbs11.length);