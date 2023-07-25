class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    greet() {
    console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
    }
    }
    // Friends List:
    const ARUN= new Person('ARUN', 21);
    ARUN.greet();
    const AMMU = new Person('AMMU', 15);
    AMMU.greet();