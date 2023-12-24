var str = "Hello World";
var str1 = "3";
var str2 = "Dunya";

var str3 = "Merhaba 'Dunya'";

console.log(str3);

var str4 = 'Merhaba "Dunya"';

console.log(str4);

console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);

console.clear();

var text = "Bugün hava çok güzel.";
console.log(text.length);

console.log(text.slice(0, 5));
console.log(text.slice(10));
console.log(text.slice(-12, -1));
console.log(text.slice(-12));
console.clear();


console.log(text.replace("güzel", "yagmurlu"));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.clear()


var strBirlestir1 = "Ali"
var strBirlestir2 = "Veli"

console.log(strBirlestir1.concat(strBirlestir2));

var strEmpty = "             Hava bugün                "

console.log(strEmpty.length);
console.log(strEmpty.trim().length);
console.log(strEmpty.trimStart());
console.log(strEmpty.trimStart().length);
console.log(strEmpty.trimEnd());
console.log(strEmpty.trimEnd().length);

console.clear();


var text = "Bugün hava çok güzel.";
var text2 = "Ahmet, Ali, Veli"
console.log(text.charAt(0));
console.log(text.charAt(5));


console.log(text.split(" "));
console.log(text2.split(","));







