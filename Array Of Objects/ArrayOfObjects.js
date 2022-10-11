//  JavaScript
//  Passing an object in an array
class Student{
    constructor(name, gpa, level) {
        this.name = name;
        this.gpa = gpa;
        this.level = level;
    }
    read(){return `${this.name} scored ${this.gpa}gpa in his ${level}level`}
}
//Creating a instance of Student
const student1 = new Student("Obinna", 99.5, 003);
const student2 = new Student("Franklin", 76.9, 002);
const student3 = new Student("Duru", 80.5, 004);

// Array of objects
const studentsJS = [student1, student2, student3];

//  ReactJs
//  Passing an object in an array
const studentsReactJS = [
    {
        id: student1,
        name: "Obinna",
        gpa: 99.5,
        level: 003,
        read: () => `${this.name} scored ${this.gpa}gpa in his ${level}level`
    },
    {
        id: student2,
        name: "Franklin",
        gpa: 76.9,
        level: 002,
        read: () => `${this.name} scored ${this.gpa}gpa in his ${level}level`
    },
    {
        id: student3,
        name: "Duru",
        gpa: 80.5,
        level: 004,
        read: () => `${this.name} scored ${this.gpa}gpa in his ${level}level`
    }
]