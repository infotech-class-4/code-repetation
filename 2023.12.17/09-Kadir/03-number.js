var nbr = 4; //ondaliksiz sayi
var nbr2 = 4.444; // ondalikli sayi decimals

console.log(typeof nbr);    //number
console.log(typeof nbr2);   //number

var x = 3;
var y = 4;

console.log(x + y);     //7

// Floating point aritmetiği her zaman %100 doğru değildir
// sorunu çözmek için çarpma ve bölme işlemi yapilir
var w = 0.2;
var c = 0.1;

console.log(w + c);     //0.30000000000000004
console.log((w * 10 + c * 10) / 10);    //0.3
// console.clear();

// Çok büyük veya çok küçük sayılar scientific (exponent) / bilimsel (üslü) gösterimle yazılabilir.
let t = 123e5;      // 12300000
let z = 123e-5;     // 0.00123
console.log(t);     // 12300000
console.log(z);     // 0.00123 


// toString() methodu bir sayıyı string olarak döndürür.
// Syntax => number.toString(radix);
var myNumber = 1234567;
var myString = myNumber.toString();
console.log(typeof myNumber);   //number
console.log(typeof myString);   //string

var result = 5 + myNumber.toString();
console.log(result);    //51234567

var x = "5";
var y = "10";
console.log(x + y);     //510 - 5ve10 String oldugu icin yanyana yazdirir
console.log(x - y);     //-5
console.log(x * y);     //50
console.clear();


// toFixed() methodu, sayının belirtilen sayıda ondalık basamakla yazıldığı bir string döndürür.
// *toFixed(2) parayla çalışmak için mükemmeldir.
// Ondalık sayıların sayısı sayıdan büyükse sona sıfırlar eklenir.
var sayi1 = 10.2313;
console.log(sayi1.toFixed(0));  //10
console.log(sayi1.toFixed(1));  //10.2
console.log(sayi1.toFixed(2));  //10.23 *
console.log(sayi1.toFixed(8));  //10.23130000
console.clear();


//Boolean
console.log(5 > 10);    //false
console.log(10 > 5);    //true
console.log("c" > "t"); //false
console.log(99 > 116);  //false
console.clear();


//Undefined
// value'su olmayan bir variable'in value'su da undefined (tanımsızdır), türü de undefined'dir.
// value'yu undefined (tanımsız) olarak ayarlayarak herhangi bir variable boşaltılabilir. Tür de undefined olacaktır.
var xx;
console.log(typeof xx);     //undefined


// *** undefined ve null value olarak eşit ancak type olarak farklıdır***


//Null
// null "nothing" değildir.
// Bir object'yi null değerine ayarlayarak boşaltabilirsiniz
var bos = null;
console.log(typeof bos);    //object


// Empty Value'lar
// Boş bir değerin undefined'la hiçbir ilgisi yoktur.
// Boş bir string'in hem legal value'su hem de type'i vardır.
let car = "";
console.log(typeof car);     // The value is "", the typeof is "string"



//Nan
// NaN, "Not-a-Number" "Sayı Değil" ifadesinin kısaltmasıdır.
var sayi4 = 5;
var str6 = "ABC";
console.log(sayi4 * str6);  //NaN



// "NaN"nin typeof'u sayıdır
// Bir "array"in typeof'u "object"dir
// "date"in typeof'u "object"dir
// "null" typeof'u "object"dir
// undefined  bir değişkenin typeof'u undefined'dir *
// Değer atanmamış bir değişkenin typeof'u da undefined'dir *