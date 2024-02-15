// Giriş işlemi için Promise
const loginPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const loginOlduMu = true; // Gerçek giriş durumunu buradan al
      loginOlduMu
        ? resolve("login işlemi başarılı")
        : reject("login BAŞARISIZ..");
    }, 3000);
  });
};

// Makaleleri getirme işlemi için Promise
const makalePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const makalesiVarMi = true; // Gerçek makale durumunu buradan al
      makalesiVarMi
        ? resolve([{ id: 1, post: "asdasdasdasd asdasd" }])
        : reject("makaleleri BULUNAMADI");
    }, 1000);
  });
};

// Yorumları getirme işlemi için Promise
const yorumPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const yorumlarVarMi = true; // Gerçek yorum durumunu buradan al
      yorumlarVarMi
        ? resolve([{ id: 1, yorum: "Harika bir makale!" }])
        : reject("yorumlar BULUNAMADI");
    }, 1500);
  });
};

// Giriş, makale ve yorum işlemlerini gerçekleştirme
loginPromise()
  .then((loginSonucu) => {
    console.log(loginSonucu);
    makalePromise()
      .then((makaleler) => {
        console.log("makaleler geldi");
        console.log(makaleler);
        yorumPromise()
          .then((yorumlar) => {
            console.log("yorumlar geldi");
            console.log(yorumlar);
          })
          .catch((hataYorum) => {
            console.log(hataYorum);
          })
          .finally(() => {
            console.log("yorum işlemleri bitti.. (başarılı/başarısız)");
          });
      })
      .catch((hataMakale) => {
        console.log(hataMakale);
      })
      .finally(() => {
        console.log("makale işlemleri bitti.. (başarılı/başarısız)");
      });
  })
  .catch((hataLogin) => {
    console.log(hataLogin);
  })
  .finally(() => {
    console.log("giriş işlemi bitti.. (başarılı/başarısız)");
  });

//   Farklar şunlardır:

// Zincirleme Yapısı: İlk olarak, benim örneğimde .then() zinciri içinde doğrudan makalePromise fonksiyonunu çağırıyorum ve bu şekilde işlemleri zincirleme sağlıyorum. Öğretmenin örneğinde ise, loginPromise'in .then() bloğu içinde ayrıca bir iç .then() zinciri daha kullanarak makalePromise fonksiyonunu çağırıyor.

// catch ve finally Kullanımı: Benim örneğimde .catch() ve .finally() blokları tek bir seviyede ve zincirin sonunda bulunuyor. Öğretmenin örneğinde ise her .then() zinciri için ayrı ayrı catch bloğu ve finally bloğu eklenmiş.

// Giriş, makale ve yorum işlemlerini gerçekleştirme
// loginPromise()
//   .then((loginSonucu) => {
//     console.log(loginSonucu);
//     return makalePromise();
//   })
//   .then((makaleler) => {
//     console.log("makaleler geldi");
//     console.log(makaleler);
//     return yorumPromise();
//   })
//   .then((yorumlar) => {
//     console.log("yorumlar geldi");
//     console.log(yorumlar);
//   })
//   .catch((hataMesaji) => {
//     console.log(hataMesaji);
//   })
//   .finally(() => {
//     console.log("Tüm işlemler bitti.. (başarılı/başarısız)");
//   });
