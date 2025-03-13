// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const navbar = document.getElementById("navbar");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNav = document.getElementById("mobile-nav");
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const toast = document.getElementById("toast");
const backToTop = document.getElementById("back-to-top");
const currentYearEl = document.getElementById("current-year");

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile navigation toggle
mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("show");

  // Change icon based on menu state
  const icon = mobileNavToggle.querySelector("i");
  if (mobileNav.classList.contains("show")) {
    icon.setAttribute("data-lucide", "x");
  } else {
    icon.setAttribute("data-lucide", "menu");
  }
  lucide.createIcons();
});

// Close mobile nav when clicking on a link
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    mobileNavToggle.querySelector("i").setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});

// Back to top button
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show loading state
    const btnText = submitBtn.querySelector(".btn-text");
    const originalText = btnText.textContent;
    const icon = submitBtn.querySelector("i");

    btnText.textContent = "Sending...";
    icon.setAttribute("data-lucide", "loader-2");
    icon.classList.add("animate-spin");
    lucide.createIcons();
    submitBtn.disabled = true;

    // Simulate form submission (normally you would send data to server)
    setTimeout(() => {
      // Reset form
      contactForm.reset();

      // Reset button
      btnText.textContent = originalText;
      icon.setAttribute("data-lucide", "send");
      icon.classList.remove("animate-spin");
      lucide.createIcons();
      submitBtn.disabled = false;

      // Show toast
      showToast("Message sent successfully!");
    }, 1500);
  });
}

// Show toast notification
function showToast(message) {
  const toastMessage = document.querySelector(".toast-message");
  toastMessage.textContent = message;

  toast.classList.add("show");

  // Hide toast after animation completes
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Animate elements when they come into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.1 }
);

// Target all elements with animations
document
  .querySelectorAll(".fade-in, .fade-in-right, .fade-in-left")
  .forEach((el) => {
    observer.observe(el);
  });
