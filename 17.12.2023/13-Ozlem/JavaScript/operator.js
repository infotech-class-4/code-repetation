
/* OPERATORLER

-Matematiksel
-Karsilastirma
-Mantiksal






*/

x=6
console.log(x**2);  //karesini alma  36


// + operatoru haric diger matematiksel operatorlerde string ve number arasinda islem yapmaz.NaN verir.Ama string icinde numberlari number olarak algilarlar
var text1="Ali"
var text2=4
var text3="A"

console.log(text1-text2);  //NaN
console.log(text1-text3);  //NaN


var a="3"
var b="6"
console.log(b-a);  //3

var sayi1=5
var d=++sayi1  // once topla
console.log(d);


var sayi2=9
var e=sayi2++   // once sayiyi yaz sonra arttir.o yuzden ilk yazdirmada 9 verir
console.log(e);



// sayi1 +=5  ile sayi1=sayi1+5 ayni
// sayi1 *=5
// sayi1 /=5
// sayi1 %=5



console.clear()
// KARSILASTIRMA OPERATORLERI   

console.log(3== "3");  // ASCI code daki degerlerine bakar typeof una bakmaz.true dur.

console.log("a" == "A"); // ASCI code lari farkli.false cikar

console.log(4==="4");  // false doner. === de typeof larina da bakar

console.log(5 !="5"); // esit degilmidir dedi (== ile soruyor).Hayir esittir o yuzden false cikar

console.log(5 !=="5"); // !== ile sorunca bu === yu karsilar.typeof unu da karsilastirdigi icin  hayir esit degil.yani true.



console.log("a"> "b");  // false cikar. ASCI code larina bakar
console.log("a"> "A");   // true cikar.kucuk harflerin ASCI degeri daha buyuk



console.clear()


// Mantiksal
// &&  and
// ||  or
// !   degil

var text4=3
var text5=10

console.log(text4 > 5);

var text6="Alex"