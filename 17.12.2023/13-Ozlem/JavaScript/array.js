// Array

var myArray=[2, 4, "ali", "ahmet",8];
console.log(myArray.length);  // herbir nesne tek basina bir eleman

//indis no----> 0 dan baslar saymaya. Bunlari tek tek yazmayacagiz for dongusu ile yazacagiz ileride
console.log(myArray[2]); //ali

myArray[2]="hasan"  // 2.indisdeki degeri degistirdik
console.log(myArray);        // [2, 4, 'hasan', 'ahmet', 8]


console.log(typeof(myArray));


console.log(myArray[myArray.length-1]);  // son elemani bulmak icin 


//Primitive type larda 
var x=5
var y=x

// y yi x e atadik.asagida ise x i degistirdik y ustte kaldi yani x in ilk hali
x=6
console.log(x,y);



// ama referans type lerde ikisi de degisir.cunku bellekte tuttuklari adres degisti
var myArray=[2, 4, "ali", "ahmet",8];
var secondaryArray= myArray

myArray[Array.length]="Hassann"
console.log(myArray);
console.log(secondaryArray);