'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * project cards reveal animation
 */

const portfolioCards = document.querySelectorAll(".portfolio-card");

if (portfolioCards.length) {
  portfolioCards.forEach((card) => card.classList.add("reveal-ready"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.25,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    portfolioCards.forEach((card) => observer.observe(card));
  } else {
    portfolioCards.forEach((card) => card.classList.add("is-visible"));
  }
}



/**
 * skills cards reveal animation
 */

const skillsSection = document.querySelector("#skills");
const skillCards = document.querySelectorAll("#skills-container-1 .skill-card");

if (skillsSection && skillCards.length) {
  if ("IntersectionObserver" in window) {
    const skillsObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillCards.forEach((card) => card.classList.add("visible"));
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    skillsObserver.observe(skillsSection);
  } else {
    skillCards.forEach((card) => card.classList.add("visible"));
  }
}



/**
 * contact card reveal animation
 */

const contactCard = document.querySelector(".contact-card--glass");

if (contactCard) {
  if ("IntersectionObserver" in window) {
    const contactObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    contactObserver.observe(contactCard);
  } else {
    contactCard.classList.add("is-visible");
  }
}