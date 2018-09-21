// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string = "";
    acceleration: number = 0;

    constructor(name: string, acceleration: number = 0) {
        this.name = name;
        this.acceleration = acceleration;
    }

    honk() {
        console.log('Hooonnnkkk!');
    }

    accelerate(speed: number) : void {
        this.acceleration = this.acceleration + speed;
    }
}


var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration)

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
    protected _width: number = 0;
    protected _length: number = 0;
}

class Rectangle extends BaseObject {

    constructor(width: number, length: number) {
        super();
        this._width = width;
        this._length = length;
    }

    set width(width: number) {
        this._width = width;
    }

    set length(length: number) {
        this._length = length;
    }

    get width() { return this._width; }
    get length() { return this._length; }

    calcSize(): number {
        return this._width * this._length;
    }
}

let rectangle = new Rectangle(5, 5);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = "";

    get firstName() { return this._firstName; }
    set firstName(firstName: string) { 
        this._firstName = firstName;
    }
}

let person = new Person();

console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);