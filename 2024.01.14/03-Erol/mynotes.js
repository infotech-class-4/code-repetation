//Obje (Object) Erişimi:
// Bir obje oluşturalım
const kullanici = {
  ad: "John",
  soyad: "Doe",
  yas: 25,
};

// Objedeki bir özelliğe erişim
console.log(kullanici.ad); // 'John'
console.log(kullanici["soyad"]); // 'Doe'
const ozellikAdi = "soyad";
console.log(kullanici[ozellikAdi]); // 'Doe'

//Dizi (Array) Erişimi:
// Bir dizi oluşturalım
const sayilar = [1, 2, 3, 4, 5];

// Dizideki bir elemana erişim
console.log(sayilar[0]); // 1
console.log(sayilar[2]); // 3
