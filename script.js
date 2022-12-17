let sum = 0;
let other = [];
const arr  = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

for(let i = 1;i <= arr.length;i++){
    if(arr[i] >= 0){
        sum += arr[i];
        other.push(arr[i]);
    }
}
console.log(sum);//Знайти суму  позитивних елементів.
console.log(other.length);// кількість позитивних елементів.

//Знайти мінімальний елемент масиву та його порядковий номер.

let min = arr[0];

for(let count of arr){
    if(count < min){
        min = count;
    }
}
console.log(min);// мінімальне число
console.log(arr.indexOf(min));// інекс мінімально числа в масиві

//Знайти максимальний елемент масиву та його порядковий номер.

let max = arr[0];

for(let count of arr){
    if(count > max){
        max = count;
    }
}
console.log(max);// максимальне число  
console.log(arr.indexOf(max));// індекс максимально числа


//Визначити кількість негативних елементів.


let negative = [];
for(let i = 1;i <= arr.length;i++){
    if(arr[i] < 0 ){
        negative.push(arr[i]);
    }
}
console.log(negative.length);// кількість негативних елементів

//Знайти кількість непарних позитивних елементів.
let someElement = [];


for(let i = 0;i <+ arr.length;i++){
    if(arr[i] > 0 && arr[i]%2 !== 0){
        someElement.push(arr[i])
    }
}
console.log(someElement.length);//кількість непарних позитивних елементів

//Знайти кількість парних позитивних елементів.
let someNumber = [];
z

for(let i  = 0;i <= arr.length;i++){
    if(arr[i] > 0 && arr[i]%2 === 0){
        someNumber.push(arr[i])
    }
}
console.log(someNumber.length);//кількість парних позитивних елементів


//Знайти суму парних позитивних елементів
let secondNumber = 0;


for(let i  = 0;i <= arr.length;i++){
    if(arr[i] > 0 && arr[i]%2 === 0){
        secondNumber += arr[i];
    }
}
console.log(secondNumber)//сума парних позитивних елементів

//Знайти суму непарних позитивних елементів.


let manyNumer = 0;

for(let i  = 0;i <= arr.length;i++){
    if(arr[i] > 0 && arr[i]%2 !== 0){
        manyNumer += arr[i];
        console.log(manyNumer)
    }
}
console.log(manyNumer)//сума не парних позитивних елементів

//Знайти добуток позитивних елементів.

let mult = 1;
for(let i = 0;i <= arr.length;i++){
    if(arr[i] > 0 ){
        mult *= arr[i];
    }
}
console.log(mult);

//Знайти найбільший серед елементів масиву, ост альні обнулити.

let biggestNum = arr[0];
for(let count of arr){
    if(count > biggestNum){
        biggestNum = count;
    }
}
console.log(arr.indexOf(biggestNum));//дізналися порядковий індекс у масиві 
let newArray = arr.slice(18,19)//створили новий масив з найбільшим числом
console.log(newArray);
