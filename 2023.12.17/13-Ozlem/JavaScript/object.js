
var myStudent={
    name:"Ali",
    surname:"Ata",
    class:"5c",
    school:"GGS",
    blueEyes:["Ali","Ayse","Veli"],

    fullName: function(){
         return myStudent.name + " " +myStudent.surname
         //bunui this ile de yazabiliriz
        //return this.name + " " + this.surname
    }
    

}

console.log(myStudent.name); 
console.log(myStudent.class);
console.log(myStudent.school);
console.log(myStudent.blueEyes[2]);

// obje icinde function yazip return yazdik ve asagida console.log da da () ile cagir objenin key ini

console.log(myStudent.fullName());

//degisiklik yaparsak key in value sunda..

myStudent.name="Kerim"
console.log(myStudent);