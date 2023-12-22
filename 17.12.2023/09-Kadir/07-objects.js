// object

var myStudent ={
    name: "Ali",
    surname: "Demir",
    class: "5/C",
    school: "I.O.O",
    blueEyes:["Ali", "Ayse", "Mehmet"],
    fullName: function(){
        return this.name + " " + this.surname
        // return myStudent.name + " " + myStudent.surname
    }
}

console.log(myStudent);
console.log("Name:" , myStudent.name);      //Name: Ali
console.log("Sinif:", myStudent.class);     //Sinif: 5/C
console.log("Okul:", myStudent.school);     //Okul: I.O.O

//object icindeki array'i cagirmak
console.log("index'i 2 olan mavi gözlü ögrenci:", myStudent.blueEyes[2]);   // Mehmet

//object icindeki function'u cagirmak
console.log("Ad-Soyad:", myStudent.fullName());     //Ad-Soyad: Ali Demir


// name'e Mahmut degeri atadik
myStudent.name = "Mahmut"
console.log("Name:", myStudent.name);   //Name: Mahmut
console.log(myStudent);

myStudent.blueEyes[1] = "Fatma";
console.log(myStudent.blueEyes); //['Ali', 'Fatma', 'Mehmet']
console.log(myStudent.blueEyes[1]); //Fatma

