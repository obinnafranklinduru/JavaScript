/*
 Declaring an Array:
let myArray = new Array(); OR let myArray = [];
*/

//Declaring and Assigning an Array
let arrayOfNumbers = [1, 2, 3, 4, 5];

//Adding and Removing Elements
arrayOfNumbers.push(6) // to add an element to the end of the array
arrayOfNumbers.pop() // to remove an element to the end of the array
arrayOfNumbers.unshift(0) // to add an element to the beginning of the array
arrayOfNumbers.shift() // to remove an element to the beginning of the array

/*
Working with the splice method of an array
This can be tricky for some people, but it's easy if you understand the syntax.
Spice (): This function is used to insert or delete elements from any part of the array.
It accepts the required two parameters.
    first parameter - denotes the starting position of the element you want to remove.
    second parameter - denotes the number of elements you want to remove.
    Other parameters: denotes the elements you want to add or replace with.(optional)
*/

let arrayOfNames = ["Obinna", "Franklin", "Duru"];
//This will replace Obinna with Prisca.
arrayOfNames.splice(0, 1, "Prisca");

// This will remove Franklin from the array.
arrayOfNames = ["Obinna", "Franklin", "Duru"];
arrayOfNames.splice(1, 1);

// This will remove Franklin and Duru and replace them with Stanley and KingSley.
arrayOfNames = ["Obinna", "Franklin", "Duru", "Prisca"];
arrayOfNames.splice(1, 2, "Stanley", "Kingsley");


// ==============================================================================
/*
Array-> Array Search

find() - method returns the value of the first element that passes a test 
findIndex() - method returns the index of element that passes a test 
indexOf() -  method returns the index of the first occurrence of a specified value in a string.
lastIndexOf() - method returns the index of the last occurrence of a specified value in a string.
includes-to check if an element exists. It returns a boolean value.
startsWith() - method returns true if a string starts with a specified string. Otherwise, it returns false.
*/

// Declaring and Assigning an array
let names = ["Franklin", "Obinna", "Franklin", "Duru"];

// returns the first words that start with the letter "D"
let letterD = names.find(name => name.startsWith("D"));
console.log(letterD);

// returns the index of the first words that start with the letter "D"
let indexOfD = names.findIndex(name => name.startsWith("D"));
console.log(indexOfD);

// returns index of the first word  of a specified value "Franklin"
let indexOfF = names.indexOf('Franklin');
console.log(indexOfF);

// returns index of the last word  of a specified value "Franklin"
indexOfF = names.lastIndexOf('Franklin');
console.log(indexOfF);

// to check if the word "Obinna" is in the array
let letterO = names.includes("Obinna");
console.log(letterO);


// =============================================================================

// Sometimes we want to transform an array into a new array or another kind of value.

// slice() - returns a shallow copy of an array into a new array. It does not modify the original array.
// concat() - joins two or more arrays
// filter() - creates a new array filled with elements that pass a test provided by a callback function.


//Declaring and Assigning an Array
let arrayOfNumber = [1, 2, 3, 4, 5];

// Using the slice method of the array
// Displays the element from index three. 
let display = arrayOfNumber.slice(3);
console.log(display);

// This will display three elements of the array from the back.
display = arrayOfNumber.slice(-3);
console.log(display);

// This will display elements between indexes one and four. 
display = arrayOfNumber.slice(1, 4);
console.log(display);

// Using the filter method of the array.
// This will display even numbers in the array.
let evenNumber = arrayOfNumber.filter(number => number % 2 === 0);
console.log(evenNumber);

// Using the concat method of the array.
let array1 = [1, 2];
let array2 = [3, 4];
let array3 = [5, 6];

// This will display the combination of the arrays.
let combinedArrayOfNumber = array1.concat(array2, array3);
console.log(combinedArrayOfNumber);

// Or you can use the spread operator
// let combinedArrayOfNumber = [...array1, ...array2, ...array3]


// ===================================================================================================

// map() - This calls a function for each element of the existing array to create a new one.
// flat() - method concatenates the elements of all sub-arrays into a new array.
// reduce() - runs a reducer function on each array element and returns a single value. 
// join() - method concatenates each member in an array, separated by commas or a provided separator string.

//Declaring and Assigning an Array
let arrayOfIntegers = [1, 2, 3, 4, 5];

// Using the map method of the array
let doubled = arrayOfIntegers.map(num => num * 2);
console.log(doubled);
//Result - [2, 4, 6, 8, 10]

// Using the reduce method of the array.
let totalInteger = arrayOfIntegers.reduce((result, element) => result + element);
console.log(totalInteger);
//Result - 15

// Using the join method of the array.
let joinedInteger = arrayOfIntegers.join("-");
console.log(joinedInteger);
//Result - 1-2-3-4-5

// Using flat method of the array
let nestedArrays = [[1, 2, 3], [4], 5];
let array = nestedArrays.flat();
console.log(array);
//Result - [1, 2, 3, 4, 5]