/*
  script.js
  This file contains the JavaScript logic of the project.
  Here we write and test array concepts and operations.
*/

let subject=["SPD","IOT","AWD","AI","AJ","p1","p2","p3","p4","p5"];
console.log(subject);
let marks=[67,45,58,65,42,49,49,49,36,40];
console.log(marks);
for(let i=0;i<marks.length;i++){
    console.log("Marks in "+subject[i]+" is "+marks[i]);
}
let sumofmarks=0;
for(let i=0;i<marks.length;i++){
    sumofmarks+=marks[i];
}
console.log("Sum of marks after adding is "+sumofmarks);


let avgmarks=sumofmarks/marks.length*100;
console.log("Average marks is "+avgmarks);

// mutable

let fruits=["Mango","Apple"];
console.log(fruits)
fruits[0]="Banana";

// push & popmethod
let cars=["Audi","BMW","Maruti","Lamborgini"];
console.log(cars);
cars.pop("Ferrari");
console.log(cars);
cars.pop("Toyota");
console.log(cars);

// unshift method
console.log(fruits);
fruits.shift("Mango");
console.log(fruits);

let month = [ 'january', 'july', 'march', 'August'];
console.log(month);
month.shift('january');
// console.log(month);
month.shift('july');
console.log(month);
month.unshift('july', 'june');
// console.log(month);
// month.unshift('july');
console.log(month);


let primary =["Red", "Yellow", "Blue"];
console.log(primary);
primary.indexOf("Yellow");
let secondary = ["WHitesmoke", "Green", "Violet"];
console.log(secondary);
let allColors = primary.concat(secondary);
console.log(allColors);
primary.reverse();
console.log(primary);
primary.reverse();
console.log(primary);
let copies = primary.slice(-2);
console.log(copies);

let colors = ["red", "yellow", "green", "white", "pink", "grey"];
console.log(colors);
colors.splice(4);
console.log(colors);

let months = [ 'january', 'july', 'march', 'August'];
console.log(months);
months.splice(0,2,"july", "june");
console.log(months);

let lang = ["c", "c++", "javascript","python", "java", "c#", "sql"];
console.log(lang);
lang.reverse().indexOf("javascript");
console.log(lang);

// practice Qs
let tic_toe = [['X',null,'0'],[null,'X',null],['0',null,'X']]
console.log(tic_toe);
tic_toe[0][1] = '0'
console.log(tic_toe);

let nums = [1, 2, 3, 4];

console.log(nums);
let result = nums.map(function(n) {
  return n * n;
});

console.log(result); // [1, 4, 9, 16]



// Create array
let arr = [1,2,3];
console.log(arr);
// Add
arr.push(4);       // end
arr.unshift(0);    // start
console.log(arr);
// Remove
arr.pop();         // end
arr.shift();       // start
console.log(arr);
// Length
arr.length;
console.log(arr);
// Map
arr.map(x => x*2);
console.log(arr);
// Filter
arr.filter(x => x > 5);
console.log(arr);
// Reduce
arr.reduce((a,b) => a+b, 0);
console.log(arr);
// Check value
arr.includes(3);
console.log(arr);
// Reverse
arr.reverse();
console.log(arr);
// Remove duplicates
[...new Set(arr)];
console.log(arr);
// Sort
arr.sort((a,b) => a-b);
console.log(arr);
// Join
arr.join(', ');
console.log(arr);
// Split
'1,2,3'.split(',');
console.log(arr);
// Slice
arr.slice(1,3);
console.log(arr);
// Splice
arr.splice(1,2,5,6);
console.log(arr);
// Concat
arr.concat([4,5,6]);
console.log(arr);
// Index Of
arr.indexOf(3);
console.log(arr);
// Last Index Of
arr.lastIndexOf(3);
console.log(arr);
// Find
arr.find(x => x > 2);
console.log(arr);
// Find Index
arr.findIndex(x => x > 2);
console.log(arr);
// For Each
arr.forEach(x => console.log(x));
console.log(arr);
// Fill
arr.fill(0, 1, 3);
console.log(arr);
// Some
arr.some(x => x > 2);
console.log(arr);
// Every
arr.every(x => x > 0);
console.log(arr);
// Reduce Right
arr.reduceRight((a,b) => a-b);
console.log(arr);
// Flat
[[1,2],[3,4]].flat();
console.log(arr);
// FlatMap
arr.flatMap(x => [x, x*2]);
console.log(arr);
// Sort
arr.sort((a,b) => a-b);
console.log(arr);
// Keys
arr.keys(); 
console.log(arr);
// Values
arr.values();
console.log(arr);
// Entries
arr.entries();  
console.log(arr);
// From
Array.from('123');
console.log(arr);
// Of
Array.of(1,2,3);
console.log(arr);

// Loops
// For loops 
for(let i=10;i>=1;i=i-3)
    {
        console.log(i);
    }

for(let j=5;j>=1;j=j-3)
{
    console.log(j);
}

// print odd numbers from 1-15
console.log("Odd numbers print:")
let i;
for(i=15;i>=1;i--)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}

// print even numbers from 1-15
console.log("Even numbers print:")
// let i;
for(i=1;i<=15;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

// multipliation of table 5
// let a=prompt("Enter your number: ");
// a=parseInt(a);
// console.log("Tables");
// for(i=1;i<=10;i++)
// {
//     console.log(a+" X "+i+ " = "+ a*i);
// }

// console.log("NESTED LOOP")
// for(let i=0;i<=5;i++)
// {
//     for(let j=0;j<=i;j++)
//     {
//         console.log(j)
//     }
// }

console.log("task");

let fav="One Piece";
// let guess = prompt("Guess the movie name:");

while(guess!=fav && guess!="quit")
{
    // guess = prompt("Wrong guess! Try again:");
    console.log("Wrong guess! Try again:");
}
if(guess=="quit")
{
    console.log("You quit the game");
}
else
{
    console.log("Congratulations! You guessed the movie name correctly.");
}