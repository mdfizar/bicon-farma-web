// begin header ======
var topNavItem = document.querySelector(".nav-top-item");
window.addEventListener('scroll', function () {
  var bodyScrol = document.documentElement.scrollTop || document.body.scrollTop;
  if (bodyScrol > 200) {
    topNavItem.style.height = "0px";
    topNavItem.style.overflow = "hidden";
  } else if (bodyScrol < 10) {
    topNavItem.style.height = "";
    topNavItem.style.overflow = "";
  }
});
// end header  =======
// begin banner slider ======
var swiper = new Swiper(".banner-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// end banner slider =====
// banner section left text typeing effect ========
const texts =
  ["ONE  OF THE LARGEST FINEST MANUFACTURING FACILITIES IN BANGLADESH", "ONE  OF THE LARGEST FINEST MANUFACTURING FACILITIES IN BANGLADESH", "ONE  OF THE LARGEST FINEST MANUFACTURING FACILITIES IN BANGLADESH"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    document.getElementById("banner-section-title-typing-effect").innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      document.getElementById("banner-section-title-typing-effect").innerHTML = "";
      charIndex = 0;
      textIndex++;
      if (textIndex < texts.length) {
        setTimeout(typeEffect, 100); // 1-second pause before typing the next text
      } else {
        // Optional: Restart from the beginning after a delay
        textIndex = 0;
        setTimeout(typeEffect, 100); // 1-second pause before restarting
      }
    }, 200); // 1-second pause before clearing the current text
  }
}
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
// end banner section left text typeing effect ========
// begin becon brand slider ===========
var swiper = new Swiper(".brand-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end becon brand slider =======
// begin becon new brand slider ===========
var swiper = new Swiper(".new-brand-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end beacon new brand slider =======
// begin news media slider ==========
var swiper = new Swiper(".news-media-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end news media slider ==========
// aos =======
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    anchorPlacement: 'top-bottom' 
  });