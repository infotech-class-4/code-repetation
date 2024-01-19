// SCOPE KAPSAM
// sinir kavrami olarak dusunulebilir


//var
//let
//const


//{} ile degiskenlerin sinirlarini belirleriz

var num1=1;  // Global scope
let num2=2;  // Global scope
  

var num1=34;  // var ile asagida degiskenin value sunu degistirebiliriz

//? let num2=12;   // hemen hata verir.let de degistiremezsin

//! let i hangi scope icinde tanimladi isen o gecerli olur.var her scope da degistirilebilir ulasilabilir

{
    let num2=23;  // bu sekilde blog scope icinde yazdiginda bu globalden farklidir.
   
    //let num2=24; //ama burda degistirmene izin yok.
    console.log(num2);// icerdekini yazdirir.23


}
console.log(num2); // disarda yazdirirsan disardakini yani 2 yi yazdirir



function myFunc(){
    let carName1="Volvo"  //function scope
}

console.log(carName1);  // hata verir.burda kullanilmaz




//var carName;
myFunc2()
function myFunc2(){
    carName="Opel"  // bunun basina bisey yazmazsa tarayici bunu var olarak globalde tanimlanmis olarak algilar
}

console.log(carName);  // kullananbiliriz


function number(){
    let num=0


if(num===0){
    console.log("burda num i kullanabilirim");

    let yeniSayi=34;
}

console.log(yeniSayi);
}
number()