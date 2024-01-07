// 7. haftanın konularına devam ediyoruz
//  SWİTCH CASE

// switch (key) {
//     case value:     CASELERDEN BİRDEN FAZLA OLABİLİR
//     case value1:
//         break;

//     default:        KOŞULLAR SAĞLANMAZSA DEFAULT DEĞERİNİ ALIR
//         break;
// }

var fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("gelen değer apple");
    break;

  case "kiwi":
    console.log("gelen değer kiwi");
    break;

  case "banana":
    console.log("gelen değer banana");
    break;

  default:
    console.log("değer bulunamadı");
    break;
}

var days = [
  "pazartesi",
  "sali",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
  "pazar",
];

switch (days[0]) {
  case "pazartesi":
  case "sali":
  case "çarşamba":
  case "perşembe":
  case "cuma":
    console.log(days[0], "çalışma günüdür");
    break;

  case "cumartesi":
  case "pazar":
    console.log(days[0], "tatil günüdür");

  default:
    console.log("geçersiz değer");
    break;
}
console.clear();

//SCOPE  kapsam sınır demek
// sınır kavramı olarak düsünülebilir

// var
//let
//const

//{} sınırları süslü parantez belirler

// var num1= 1 --globel scope
// let num2= 2 --globel scope

// var ile alt alta bir kaç kere farklı değerler verebiliriz
// let ile tek değer verebiliyorsun

// var her yerde tanımlar globel olur
//let için sınır gereklidir
//1. video 15. dk

//function myfunc() {
//  let carName = "volvo"; // function scope
//}
// console.log(carName);  burada hata vardır
//
//
//
//
//
//ES6 ÖZELLİKLERİ
//LET , CONST

// const numconst = 10;             ** const ile atanan değer
// console.log(numconst);            sabit olur ,2. değer atanmaz*
// numconst12;

//Literal template ``

const firstname = "ali";
const surname = "demir";
console.log("ögrencinin adı :" + firstname + " " + surname);
console.log(
  `ögrencinin adı : ${firstname}    --// ${surname}notları bunlardır `
);

//
//Function parametre default value (varsayılan parametre)
//name değişkenine function'da değer atanabilir veya functionu çağırırken de değer atanabilir

function func(parametre, name = "fuat", surname = "korkmaz") {
  console.log(`${parametre} ${name} ${surname}`);
}
func("deneme", "ali");

console.clear();

//arrow function

// function name() {}
// var arrowfunc=()=>{}

const carName = "opel";
const carmodel = "astra";

var carMergeName = () => {
  console.log(`${carName} ${carmodel}`);
};
carMergeName();

//---------veya

var carMergeName2 = (parametre1, parametre2) => {
  console.log(`${parametre1} ${parametre2}`);
};
carMergeName2("volvo", "xc90");

// spread operatorr : sembolu : ...

const orijinalArray = [1, 2, 3];
const copyArray = [...orijinalArray];

console.log(copyArray);

const array1 = [2, 17, 19, 5, "kemal"];
const array2 = [5, 7, 8, 4, 2];

const mergeArray = [...array1, ...array2];

console.log(mergeArray);

const orijinalObje = {
  firstname: "kemal",
  surname: "demir",
};
console.log(orijinalObje);

const copyObje = { ...orijinalObje, age: 34, meslek: "mühendis" };
console.log(copyObje);

//functinolarda spread

function normalfunc(...arg) {
  let sum = 0;

  for (var i = 0; i < arg.length; i++) {
    sum += arg[i];
  }
  return sum;
}
var result = normalfunc(15, 108, 256, 1986, 2356);
console.log(`girilen sayilarin toplami:${result}`);

// for in ve for of

console.clear();

var arrayBasic = [2, 3, 4, 5, 6, 7];
for (let i = 0; i < arrayBasic.length; i++) {
  console.log(arrayBasic[i]);
}
console.log("+++++++++++++++");

for (const iterator of arrayBasic) {
  // itaratör: yenilikci , herhangi bir değer verebiliriz
  console.log(iterator);
}

for (const key in orijinalObje) {
  console.log(key);
}

// for in ile for of arasındaki fark
//
//
//

// higer order functions//

var number = [2, 1, 3, 5, 9, 7, 45, 65, 56];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

//foreach()

console.log("+++++++++++++++");

number.forEach((item) => {
  console.log(item);
});

console.log("++++++++++++++");
number.forEach((item) => {
  console.log(item * 2);
});

console.log("++++++++++++++");

number.forEach(function (item) {
  console.log(item);
});

console.clear();

//map()

var newNumbers = number.map((item) => {
  return item * 2;
});
console.log(newNumbers);

