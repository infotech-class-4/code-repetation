function myfunc(x) {
  return 2 * x + 1;
}
var result = myfunc(5);
console.log(result);

function myfunc1(name, surname) {
  return name + " " + surname;
}
var reslut1 = myfunc1("çağrı", "kaya");
console.log(reslut1);

//object

var myobject = {
  firstname: "Ali",
  surname: "Yilmaz",
  age: 28,
};
console.log(myobject.firstname);

//array
var myarray = [
  "fb",
  "gs",
  "bjk",
  "tuzlaspor",
  [{ lig1: "1.lig", lig2: "2.lig" }],
];
console.log(myarray[4][0].lig1 + " sampiyonu " + myarray[0]);

//arrays methods

var fruit = ["apple", "banana", "orange", "mango"];

console.log(fruit);
console.log(fruit.length);

console.clear();

//tostring
var fruit = ["apple", "banana", "orange", "mango"];

console.log(fruit.toString());
console.clear();

//join()

console.log(fruit.join(" / "));

//pop() sondan eleman kaldırıyor

var result = fruit.pop();
console.log(fruit);
console.log(result);

console.clear();

//push()yeni eleman ekliyor

var resultpush = fruit.push("kiwi");
console.log(fruit);
console.log(resultpush);

//shift() baştan eleman kaldırıyor

var resultshift = fruit.shift();
console.log(resultshift);

//unshift

//concat()birleştirme yapıyor

var mygirls = ["ayşe", "fatma"];
var myboys = ["ahmet", "mehmet"];
var myfamily = ["hasan", "zeynep"];

console.log(mygirls.concat(myboys));
//veya
console.log(mygirls.concat(myboys, myfamily));
//veya
console.log(mygirls.concat("cansu"));

console.clear();

//splice ekleme veya kaldırma yapıyor

var fruit = ["apple", "banana", "orange", "mango"];

fruit.splice(2, 0, "lemon", "kiwi");
console.log(fruit);
console.clear();

//slice diziyi böler ve yeni bir dizi oluşturur . ilk dizi aynı kalır

var fruit = ["apple", "banana", "orange", "mango"];
var resultslice = fruit.slice(1);
console.log(resultslice);
console.log(fruit);

var resultslice2 = fruit.slice(1, 3);
console.log(resultslice2);
console.log(fruit);

console.clear();

// setTimeout(function name() {
//   console.log("kontrol ediliyor...");
// }, 2000);
// console.log("adım 1");

//loops döngüler
//1-for döngüsü

// for(baslangıc ; kosul ; artis/değişim ){
//   döngü kodlarımız
// }

for (var i = 0; i < 5; i++) {
  console.log(i);
}

for (var i = 0; i <= 100; i++) {
  console.log(i);
}

for (var i = 0; i < 50; i++) {
  console.log("bir daha yalan söylemeyeceğim");
}

var mynumber = [2, 3, 4, 6, 7, 8, 9, 6, 4, 3, 21, 12, 2, 12, 5, 6, 7];
for (var i = 0; i < mynumber.length; i++) {
  console.log(mynumber[i]);
}

var mystring = ["mavi", "sari", "yesil", "kirmizi", "siyah"];

for (var i = 0; i < mystring.length; i++) {
  console.log(mystring[i]);
}

//2- while döngüsü

// while (kosul){
//   kodlarımızı buraya yazıyoruz
// }

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

var mynumber = [2, 3, 4, 6, 7, 8, 9, 6, 4, 3, 21, 12, 2, 12, 5, 6, 7];
var i = 0;
while (i < mynumber.length) {
  console.log(mynumber[i]);
  i++;
}

console.clear();

// 3-do-while

// do{
//   buraya kodlar geliyor          do döngüsünde kod her türlü bir kere çalışıyor  while da koşul
// }                                sağlamazsa calışmaz
// while(kosul)

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

console.clear();

//conditions if else

// 1. if
// if(koşul){
//   koşul dogru olduktan sonra calışacak kodlar
// }

var x = -5;
if (x > 0) {
  console.log(x, "pozitif sayıdır");
} else {
  console.log(x, "negatif  sayıdır");
}

var ispass = true;
if (ispass === true) {
  console.log("tebrikler geçtiniz");
}

console.clear();

var student = {
  notort: 50,
  ispass: true,
};

if (student.notort >= 60 && ispass) {
  console.log("tebrikler gectiniz");
} else {
  console.log("üzgünüz kaldiniz");
}

console.clear();

//2. if else

var students = [
  { name: "ali", not: 45 },
  { name: "veli", not: 49 },
  { name: "ahmet", not: 70 },
  { name: "mehmet", not: 80 },
  { name: "ömer", not: 90 },
];

for (var i = 0; i < students.length; i++) {
  if (students[i].not >= 60) {
    console.log(students[i].name, "tebrikler geçtiniz");
  } else {
    console.log(students[i].name, "üzgünüz kaldınız");
  }
}

console.clear();

//3. if elseif

var student = {
  notort: 40,
};

if (student.notort >= 80) {
  console.log("heel goed");
} else if (student.notort >= 60 && student.notort < 80) {
  console.log("goed");
} else if (student.notort >= 50 && student.notort < 60) {
  console.log("voldoende");
} else {
  console.log("niet voldoende");
}

console.clear();

var days = [
  "pazartesi",
  "sali",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
  "pazar",
];

for (var i = 0; i < days.length; i++) {
  if (i < 5) {
    console.log(days[i], "calışma günü");
  } else {
    console.log(days[i], "tatil günü");
  }
}
