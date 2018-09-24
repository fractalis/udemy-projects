// Exercise 1 - As Arrow Function?
var double = (value) => value*2;

console.log(double(10));
 
// Exercise 2 - With default values...
var greet = function (name: string = "Scott") {
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Spread Operator
var numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
 
// Exercise 4 - Spread Operator
var newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var { firstName, experience } = scientist;
console.log(firstName, experience);