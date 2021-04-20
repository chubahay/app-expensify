//Person



class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi i am ${this.name} !`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age) //calling parent constructor function
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    // homeLocation() {
    //     return !!this.location; // ! or !! sets to boolean value
    // }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.location) {
            greeting += ` I'm visiting from ${this.location}`
        }
        
        return greeting;
    }
}


const me = new Traveler('Charlie Rogers', 30, 'Edinburgh');
const other = new Traveler();
console.log(me.getGreeting())
console.log(other.getGreeting())


