//f(x)=x**2 + xy + y   //matematikteki fonksiyopnlar



function myFunction(){
    console.log("Hello World!");
}
myFunction()


// surekli tekrar istenmez code yaziminda o yuzden tek bir satir fonksiyon icinde yazariz 

function myToplaveEkranaYazdir(x, y){
console.log(x + y);
}

myToplaveEkranaYazdir(3,7)  

//fonksiyona parametre verilince asagida cagirirken argument olarak deger veya bir fonksiyon da yazilabilir

myToplaveEkranaYazdir("as",6)// burda ise yanyana yazar


console.clear()

//return ile console.logu disarda yazdirabiliriz.dondurecegi islemi burda yazariz.bizim console.log a ihtiyacvimiz sadece gormek icin ama return e her zaman ihtiyacimiz var
function myTopla(x,y){

    var result=x +y
    return result
}
var islem= myTopla(6,3)
console.log(islem);




function str(ad, soyad){
    var birlestir=ad.concat(soyad)
    // var birlestir=ad + soyad
    return birlestir
}
var adSoyad=str("özlem ","akcicek")
console.log(adSoyad);

