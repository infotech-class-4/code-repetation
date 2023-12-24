// matematiksel operatorler

var x =5
var y = 10

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x**2);

 var text1 =  "Ali"
 var text2 =  4
 var text3 =  "Veli"

 console.log(text1 - text2);
 console.log(text1 - text3);

 var sayi1 = 3

 var u = ++sayi1

 var d = sayi1++

 var e =sayi1++

 console.log(u);
 console.log(d);
 console.log(e);
 console.log(sayi1);

 console.clear()


 sayi1 += 5
 sayi1 = sayi1 + 5
 
 sayi1 -= 5
 sayi1 = sayi1 - 5

 sayi1 *= 5
 sayi1 = sayi1 * 5
 
 sayi1 /= 5
 sayi1 = sayi1 / 5



//  Karsılastırma operatorleri

console.log( 5 == "5");
console.log( "a" == "A");

console.log(5 === "5");

console.log(5 != "5");
console.log(5 != "5");
console.log(5 !== "5");

console.log(5 > 5);
console.log(5 >= 5);

console.log(5 < 5);
console.log(5 <= 5);

console.log('a' > 'b');
console.log('a' > 'A');


//  Mantıksal Operatorler

var text4 = 5
var text5 = 10

console.log(text4 > 5 && text5 > 90);
console.log(text4 > 5 && text5 < 90);
console.log(text4 >= 5 && text5 < 90);

console.log(text4 > 5 || text5 > 90 );
console.log(text4 > 5 || text5 < 90 );
console.log(text4 >= 5 || text5 < 90 );


var userName = "Ali";
var surName = "Veli";
var password = "4950"

console.log(userName == "Alii" || surName == "Veli" && password== "4950");
console.log(userName == "Alii" && surName == "Veli" || password== "4950");
console.log(userName == "Alii" || (surName == "Veli" && password== "4950"));


 var degil = true

 console.log(!!degil);
 




