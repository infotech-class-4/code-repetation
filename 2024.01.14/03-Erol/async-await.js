// Backend Tarafı - Async-Await Kullanımı

// Makale verileri
const makaleler = [
  { id: 1, post: "asdasdasdasd asdasd" },
  { id: 2, post: "asdasdasdasd asdasd" },
];

// Giriş ve makale promise'ları için gerekli değişkenler
const loginOlduMu = true;
const makalesiVarMi = true;

// Giriş işlemini gerçekleştiren promise
const loginPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      loginOlduMu
        ? resolve("login işlemi başarılı")
        : reject("login BAŞARISIZ..");
    }, 3000);
  });
};

// Makaleleri getiren promise
const makalePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      makalesiVarMi ? resolve(makaleler) : reject("makaleleri BULUNAMADI");
    }, 1000);
  });
};

// Giriş ve makale promise'ları kullanarak işlemleri gerçekleştir
const islem = async () => {
  try {
    const loginSonucu = await loginPromise();
    console.log(loginSonucu);

    const makaleler = await makalePromise();
    console.log("makaleler geldi");
    console.log(makaleler);
  } catch (hata) {
    console.log(hata);
  }
};

// Async-Await kullanarak işlemi başlat
islem();
