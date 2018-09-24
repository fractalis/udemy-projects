interface INamedPerson {
    firstName: string
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: INamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName( person: INamedPerson) {
    person.firstName = "Scott"
}

const person = {
    firstName: 'Scott',
    age: 33,
    hobbies: ["Gaming"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

greet(person);
changeName(person);
greet(person);
person.greet("Rallya");

class Person implements INamedPerson {
    firstName: string = "";
    greet( lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Scott";
myPerson.greet("Rallya");


// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;    
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1+value2) * 2;
}

console.log(myDoubleFunction(10,20));

// Interface Inheritance

interface AgedPerson extends INamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 42,
    firstName: "Scott",
    greet( lastName: string ) {
        console.log("Hello!");
    }
}