// CODE here for your Lambda Classes

//CLASSES 

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
};

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score in ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects; // make array in instances
    }     
    listsSubjects() {
        let subjects = this.favSubjects;
        subjects.map( subject => console.log(subject));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code in ${subject}.`;
    
    }
};

// OBJECTS 

/** Person Objects **/

const joe = new Person({
    name: "Joe",
    age: 30, 
    location: "Denver",
    gender: "male"
});
 
const sarah = new Person({
    name: "Sarah",
    age: 35, 
    location: "Ontario",
    gender: "female"
});


/** Instructor Objects **/

const mcgonagall = new Instructor({
    name: "Professor McGonagall",
    age: "old", 
    location: "Hogwarts",
    gender: "female",
    specialty: "Transfiguration", 
    favLanguage: "English",
    catchPhrase: "Why is it always you three?"
})

const snape = new Instructor({
    name: "Professor Snape", 
    age: "mid 40s", 
    location: "Hogwarts",
    specialty: "Potions",
    favLanguage: "English",
    catchPhrase: "Potter!!!!!!!!"
})


/** Student Objects **/ 

const harrypotter = new Student({
    name: "Harry Potter", 
    age: 17,
    location: "Hogwarts",
    gender: "male",
    previousBackground: "lived in the cupboard under the stairs",
    className: "Griffindor",
    favSubjects: ["Defense Against the Dark Arts", "Transfiguration", "Quiddich"],
}); 

const ron = new Student({
    name: "Ron Weasley",
    age: 17, 
    location: "Hogwarts",
    gender: "male", 
    previousBackground: "he's a Weasley",
    className: "Griffindor",
    favSubjects: ["lunch", "quiddich"]
}); 

const hermione = new Student({
    name: "Hermione Granger",
    age: 17,
    location: "Hogwarts",
    gender: "female",
    previousBackground: "Parents are muggle dentists",
    favSubjects: ["Transfiguration", "Potions", "Divination", "Defense Against the Dark Arts", "Literally everything"],
})

/** Project Manager Objects **/

const percy = new ProjectManager({
    name: "Percy Weasley",
    age: "older than Ron",
    location: "Hogwarts",
    gender: "male",
    specialty: "Being a prefect",
    favLanguage: "English",
    gradClassName: "Griffindor",
    favInstructor: mcgonagall
})

const lucius = new ProjectManager({
    name: "Lucius Malfoy",
    age: "super old",
    location: "Hogwarts",
    gender: "male",
    specialty: "Being mean and having nice hair",
    favLanguage: "Snark",
    gradClassName: "Slytherin",
    favInstructor: "uhhh"
})

// TESTS  

console.log(joe.speak());
console.log(sarah.speak());
console.log(mcgonagall.speak());
console.log(mcgonagall.catchPhrase);
console.log(snape.catchPhrase);
console.log(snape.speak());
console.log(snape.demo("Potions")); 
console.log(mcgonagall.grade(hermione, "Transfiguration"));
console.log(harrypotter.speak());
console.log(ron.speak());
console.log(hermione.speak());
console.log(hermione.listsSubjects());
console.log(ron.PRAssignment("Potions"));
console.log(harrypotter.sprintChallenge("Divination"));
console.log(percy.speak());
console.log(percy.standUp("griffindor_firstyears")); 
console.log(lucius.standUp("slytherin_firstyears"));
console.log(percy.debugsCode(ron, "Potions"));

