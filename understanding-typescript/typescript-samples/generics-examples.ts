// Simple Generic

function echo(data: any) {
    return data;
}

console.log(echo("Scott"));
console.log(echo(33));
console.log({name: "Scott", age: 33});

// Better Generic

function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Testing").length);
console.log(betterEcho(27));
console.log({name: "Scott", age: 33});

// Built-in Generics

const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach( (element) => console.log(element) );
}

printAll<string>(["Apples", "Bananas"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2("Something"));

// Generic Class
class SimpleMath<T extends number, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<number, number | string>();
simpleMath.baseValue = 20;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());