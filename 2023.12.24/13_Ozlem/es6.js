

// ES6

// let, const  geldi ES6 ile

var num=12;
console.log(num)

num=32;  // degistirilebilri
console.log(num);


// const da degistirilemez.sabittir hep.

const numConst = 10;
//numConst=12;  // Hata verir degistirip yazdirmaya calistigimizda
//console.log(numConst);


const userName="Ali";
console.log(userName);

//userName="Fatih" //hata verirr yazdirirken
//console.log(userName);

console.clear();


// ! Literal Template  ``   degisken yazmak icin ${} icinde yazma sarti var backtick icinde

const firstName = "Ali";
const surName = "DEmir";

console.log("Ogrencinin adi:" + firstName + " " + surName + "Notlari da 90");
console.log(`Ogrencinin adi: ${firstName} ${surName} notlari bunlar`);
console.log(`deneme denem dene denemed dennn denmm`);



// 2.bir kullanilma yeri backtick lerin

let text = `Yeni bir metin ${firstName}`
console.log(text);


console.clear();


//! Function parametre default value

function FuncName(parametre, name, surname) {
    console.log(`${parametre} ${name} ${surname}`);
}

FuncName("deneme")  // deneme undefined undefined vewrir .cunku 3 parametre ama tek argument var


// yanina da verebilirsin asagiya da
function FuncName(parametre, name="Fuat", surname) {
    console.log(`${parametre} ${name} ${surname}`);
}

FuncName("deneme", "Korkmaz") 


//
function FuncName(parametre, name="Fuat", surname="Korkmaz") {
    console.log(`${parametre} ${name} ${surname}`);
}

FuncName("deneme") 

// Arrow Function

//ikisi de ayni yazimi farkli sadece
function name(){}
var arrowFunc = ()=>{}


const carName = "Opel";
const carModel = "Astra";

var carMergeNAme = ()=>{
    console.log(`${carName} ${carModel}`);
}
carMergeNAme()


// parametre de verilebilir
var carMergeNAme2 = (param1, param2)=>{
    console.log(`${param1} ${param2}`);
}
carMergeNAme2("Volvo", "C90")


//direkt bastada parametrenin value sunu verebiliriz ve asagida da degsitirebiliriz

var carMergeNAme3 = (param1="Mercedes", param2="C180")=>{
    console.log(`${param1} ${param2}`);
}
carMergeNAme3("Kia")

console.clear()


// normal ve arrow funmc yazimi

function normalFunc(){
    console.log("Normal Func cagrildi");
}
normalFunc()

var arrowFunc=()=>{
    console.log("Arrow Func cagrildi");
}
arrowFunc()


// Spread operatoru  ...

const originalArray=[1,2,3]
const copyArray=[...originalArray]

console.log(copyArray);



// iki arrayi for dongusu kullanmadan birlestirirkern spread operatorunden faydaliniyirz
const array1=[2,13,14,15,6,7,"Ali"]
const array2=[6,7,8,9,2]

const mergeArray=[...array1, ...array2]
console.log(mergeArray);



// yeni veri de eklenebilrii var olana

const array10=[2,13,14,15,6,7,"Ali"]
const array20=[6,7,8,9,2]

const mergeArray2=[...array10, ...array20, 900, "String"]
console.log(mergeArray2);




// objelerde de kullanilabilir ve yenio verilerde eklenebilir
const originalObje={
    firstName:"Kemal",
    surName:"Cal"
}

const copyObje={...originalObje, age:34, meslek:"Muhendis"}
console.log(copyObje);


// spread operatorunu function larda da kullanabiliriz

function normalFunc(...arg){
    let sum1=0
    for(var i=0; i<arg.length; i++){
        sum1 +=arg[i]
    }
    return sum1
}
var result= normalFunc(2,4,5,6,7,89,9,4,5)
console.log(`Sayilarin toplami: ${result}`);

console.clear()

// for in & for of

//normal for dongusu
var arrayBasic=[2,3,4,5,6,7, {ad:"asdad", soyad:"ddfffg"}]
for (let i=0; i < arrayBasic.length; i++){
    console.log(arrayBasic[i]);
}
console.log("----------------------------------");


//! for of yapisi

// for (const iterator of object) {
    
// }

// daha cok arraylerde kullanilr
// iterator normal for dongusundeki indise denk gelir

for (const itr of arrayBasic){
    console.log(itr);
}

console.log("***********************");

//! for in yaqpisi

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// daha cok objelerde kullanilr ama arraylerde de kullanilabilir

for (const key in arrayBasic){
    console.log(key);
}
