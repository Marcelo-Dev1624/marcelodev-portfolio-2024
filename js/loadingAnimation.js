//const html = document.querySelector('html');
const loadAnimation = document.getElementById("onload-animation");
const animationLogoWhite = document.getElementById("animation-logo-white");
const animationLogoGreen = document.getElementById("animation-logo-green");
//const animationText = document.getElementById("animationText");
const html = document.querySelector("html");

window.addEventListener("load", () => {
  setTimeout(() => {
    animationLogoWhite.classList.add("fadeIn");
  }, 1000);

  setTimeout(() => {
    animationLogoWhite.classList.add("fadeOut");
    animationLogoGreen.classList.add("fadeIn");
   // animationText.classList.add("fadeIn");
  }, 2500);


  setTimeout(() => {
    animationLogoGreen.classList.add("fadeOut");
    //animationText.classList.add("fadeOut");
    setTimeout(() => {
      loadAnimation.classList.add("onload");
    }, 500);
  }, 3500);
  
});


