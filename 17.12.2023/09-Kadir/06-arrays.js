//Array
// Array (Dizi), birden fazla value (değer) tutabilen özel bir variable'dir (değişken)
// Bir array tek bir isim altında birçok value'yu tutabilir ve value'lere bir indeks numarasisi ile erişebilir.

var myArray = [2, 4, "Ahmet", "Ali", "Yunus", "Cemil"];
console.log(myArray);       //[2, 4, 'Ahmet', 'Ali', 'Yunus', 'Cemil']

console.log("Array'in uzunlugu:" , myArray.length);     //6

console.log("index 0'daki eleman:", myArray[0]);        //2
console.log("index 2'daki eleman:", myArray[2]);        //Ahmet

// index 2'daki elemani degistirmek icin
myArray[2] = "Hasan"        //index 2'daki elemana Hasan atamak
console.log(myArray);       //Ahmet, Hasan ile degisti
console.log(myArray[2]);    //Hasan

myArray[0] = "Necmi";
console.log(myArray[0]);        //Necmi
console.log(myArray);           //["Necmi", 4, "Ahmet", "Ali", "Yunus", "Cemil"];
console.log(typeof myArray);    //object

console.log(myArray[myArray.length-1]);     //Cemil // en sondaki eleman
// console.clear()



// var x = 5;
// var y = x;

// x = "Ali";
// console.log(x, y); //Ali 5

// var myArray = [2, 4, "Ahmet", "Ali", "Yunus", "Cemil"];
// console.log(myArray);               //[2, 4, 'Ahmet', 'Ali', 'Yunus', 'Cemil']
// var secondarArray = myArray;
// console.log(secondarArray);         //[2, 4, 'Ahmet', 'Ali', 'Yunus', 'Cemil']

// myArray[myArray.length] = "Hasan";
// console.log(myArray);                   //[2, 4, 'Ahmet', 'Ali', 'Yunus', 'Cemil', 'Hasan']
// console.log(secondarArray);            //[2, 4, 'Ahmet', 'Ali', 'Yunus', 'Cemil', 'Hasan']