//filter()
var number = [2, 1, 3, 5, 9, 7, 45, 65, 56];
var eventNumbers = number.filter((item) => {
  return item % 2 === 0;
});
console.log(eventNumbers);

var names = ["ali", "veli", "kemal", "cansu"];

var filteredName = names.filter((item) => {
  return item === "veli";
});

console.log(filteredName);

console.clear();

//find()   : belli bir dizi içerisinde bizim koşulumuzu sağlayan değeri bulup döndürmeye saşlayan özellik

var number = [2, 1, 3, 5, 9, 7, 45, 65, 56];

var eventNumber = number.find((item) => {
  return item % 2 === 0;
});
console.log(eventNumber);

//findIndex()   : belirli bir koşulu sağlayan indis numarasını döndürüyor

var eventNumberIndis = number.findIndex((item) => {
  return item % 2 === 0;
});
console.log(eventNumberIndis);

console.clear();

//some     :belirli bir koşulu sağlayan en az bir array elemanı olup olmadığını kontrol edip true yada false döndürüyor

var numbers = [2, 1, 3, 5, 9, 7, 45, 65, 56];

var isEventNumber = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(isEventNumber);

//every() : bütün değerlerin hepsi sağlıyorsa true döndürür

var arealleventnumber = numbers.every((number) => {
  return number > 0;
});
console.log(arealleventnumber);

//reduce() : 0 başlangıç degeri ondan sonra dizi içindeki bütün sayıları toplayıp aynı işlemi yapıyor

var numbers = [2, 1, 3, 5, 9, 7, 45, 65, 56];

const total = numbers.reduce((acc, val) => acc + val, 0);
console.log(total);

const total1 = numbers.reduce((acc, val) => acc + val, 7);
console.log(total1);

// ortalama bulma :

const avg = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
console.log(avg);

//function içinde reduce

function topla(...sayılar) {
  return sayılar.reduce(
    (baslangicsayisi, gelensayılar) => baslangicsayisi + gelensayılar,
    0
  );
}
var resulttotal = topla(2, 5, 5);
console.log(resulttotal);

// ortalamasını alma

function topla1(...sayılar1) {
  return (
    sayılar1.reduce(
      (baslangicsayisi1, gelensayılar1) => baslangicsayisi1 + gelensayılar1,
      0
    ) / sayılar1.length
  );
}
var resulttotal1 = topla1(2, 5, 5);
console.log(resulttotal1);

console.clear();

//push() dizinin sonuna bir değer atar
//pop() dizinin sonundan bir değer siler

var myArray = ["ali"];
console.log(myArray);

function myPush(parametre) {
  myArray[myArray.length] = parametre;
}
myPush("kemal");
console.log(myArray);

console.log("+++++++++++++++++++++++++++++");

var myArray1 = ["veli"];
console.log(myArray1);

function myPush1(...arg) {
  for (let i = 0; i < arg.length; i++) {
    myArray1[myArray1.length] = arg[i];
  }
}
myPush1("kemal", "ahmet", "mehmet");
console.log(myArray1);

console.clear();
// pop ()

// Find Pruducts (ürün bulma uygulaması)

var products = [
  { productName: "acer asprie 4", categorie: "tecnoloji", price: "1000&" },
  { productName: "lenovo v15", categorie: "tecnoloji", price: "1000&" },
  { productName: "acer asprie 5", categorie: "tecnoloji", price: "1000&" },
  { productName: "acer asprie 3", categorie: "tecnoloji", price: "1000&" },
  { productName: "lenovo v14", categorie: "tecnoloji", price: "1000&" },
  { productName: "acer asprie 2", categorie: "tecnoloji", price: "1000&" },
  { productName: "lenovo v13", categorie: "tecnoloji", price: "1000&" },
  { productName: "asus viva", categorie: "tecnoloji", price: "1000&" },
  {
    productName: "Microsoft surface 74",
    categorie: "tecnoloji",
    price: "1000&",
  },
  {
    productName: "Microsoft surface 2",
    categorie: "tecnoloji",
    price: "1000&",
  },
  {
    productName: "Microsoft surface 7",
    categorie: "tecnoloji",
    price: "1000&",
  },
];
let userProductName = prompt("bir ürün ismi giriniz");
let filteredProducts = [];

function getFilteredProducts(products) {
  products.forEach((product) => {
    if (
      product.productName
        .toUpperCase()
        .includes(userProductName.toUpperCase(), 0)
    ) {
      filteredProducts.push(product);
    }
  });
}
getFilteredProducts(products);

function writeFilteredProducts(product) {
  product.forEach((product) => {
    console.log("***************");
    console.log(`${product.productName}|${product.categorie}|${product.price}`);
  });
}
writeFilteredProducts(filteredProducts);
