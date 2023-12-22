/* var, let, const */

// JavaScript, variable'lari (değişkenleri) bildirmek için "var", "let" ve "const" anahtar kelimelerini kullanır.
// "let" keywordü browser'a (tarayıcı) variable'lar create etmesini (oluşturmasını) söyler
// var, let veya const ne zaman kullanılır?
// 1. Her zaman variable'lari (değişkenleri) declare edin.
// 2. value'nun (değerin) değiştirilmemesi gerekiyorsa daima "const" kullanın
// 3. type'in (türün) değiştirilmemesi gerekiyorsa daima "const" kullanın (Arrays and Objects) (Diziler ve Nesneler)
// 4. Yalnızca "const"u kullanamıyorsanız "let"i kullanın
// 5. "var"ı yalnızca eski browser'lari (tarayıcıları) desteklemeniz gerekiyorsa kullanın.


var str = "Hello World";
var str1 = "3";
var str5 = 3;
var str2 = "Dunya";

var str3 = "Merhaba 'Dünya'";
console.log(str3);

var str4 = 'Merhaba "Dünya"';
console.log(str4);

// Bir JavaScript variable'inin (değişken) data type'ini (veri türünü) bulmak için typeof operatörünü kullanilir.
console.log("typeof: " + str + " is " + typeof str);
console.log("typeof: " + str1 + " is " + typeof str1);
console.log("typeof: " + str2 + " is " + typeof str2);
console.log("typeof: " + str3 + " is " + typeof str3);
console.log("typeof: " + str4 + " is " + typeof str4);
console.log("typeof: " + str5 + " is " + typeof str5);

console.clear();

/*  STRING METHODLAR
    String length
    String slice(start, end)
    String replace(searchValue, newValue)
    String toUpperCase()
    String toLowerCase()
    String concat(string1, string2, ..., stringX)
    String trim()
    String trimStart()
    String trimEnd()
    String charAt(index)
    String split(separator, limit)
*/

// "length" property'si (özelliği) bir stringin uzunluğunu return (döndürür) eder.
var text = "Bugün hava cok güzel!";
console.log("text string'inin uzunlugu: " + text.length);

// slice() methodu bir stringin bir bölümünü çıkarır, çıkarılan kısmı yeni bir stringde döndürür, orjinal string'i degistirmez, 
// start ve end parametreleri stringin çıkarılacak kısmını belirtir.
// ilk position 0'dan baslar 
// Syntax => string.slice(start, end);
// start dahil, end dahil degil
// Bir parametre negatifse position string'in sonundan itibaren sayılır
console.log(text.slice(0, 5)); //0'dan basla, 5'e kadar al ama 5'i alma
console.log(text.slice(11)); //ilk 10'u at, 11'den basla
console.log(text.slice(0, 1)); //sadece ilk karakteri alir
console.log(text.slice(-1)); //sadece son karakteri alir
console.log(text.slice(0)); //bütün stringi alir
console.log(text.slice(-9, -1)); //
console.log(text.slice(-9));
console.clear()


// replacement() methodu, bir stringde bir value  veya regular expression arar
// replacement() methodu, değiştirilen value(ler) ile yeni bir string return eder
// Bir value'yu değiştirirseniz yalnızca ilk örnek değiştirilecektir
// Tüm örnekleri değiştirmek için "/g" modifier set ile regular expression kullanilir
// Genel, büyük/küçük harfe duyarlı olmayan (case insensitive) bir değiştirme icin "/i" kullanilir
// Syntax => string.replace(searchValue, newValue);

console.log(text.replace("güzel", "yagmurlu"));
console.log(
text.replace(/hava|güzel|/gi, function (x) {
     return x.toUpperCase();
   })
 );

//js String Methods https://www.w3schools.com/js/js_string_methods.asp
//js String Reference https://www.w3schools.com/jsref/jsref_obj_string.asp
//js typeof https://www.w3schools.com/js/js_typeof.asp#gsc.tab=0


// toUpperCase() methodu, bir stringi büyük harflere dönüştürür.
// toLowerCase() methodu, bir stringi kücük harflere dönüştürür.
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.clear();

// concat() methodu iki veya daha fazla dizeyi birleştirir.
// Syntax => string.concat(string1, string2, ..., stringX)
var name1 = "Ali"
var name2 = "Veli"
console.log(name1, name2)
console.log(name1 + name2)
console.log(name1.concat(name2))
// Aralarinda bosluk birakmak icin
console.log(name1 + " " + name2);
console.log(name1.concat(" " + name2))
console.clear()


// trim() methodu, bir stringin her iki tarafındaki boşlukları kaldırır.
// Syntax => string.trim() 
var strEmpty = "           Hava bugün                    ";
console.log(strEmpty)
console.log(strEmpty.trim())
console.log(strEmpty.length)
console.log(strEmpty.trim().length)
// trimStart() methodu yalnızca stringin başlangıcındaki boşlukları kaldırır.
console.log(strEmpty.trimStart())
console.log(strEmpty.trimStart().length)
// trimEnd() methodu yalnızca stringin sonundaki boşlukları kaldırır.
console.log(strEmpty.trimEnd())
console.log(strEmpty.trimEnd().length)
console.clear();


// charAt() methodu, bir string'de belirtilen index'teki (position) karakteri döndürür.
// İlk karakterin indeksi 0, ikincisi 1, ...
// Syntax => string.charAt(index)
var text = "Bugun hava cok guzel.";
console.log(text);
console.log(text.charAt(0)) //0.index ilk karakteri verir
console.log(text.charAt(5))
console.log(text.charAt(8))

// split() methodu, bir string'i bir array'e dönüstürür.
// separator olarak (" ") kullanılırsa string sözcükler arasında bölünür.
// separator olarak ("") kullanılırsa string tek karakterlere bölünür.
// Syntax => string.split(separator, limit);
console.log(text);
console.log(text.split(" ")); // Split on spaces
console.log(text.split(",")) // Split on commas
console.log(text.split("|")); // Split on pipe
console.log(text.split("a")); // 
console.log(text.split("")); // Split on omitted

var text2 = "Ahmet,Ali,Veli";
console.log(text2);
console.log(text2.split(" "));
console.log(text2.split(","));
console.log(text2.split("|"));
console.log(text2.split("A"));
console.log(text2.split(""));