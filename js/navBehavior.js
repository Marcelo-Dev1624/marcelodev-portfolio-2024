const body = document.querySelector("body");
const innerNav = document.getElementById("innerNav");
const navToggler = document.getElementById("navToggler");

const menuItems = document.querySelectorAll(".menu-item");
const activeIndicator = document.querySelector(".menuActiveIndicator");
const navMenu = document.querySelector(".nav-menu");

// Get the active section's ID from local storage
const activeSectionId = localStorage.getItem("activeSectionId");

// Set the active section if it exists in local storage
if (activeSectionId) {
  const activeMenuItem = document.querySelector(
    `.menu-item[data-section-id="${activeSectionId}"]`
  );

  if (activeMenuItem) {
    // Remove active class from all menu items
    menuItems.forEach((item) => item.classList.remove("active"));
    // Add active class to the corresponding menu item
    activeMenuItem.classList.add("active");
    updateActiveIndicator();
  }
} else {
  // If no active section ID is found in local storage, set the default menu item as active
  const defaultMenuItem = document.querySelector(".menu-item.active");
  if (defaultMenuItem) {
    // Remove active class from all menu items
    menuItems.forEach((item) => item.classList.remove("active"));
    // Add active class to the default menu item
    defaultMenuItem.classList.add("active");
    updateActiveIndicator();
  }
}

// Call updateActiveIndicator when the page loads
window.addEventListener("load", updateActiveIndicator);

// Call updateActiveLinkAndIndicator when a link is clicked
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Remove active class from all menu items
    menuItems.forEach((item) => item.classList.remove("active"));
    // Add active class to the clicked menu item
    menuItem.classList.add("active");
    // Update the active indicator position
    updateActiveIndicator();
    // Store the active section's ID in local storage
    localStorage.setItem("activeSectionId", menuItem.dataset.sectionId);

    // Scroll to the corresponding section
    const sectionId = menuItem.dataset.sectionId;
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });

    // Update active link and indicator immediately
    updateActiveLinkAndIndicator();
  });
});

// Add event listener to window scroll event
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > 0) {
    innerNav.classList.add("scrolled");
  } else {
    innerNav.classList.remove("scrolled");
  }
  // Update active link and indicator based on scroll position
  updateActiveLinkAndIndicator();
});

function updateActiveLinkAndIndicator() {
  const sections = document.querySelectorAll(".section");
  const currentScrollPosition = window.scrollY;
  let activeSectionId = null;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition < sectionBottom
    ) {
      activeSectionId = section.id;
    }
  });

  if (activeSectionId) {
    const activeMenuItem = document.querySelector(
      `.menu-item[data-section-id="${activeSectionId}"]`
    );
    if (activeMenuItem) {
      // Remove active class from all menu items
      menuItems.forEach((item) => item.classList.remove("active"));
      // Add active class to the corresponding menu item
      activeMenuItem.classList.add("active");
      updateActiveIndicator();
      // Store the active section's ID in local storage
      localStorage.setItem("activeSectionId", activeSectionId);
    }
  }
}

function updateActiveIndicator() {
  console.log("updateActiveIndicator called");
  const activeMenuItem = document.querySelector(".menu-item.active");
  if (activeMenuItem) {
    const rect = activeMenuItem.getBoundingClientRect();
    const navMenuRect = navMenu.getBoundingClientRect();
    const indicatorWidth = rect.width;
    const indicatorLeft = rect.left - navMenuRect.left;

    // Ensure the indicator doesn't exceed the container limits
    if (indicatorLeft + indicatorWidth > navMenuRect.width) {
      indicatorWidth = navMenuRect.width - indicatorLeft;
    }

    activeIndicator.style.left = `${indicatorLeft}px`;
    activeIndicator.style.width = `${indicatorWidth}px`;
  }
}

//Animate navbar items on display
navToggler.addEventListener("click", () => {
  navMenu.classList.toggle("opened");
  navToggler.classList.toggle("opened");

  if (
    innerNav.classList.contains("scrolled") &&
    navMenu.classList.contains("opened")
  ) {
    
    innerNav.classList.add("scrolled");
  }

  const menuItems = document.querySelectorAll(".nav-menu .menu li");

  if (!navMenu.classList.contains("opened")) {
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove("show");
      }, index * 100); // 100ms de retraso entre cada elemento
    });
  } else if (navMenu.classList.contains("opened")) {
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 100); // 100ms de retraso entre cada elemento al cerrar
    });
  }
});

