var number =[2,23,4,5,6,7,8,9]

for (let i=0; i<number.length; i++){
    console.log(number[i]);
}

console.log("************************");

// forEach()
//return yapmaz.icerde yazdirmamiz lazim

number.forEach((item)=>{
    console.log(item);
})

console.log("************************");


number.forEach((item)=>{

    console.log(item*2);
})

// arrow func ile forEach()
number.forEach(function(item){
    console.log(item*3);
})

console.clear()

//! map()
// map de return verir

var newNumber = number.map((item)=>{

    return item*2
    //icinde dolasadabiliriz illaki islem yapomamiza gerek yok.o zaman return degilde normal console.log ile yazariz
    //console.log(item);  // undefined verir altta bisey vermemiz lazim
})

console.log(newNumber);


//? filter()

var eventNumbers = number.filter((item)=>{
    return item % 2 === 0
})
console.log(eventNumbers);  // (4) [2, 4, 6, 8]


var names = [ "ali", "veli", "kemal", "canan"]

var filterName = names.filter((item)=>{
    return item === "veli"
})
console.log(filterName);  // ['veli']

console.clear();


//? find()

//ilk saglayani verir.

var number =[1,3,5,7,2,23,4,5,6,7,8,9]

var eventNumber = number.find((item)=>{
    return item % 2 === 0
})
console.log(`dizi icerisindeki return u saglayan ilk deger: ${eventNumber}`);

//? findIndex()
// ilk saglayanin indis no sunu verir

var eventNumberIndis= number.findIndex((item)=>{
    return item % 2 === 0
})
console.log(`dizi icerisindeki returnu saglayan ilk ifadenin indis nosu: ${eventNumberIndis}`);

console.clear()

var number =[1,3,5,7,2,23,4,5,6,7,8,9]
//? some()
// dizide saglayan bi tane degere bakiyor
var isEventNumber = number.some((number)=>{
    return number % 2 === 0
})

console.log(isEventNumber);



//? every()
// dizi icindeki butun hepsine bakiyor.heps saglarsa true verir.bi tane bile saglamazsa false verir

var areAllEventNumber = number.every((number)=>{
    return number % 2 === 0
})

console.log(areAllEventNumber);



//! reduce()
//iki tane parametre gerektirir. accumulator ve value , birde baslangic degeri verebiliriz. accumulator birlestirir yapilan islemi.matematiksel islemler icin kullanilr

var number =[1,3,5,7,2,23,4,5,6,7,8,9]
 const total = number.reduce((acc, val)=>
 acc + val, 0);
  // tek bir deger dondurecegi icn {} yazmayiruz arrow function da ve return de yazmiyoruz ayriyeten.  
 
 console.log(total);





 const total1 = number.reduce((acc, val)=> acc + val, 2);

 console.log(total1);





//! ortalama bulmada kullnma
var numbers = [1,2,3,4];
const avg = numbers.reduce ((acc, val)=> acc + val, 0) / numbers.length;
console.log(avg);

// bu aslinda su demek;

 var acc=0
 for(let i=0; i < number.length; i++){
    acc += number[i]  //val
 }
console.log(acc);


//spread operatoru ile kullanma

function topla1(...sayilar){

    return sayilar.reduce((baslangicSayisi, gelenSayilar)=>baslangicSayisi + gelenSayilar, 0)
}
 var resultTotal=topla1(2,3,4,5,67,7,8,677,45);
 console.log(resultTotal);

 // ortalamayi bulmak icin..

 function topla2(...sayilar){

    return (
        sayilar.reduce(
            (baslangicSayisi, gelenSayilar)=>baslangicSayisi + gelenSayilar, 0) / sayilar.length)
}
 var resultTotal=topla2(2,3,4,5,67,7,8,677,45);
 console.log(resultTotal);

 // return den sonra paranteze almliyiz





//! daha onceden bilinen bir yontemi hatirlayalim.dolu bir arraye  push kullnamadan 1 tane eleman eklemede

var myArray=["ali"]

function myPush(parametre){
myArray[myArray.length]=parametre
}

myPush("selim")
console.log(myArray);


//!! bos bir arraye  push(), pop() kullanmadan  birkactane veri ekleme cikartma.for dongusu kullanilir birden fazla oldiugu icin!
var myArray=[]

function myPush(...arg){


    // kac tane parametre verilecegini bilmedigimiz icin for dongusu kullnaiiriz
    // myArray.length ile son indis nosunu verir
    for(let i =0; i <arg.length; i++){
        myArray[myArray.length]=arg[i]
    }

}

myPush("Kemal", "Ahmet", "Veli", 34, 35, 36)

console.log(myArray);


//! pop() methodu kullnamadan diziden eleman sil!
// pop ile yeni bir Array olusturulur o yuzden bos bir array olusturup icine atmaliyiz sildikten sonraki yeni arrayi

var myArray=["Kemal", "Ahmet", "Veli", 34, 35, 36]
var newArray=[];

function myPop(...myArray){

for(let i =0; i <myArray.length - 1; i++){
        newArray[i]=myArray[i]
        
    }
    return newArray

}

var newArray=myPop(...myArray)
console.log(newArray);

    
