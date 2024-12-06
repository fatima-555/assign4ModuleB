//Q1: Convert all elements to their string representation using map method?

let numbers = [1, 2, 3, 4, 5];

// Using map to convert each element to a string
let stringNumbers = numbers.map(String);

console.log(stringNumbers);

//Q2: Filter only number elements using filter method?

let mixedArray = [1, "hello", true, 42, null, 3.14, "world", {}, undefined];

// Using filter to retain only number elements
let numberElements = mixedArray.filter(item => typeof item === "number");

console.log(numberElements);

//Q3: Log each elements type to the console (does not return anything) using forEach method?

let mixedArray1 = [1, "hello", true, 42, null, 3.14, "world", {}, undefined];

// Using forEach to log each element's type
mixedArray.forEach(function (item) {
    console.log(typeof item);
});

//Q4: Sum up only the numbers in the array reduce method?

let mixedArray2 = [1, "hello", true, 42, null, 3.14, "world", {}, undefined];

// Using reduce to sum up only the numbers
let sum = mixedArray.reduce((accumulator, currentValue) => {
    if (typeof currentValue === "number") {
        return accumulator + currentValue; // Add number to the accumulator
    }
    return accumulator; // Skip non-number elements
}, 0); // Initial accumulator value is 0

console.log(sum);

//Q5: Find the first boolean value in an array using find method?

let mixedArray3 = [1, "hello", true, 42, null, 3.14, false, {}, undefined];

// Using find to get the first boolean value
let firstBoolean = mixedArray.find(item => typeof item === "boolean");

console.log(firstBoolean);

//Q6: Find index of the first object in an array using findIndex method?

let mixedArray4 = [1, "hello", true, 42, null, 3.14, { name: "object" }, undefined];

// Using findIndex to get the index of the first object
let firstObjectIndex = mixedArray.findIndex(item => typeof item === "object" && item !== null);

console.log(firstObjectIndex);

//Q7: Check if the array contains any numbers in an array using some method?

let mixedArray5 = [1, "hello", true, 42, null, 3.14, "world", {}, undefined];

// Using some to check if the array contains any numbers
let containsNumber = mixedArray.some(item => typeof item === "number");

console.log(containsNumber);

//Q8: Check if all elements are of type 'string' in an array using every method?

let mixedArray6 = ["hello", "world", "example", "test"];

// Using every to check if all elements are of type 'string'
let allStrings = mixedArray.every(item => typeof item === "string");

console.log(allStrings);
//  =============== END ================