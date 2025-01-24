const navBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("close");
        navLinks.classList.remove("open");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.add("close");
  navLinks.addEventListener(
    "animationend",
    (e) => {
      navLinks.classList.remove("close");
      navLinks.classList.remove("open");
    },
    { once: true }
  );
});

// Duplicate content for the explore section
const explore = document.querySelector(".explore__wrapper-inner");
const exploreContent = Array.from(explore.children);

exploreContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  explore.appendChild(duplicateNode);
});

// Initialize Swiper (for carousel)
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto", // Allows for flexible number of slides per view
  spaceBetween: 20, // Space between slides
  loop: true, // Loop the slides
  autoplay: {
    delay: 3000, // Auto-play every 3 seconds
    disableOnInteraction: false, // Do not disable autoplay after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button for navigation
    prevEl: ".swiper-button-prev", // Previous button for navigation
  },
  pagination: {
    el: ".swiper-pagination", // Pagination dots container
    clickable: true, // Allow clicking on pagination dots
  },
});

// FAQ accordion functionality
const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((item) => {
        item.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});
