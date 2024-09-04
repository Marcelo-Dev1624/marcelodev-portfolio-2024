const switcher = document.getElementById("colorSchemeSwitcher");
const logo = document.getElementById('navLogoImg');
const html = document.querySelector('html');

let currentColorScheme = window.localStorage.getItem("colorScheme");

if (!currentColorScheme) {
  currentColorScheme = "dark-mode";
  window.localStorage.setItem("colorScheme", currentColorScheme);
}

// Apply the saved color scheme on page load
applyColorScheme(currentColorScheme);

function applyColorScheme(currentColorScheme) {
  if (currentColorScheme === "dark-mode") {
    body.classList.add('dark-mode');
    body.classList.remove("light-mode");
    logo.src = "/images/logo_blanco.png";
    switcher.classList.add("accent");
    html.classList.remove("light-mode");
    
    switcher.classList.remove("secondary");
    switcher.classList.add("fa-sun");
    switcher.classList.remove("fa-moon");
  } else {
    body.classList.add("light-mode");
    body.classList.remove('dark-mode');
    logo.src = "/images/logo_negro.png";
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
    switcher.classList.add("fa-moon");
    switcher.classList.remove("fa-sun");
  }
}

function changeColorScheme() {
  switcher.addEventListener("click", () => {
    const storedColorScheme = window.localStorage.getItem("colorScheme");

    if (storedColorScheme === "dark-mode") {
      body.classList.remove('dark-mode');
      body.classList.add("light-mode");

      logo.src = "/images/logo_negro.png";

      switcher.classList.remove("fa-sun");
      switcher.classList.remove("accent");

      switcher.classList.add("secondary");
      switcher.classList.add("fa-moon");

      currentColorScheme = "light-mode";

    } else {
      body.classList.remove("light-mode");
      body.classList.add('dark-mode');

      logo.src = "/images/logo_blanco.png";

      switcher.classList.add("accent");
      switcher.classList.remove("secondary");
      switcher.classList.remove("fa-moon");
      switcher.classList.add("fa-sun");

      currentColorScheme = "dark-mode";
    }

    // Update the value in localStorage
    window.localStorage.setItem("colorScheme", currentColorScheme);
    console.log(currentColorScheme);
  });
}

changeColorScheme();