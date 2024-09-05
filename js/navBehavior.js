//Defining DOM elements
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
// Add event listener to menu items
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

    // Update active link and indicator after the scroll animation has finished
    setTimeout(() => {
      updateActiveLinkAndIndicator();
    }, 500); // wait for 500ms before updating the active link and indicator

    if (window.matchMedia("(max-width: 768px)").matches) {
      if (!navMenu.classList.contains("closing")) {
        navMenu.classList.add("closing");
        navMenu.classList.remove("opened");
        navToggler.classList.remove("opened");
      }
      setTimeout(() => {
        navMenu.classList.remove("closing");
      }, 1000); // wait for the animation to finish before removing the classes
    }
  });
});

// Add event listener to window scroll event
window.addEventListener("scroll", () => {
  // Check if viewport width is above iPad size (768px)
  if (window.matchMedia("(min-width: 768px)").matches) {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > 0) {
      innerNav.classList.add("scrolled");
    } else {
      innerNav.classList.remove("scrolled");
    }
    // Update active link and indicator based on scroll position
    updateActiveLinkAndIndicator();
  }
});

function updateActiveLinkAndIndicator() {
  //Define variables
  const sections = document.querySelectorAll(".section");
  const currentScrollPosition = window.scrollY;
  let activeSectionId = null;

  //Loop through each section

  sections.forEach((section) => {
    //Define section bounds
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    if (
      currentScrollPosition >= sectionTop &&
      currentScrollPosition < sectionBottom
    ) {
      //The active section, equals the section ID
      activeSectionId = section.id;
    }
  });

  //If the active section
  if (activeSectionId) {
    //Get the active link
    const activeMenuItem = document.querySelector(
      `.menu-item[data-section-id="${activeSectionId}"]`
    );
    //Add active class to the active link
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

// Update active indicator
function updateActiveIndicator() {
  
  console.log("updateActiveIndicator called");
  // Get the active section's ID from local storage
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


navToggler.addEventListener("click", () => {
  if (!navMenu.classList.contains("opened")) {
    // Menu is already open, close it
    navMenu.classList.add("opened");
    navToggler.classList.add("opened");
    navMenu.classList.remove("closing");

    const menuItems = document.querySelectorAll(".nav-menu .menu li");

    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 100); // 100ms de retraso entre cada elemento al cerrar
    });

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        setTimeout(() => {
          navMenu.classList.remove("opened");
          navToggler.classList.remove("opened");
          menuItems.forEach((menuItem) => {
            menuItem.classList.remove("show");
          });
        }, 300); // A small delay to ensure the click event doesn't interfere with the menu toggle
      });
    });
    

  } else {
    // Menu is closed, open it
    navMenu.classList.remove("opened");
    navToggler.classList.remove("opened");
    const menuItems = document.querySelectorAll(".nav-menu .menu li");
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove("show");
      }, index * 100); // 100ms de retraso entre cada elemento
    });
  }
});