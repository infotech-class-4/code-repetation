/*
    OPERATORLER
    
    -Matematiksel
        +
        -
        *
        ** 
        /
        %
        =
        +=
        -=
        *=
        /=
        %=
        **= 
        ++
        --

    -Karsilastirma
        ==
        ===
        !=
        >
        <
        >=
        <=

    -Mantiksal
        &&
        ||
        !
*/

var x = 5;
var y = 10;
console.log(x + y);   //15
console.log(x - y);   //-5
console.log(x * y);   //50
console.log(x / y);   //0.5
console.log(x * x);   //25 (karesini alma)
console.log(x ** 2);   //25 (karesini alma)
console.log(x ** 3);   //125 (ücüncü dereceden üssü)
console.log(x % y);   //5

var text1 = "Ali";
var text2 = 4;
var text3 = "Veli";
console.log(text1 - text2);   //NaN
console.log(text1 - text3);   //NaN
console.log(text1 + text3);   //AliVeli
console.clear();


var sayi1 = 3;

var u = ++sayi1;
var d = sayi1++;
var e = sayi1++;

console.log("u: " + u);   //4
console.log("d: " + d);   //4
console.log("e: " + e);   //5
console.log("sayi1: " + sayi1);   //6

sayi1 += 5;
sayi1 = sayi1 + 5;

sayi1 -= 5;
sayi1 = sayi1 - 5;

sayi1 *= 5;
sayi1 = sayi1 * 5;

sayi1 /= 5;
sayi1 = sayi1 / 5;

sayi1 %= 5;
sayi1 = sayi1 % 5;

console.clear();

//Karsilastirma operatöleri
console.log(5 == "5");      //true
console.log("a" == "A");    //false
console.log(5 === "5");     //false (type'lari farkli)
console.log("5" === "5");   //true

console.log(5 != "4");    //true
console.log(5 != "5");    //false
console.log(5 !== "5");   //true (type'lari farkli)

console.log(5 > 5);       //false
console.log(5 >= 5);      //true

console.log(5 < 5);       //false
console.log(5 <= 5);      //true

console.log("a" > "b");      //false
console.log("a" > "A");      //true
console.clear();

//Mantiksal operatorler 
// && 
// || 
// !
var num4 = 5;
var num5 = 10;

console.log(num4 > 5 && num5 > 90);     //false
console.log(num4 > 5 && num5 < 90);     //false
console.log(num4 >= 5 && num5 < 90);    //true

console.log(num4 > 5 || num5 > 90);     //false
console.log(num4 > 5 || num5 < 90);     //true
console.log(num4 >= 5 || num5 < 90);    //true
console.clear();

var userName = "Ali";
var userSurname = "Veli";
var password = "12345";

console.log(userName == "Aliiii" || (userSurname == "Veli" && password == "12345"));    //true
console.log((userName == "Aliiii" && userSurname == "Veli") || password == "12345");    //true
console.log((userName == "Aliiii" && userSurname == "Veli") || password == "12345");    //true
console.log(userName == "Aliiii" && (userSurname == "Veli" || password == "12345"));    //false
console.log((userName == "Ali" && userSurname == "Veli") || password == "12345");       //true
console.clear();



var durum1 = true;
console.log(durum1);    //true
console.log(!durum1);   //false

var durum2 = false;
console.log(durum2);    //false
console.log(!durum2);   //true
console.log(!!durum2);  //false
// console.clear();