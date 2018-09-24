// string
let myName: string = 'Scott';

// number
let myAge: number = 33;

// boolean
let hasHobbies: boolean = true;
let hobbies: any[] = ['Gaming', 'Programming'];

// tuples
let address: [string, number] = ["Main St", 99];

// enums
enum Color {
  Gray,
  Green,
  Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(x: number, y: number): number {
  return x*y;
}

console.log(multiply(2,4));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userData: { name: string, age: number} = {
  name: 'Scott',
  age: 33
};

let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function (all: boolean): number[] {
    return this.data;
  }
};

// union types
let myActualAge: number | string = 33;
myActualAge = '33';
//myActualAge = true;

// check types
let finalValue = "A String";

if (typeof finalValue == "number") {
  console.log('finalValue is a number');
}

// never

function neverReturns(): never {
  throw new Error('An error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;

let noImplicitAnyTest;
noImplicitAnyTest = 12;