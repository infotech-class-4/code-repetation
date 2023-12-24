
/* STRING METHODLAR

length
slice(strat, end)         dilimleme
replace()                eskinin yerine yenisini koyar
toUpperCase()
toLowerCase()
concat()         birlestirir
trim()           bosluk sayisi
trimStart()      bastaki bosluklari kaldirir
trimEnd()         sondaki bosluklari kaldirir
charAt()      indis no daki karakteri verir
split()        ayirir 

*/ 

var text = "Bugun hava cok guzel."  //bosluklari da sayar
console.log(text.length);



console.log(text.slice(0,5));
console.log(text.slice(10));
console.log(text.slice(-12, -1));
console.log(text.slice(-12));

console.clear();


console.log(text.replace("guzel", "yagmurlu"));  //var olani yenisi ile  degistime

console.log(text.toLocaleUpperCase());

console.log(text.toLocaleLowerCase());

console.clear();


var strBirlestir1="Ali";
var strBirlestir2="Gel";
console.log(strBirlestir1.concat(strBirlestir2));


var strEmpty="        Hava bugun              "
console.log(strEmpty.length);  //32 imis
console.log(strEmpty.trim().length);  //10 bosluksuz sayi
console.log(strEmpty.trimStart().length);  //24  bastaki bosluklari iptal edersek sayi bu
console.log(strEmpty.trimEnd().length);  //18    sondaki bosluklari iptal edersek


console.clear();


var text="Bugun hava cok guzel."
console.log(text.charAt(0)); //B
console.log(text.charAt(7)); //a


console.log(text.split(" "));
console.log(text.split(""));
console.log(text.split(","));

