class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        //checking if email is already in array
        if (this.students.find(stu => stu.email === studentToRegister.email)) {
            console.log(`The student ${studentToRegister.email} has already been registered.`);
        //if email is not in array already
        } else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}.`);
            return this.students;
        }
    }
}