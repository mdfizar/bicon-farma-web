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
    ["ONE  OF THE LARGEST FINEST MANUFACTURING FACILITIES IN BANGLADESH","ONE  OF THE LARGEST FINEST MANUFACTURING FACILITIES IN BANGLADESH","ONE  OF THE LARGEST FINEST MANUFACTURING FACILITIES IN BANGLADESH"];
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