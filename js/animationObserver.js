const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Agregar la clase solo si el elemento está en la vista
        entry.target.classList.add("elements-animation-show");
        // Dejar de observar el elemento una vez que se ha mostrado
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const hiddenElements = document.querySelectorAll(".elements-animation-hidden");
hiddenElements.forEach((el) => observer.observe(el));
