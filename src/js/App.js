let index = 0;
function moveCarousel() {
  const carousel = document.getElementById("carousel");
  index = (index + 1) % 3;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(moveCarousel, 3000);

let index1 = 0;
function moveCarousel1() {
  const carousel1 = document.getElementById("carousel1");
  index1 = (index1 + 1) % 3;
  carousel1.style.transform = `translateX(-${index1 * 100}%)`;
}
setInterval(moveCarousel1, 3000);

let index2 = 0;
function moveCarousel2() {
  const carousel2 = document.getElementById("carousel2");
  index2 = (index2 + 1) % 3;
  carousel2.style.transform = `translateX(-${index2 * 100}%)`;
}
setInterval(moveCarousel2, 3000);

const translations = {
  es: {
    inicio: "Inicio",
    inmuebles: "Inmuebles",
    contacto: "Contacto",
    bienvenido: "¡Bienvenido a Rising Eagle!",
    encontrar: "Encuentra un hogar comodo y agradable",
    contactanos: "Contactanos",
    inmDestacados: "Inmuebles Destacados",
    comprar: "Comprar",
    verMas: "Ver Más",
    pregunta: "PREGUNTA POR TU APARTAMENTO DE PREFERENCIA",
    info: "Obtenga información totalmente gratis sobre la renta de tu departamento o casa",
  },
  en: {
    inicio: "Home",
    inmuebles: "Properties",
    contacto: "Contact",
    bienvenido: "Welcome to Rising Eagle!",
    encontrar: "Find a comfortable and pleasant home",
    contactanos: "Contact us",
    inmDestacados: "Featured Properties",
    comprar: "Buy",
    verMas: "See More",
    pregunta: "ASK ABOUT YOUR PREFERRED APARTMENT",
    info: "Get completely free information about renting your apartment or house",
  },
};

let currentLang = "es";

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  updateContent();
  document.getElementById("translateBtn").textContent =
    currentLang === "es" ? "English" : "Español";
}

function updateContent() {
  // Actualizar menú
  document.querySelector(".menu li:nth-child(1) a").textContent =
    translations[currentLang].inicio;
  document.querySelector(".menu li:nth-child(2) a").textContent =
    translations[currentLang].inmuebles;
  document.querySelector(".menu li:nth-child(3) a").textContent =
    translations[currentLang].contacto;

  // Actualizar texto principal
  document.querySelector(".text-overlay").textContent =
    translations[currentLang].bienvenido;
  document.querySelector(".Text-overlay").textContent =
    translations[currentLang].encontrar;
  document.querySelector(".boton-overlay").textContent =
    translations[currentLang].contactanos;

  // Actualizar título de inmuebles
  document.querySelector(".Title").textContent =
    translations[currentLang].inmDestacados;

  // Actualizar botones de comprar
  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.textContent = translations[currentLang].comprar;
  });

  // Actualizar sección Hero
  document.querySelector(".Hero .content h1").textContent =
    translations[currentLang].pregunta;
  document.querySelector(".Hero .content p").textContent =
    translations[currentLang].info;
  document.querySelector(".Hero .btn").textContent =
    translations[currentLang].verMas;
}
