class Person {
    // Default is public
    name: string;

    private type: string = "";
    protected age: number = 33;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    private setType(type: string) {
        this.type = type
        console.log(this.type);
    }
}

const person = new Person("Scott", "scott");
console.log(person);
person.printAge();

// Inheritance

class Employee extends Person {
    constructor(name: string, username: string) {
        super(name, username);
        console.log('Employee');
    }
}

const employee = new Employee("Scott", "srallya");

// Getters & Setters

class Plant {
    private _species: string;

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}
let plant = new Plant()
console.log(plant.species)
plant.species = "Testing";
console.log(plant.species)

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(3));

// Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 0;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("New IT Project");
console.log(newProject);

// private constructors

class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('Singleton Class');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
