function myFunction() {
  console.log("Hello World!");
}

myFunction();

function myFunc(x, y) {
  console.log(x + y);
}

myFunc(4, 5);
myFunc("as", 5);


function myTopla (x,y){
    var result = x + y

    return result
}

var islem = myTopla(5,4)

console.log(islem);


function str (ad, soyad){
    // var adSoyad = ad + soyad
    var adSoyad = ad.concat(soyad)

    return adSoyad
}

console.log(str("Fatih ","GORKEM"));

