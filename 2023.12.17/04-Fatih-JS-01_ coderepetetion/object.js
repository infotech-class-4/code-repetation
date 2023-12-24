


// var myObject = {
//     name: "Ali",
//     surname: "Demir",
//     password:12345
// }


var myStudent = {
    name: "Ali",
    surname: "Demir",
    class: "5/C",
    school:"I.O.O",
    blueEyes: ["Ali", "Ayşe", "Mehmet"],

    fullName: function(){
        return this.name + " " + this.surname
        // return myStudent.name + " " + myStudent.surname
    }
}

console.log(myStudent);
console.log(myStudent.class);
console.log(myStudent.name);

console.log(myStudent.blueEyes);
console.log(myStudent.blueEyes[0]);
console.log(myStudent.blueEyes[2]);

console.log(myStudent.fullName());

myStudent.name = "Mehmet"

console.log(myStudent.name);
console.log(myStudent);


