
    
const kaynakUrl = "https://api.collectapi.com/book/newBook";
const baglantiAyarlari = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 0mblc2BFs4pmvRwBmh3T3H:52gypl49PTk21Wqw3XKb9O"
  }
};

let sunucuYaniti;
let kitaplar;

async function kitapListele() {
    try {
      sunucuYaniti = await fetch(kaynakUrl, baglantiAyarlari);
      kitaplar = await sunucuYaniti.json();
      console.log(kitaplar);
  
      kitaplar.result.forEach(kitap => { 

        const kitapKarti = document.createElement('div');
        kitapKarti.classList.add('book-card');
        document.querySelector(".kitaplar").appendChild(kitapKarti);

        const kitapBasligi=document.createElement("h3");
        kitapBasligi.innerHTML=kitap.title;
        kitapKarti.appendChild(kitapBasligi);

        const kitapKapak=document.createElement("img");
        kitapKapak.src=kitap.image;
        kitapKarti.appendChild(kitapKapak);


      });

     
    } catch (error) {
      console.error(error);
    }
  }




  kitapListele();
  