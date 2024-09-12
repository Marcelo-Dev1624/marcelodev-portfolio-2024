//const html = document.querySelector('html');
const loadAnimation = document.getElementById("onload-animation");
const animationLogoWhite = document.getElementById("animation-logo-white");
const animationLogoGreen = document.getElementById("animation-logo-green");
const html = document.querySelector('html');

window.addEventListener("load", () => {
  setTimeout(() => {
    animationLogoWhite.classList.add("fadeIn");
  }, 1000);

  setTimeout(() => {
    animationLogoWhite.classList.add('fadeOut');
    animationLogoGreen.classList.add('fadeIn');
  }, 2500);

  setTimeout(() => {
    
  }, 3000);

  setTimeout(() => {
    animationLogoGreen.classList.add("fadeOut");
    loadAnimation.classList.add("onload");
    
  }, 4000);
});

setTimeout(() => {
    html.classList.remove('onload');
}, 5000);
