const kullaniciBilgileri = {
  normal: { age: 20 },
  admin: { age: 30 },
};

const girisYap = (
  kullaniciTur,
  ikinciIslemFonksiyonu,
  yonlendirmeFonksiyonu
) => {
  setTimeout(() => {
    if (kullaniciBilgileri[kullaniciTur].age >= 18) {
      console.log("Giriş başarılı");
      ikinciIslemFonksiyonu();
    } else {
      console.log("Yaşınız 18'den küçük, içeriğe erişim izniniz yok");
      yonlendirmeFonksiyonu();
    }
  }, 1000);
};

const makaleleriGoster = () => {
  setTimeout(() => {
    console.log("Makaleler gösteriliyor");
  }, 2000);
};

const adminPaneliniGoster = () => {
  setTimeout(() => {
    console.log("Admin paneli gösteriliyor");
  }, 3000);
};

const anaSayfayaYonlendir = () => {
  setTimeout(() => {
    console.log("Ana sayfaya yönlendiriliyorsunuz");
  }, 4000);
};

// Normal kullanıcı senaryosu
girisYap("normal", makaleleriGoster, anaSayfayaYonlendir);

// Admin kullanıcı senaryosu
girisYap("admin", adminPaneliniGoster, anaSayfayaYonlendir);
