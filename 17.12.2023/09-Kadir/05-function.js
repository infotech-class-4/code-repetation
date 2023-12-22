/*
    REFERANCE TYPES
    -Array
    -Object
    -Function
*/

// function'lar tekrar eden kodlari önlemek amaciyla kullanilir

// Matematiksel function =>  f(x)= x**2 + xy + y
function myFunction() {
  console.log("Hello World");
}
myFunction();


function myToplaVeEkranaYazdir(x, y) {
  console.log("Toplam=", x + y);
}
myToplaVeEkranaYazdir(5, 4);
myToplaVeEkranaYazdir("asdf", 4);
console.clear();


//"return" statement'i (ifadesi), bir function'in execution edilmesini (yürütülmesini) durdurur ve bir value (değer) döndürür.
// return null olarak da döndürülebilir
function myTopla(x, y) {
  var result = x + y;
  return result;
}
var islem = myTopla(4, 7);
console.log("Toplam=", islem);
console.clear();


function str(ad, soyad) {
    var adSoyad = ad + " " + soyad;
    // var adSoyad = ad.concat(soyad);
    return adSoyad
}

var islem1 = str("Ali", "Veli")
console.log("Ad Soyad:", islem1);
