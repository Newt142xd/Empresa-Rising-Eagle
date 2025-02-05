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
