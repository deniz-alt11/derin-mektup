document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");
  const heartContainer = document.getElementById("floating-hearts");

  // Zarf Fonksiyonları
  function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }
  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }

  envelope.addEventListener("click", open);
  btn_open.addEventListener("click", open);
  btn_reset.addEventListener("click", close);

  // Arka Plan Kalp Motoru
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    
    // Rastgele boyut (10px - 30px)
    const size = Math.random() * 20 + 10 + "px";
    heart.style.width = size;
    heart.style.height = size;
    
    // Rastgele yatay pozisyon
    heart.style.left = Math.random() * 100 + "vw";
    
    // Rastgele animasyon süresi (5s - 10s)
    const duration = Math.random() * 5 + 5 + "s";
    heart.style.animationDuration = duration;
    
    // Rastgele şeffaflık
    heart.style.opacity = Math.random() * 0.5 + 0.2;

    heartContainer.appendChild(heart);

    // Animasyon bitince temizle
    setTimeout(() => {
      heart.remove();
    }, parseFloat(duration) * 1000);
  }

  // Sürekli kalp oluştur (her 300ms'de bir)
  setInterval(createHeart, 300);
});
// Arka Plan Kalp Motoru (Güncellendi)
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  
  // Rastgele boyut (15px - 35px arası daha dolgun kalpler)
  const sizeValue = Math.random() * 20 + 15;
  heart.style.width = sizeValue + "px";
  heart.style.height = sizeValue + "px";
  
  // Ekranın altına yayılım
  heart.style.left = Math.random() * 100 + "vw";
  
  // Rastgele hız (6s - 12s arası daha sakin süzülme)
  const duration = Math.random() * 6 + 6 + "s";
  heart.style.animationDuration = duration;
  
  // Renk tonu oynaması (Bazıları daha açık, bazıları daha koyu)
  const colors = ['#ff758c', '#ff4d4d', '#ff85a2', '#d9534f'];
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, parseFloat(duration) * 1000);
}

// Kalp sıklığını biraz azalttım ki ekran boğulmasın
setInterval(createHeart, 450);
document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");
  const heartContainer = document.getElementById("floating-hearts");

  function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }
  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }

  envelope.addEventListener("click", open);
  btn_open.addEventListener("click", open);
  btn_reset.addEventListener("click", close);

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    
    // Boyut çeşitliliği
    const size = Math.random() * 25 + 15 + "px";
    heart.style.width = size;
    heart.style.height = size;
    
    heart.style.left = Math.random() * 100 + "vw";
    
    // Hız (Biraz daha seri akış)
    const duration = Math.random() * 4 + 6 + "s";
    heart.style.animationDuration = duration;
    
    // Butonlarla uyumlu soft renk paleti
    const colors = [
      'rgba(255, 153, 153, 0.5)', // Pembe cam
      'rgba(255, 182, 193, 0.5)', // Açık pembe
      'rgba(255, 77, 77, 0.4)',   // Yumuşak kırmızı
      'rgba(255, 255, 255, 0.3)'  // Beyazımsı cam
    ];
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];

    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, parseFloat(duration) * 1000);
  }

  // Kalp fırlama sıklığını artırdım (Daha yoğun bir his için)
  setInterval(createHeart, 250); 
});
document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");

  // Tek bir fonksiyon üzerinden kontrol (Daha akıcı animasyon için)
  function toggleEnvelope(isOpen) {
    if (isOpen) {
      envelope.classList.add("open");
      envelope.classList.remove("close");
    } else {
      envelope.classList.add("close");
      envelope.classList.remove("open");
    }
  }

  envelope.addEventListener("click", () => toggleEnvelope(true));
  btn_open.addEventListener("click", () => toggleEnvelope(true));
  btn_reset.addEventListener("click", (e) => {
    e.stopPropagation(); // Zarfın tekrar açılmasını engeller
    toggleEnvelope(false);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");

  function openEnv() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function closeEnv() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }

  envelope.addEventListener("click", openEnv);
  btn_open.addEventListener("click", openEnv);
  btn_reset.addEventListener("click", (e) => {
    e.stopPropagation(); 
    closeEnv();
  });
});