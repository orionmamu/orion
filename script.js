// JavaScript for the website
document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu Toggle for Mobile View
    const menuIcon = document.getElementById("menu-icon");
    const navbarMenu = document.querySelector(".navbar ul");
  
    menuIcon.addEventListener("click", () => {
      navbarMenu.classList.toggle("show"); // Toggle the 'show' class
    });
  
    // 2. Dynamic Progress Bars
    const progressBars = document.querySelectorAll(".progress-bar-div span");
  
    progressBars.forEach((progressBar) => {
      const targetWidth = progressBar.getAttribute("data-width") || "80%"; // Default to 80% if no data-width
      progressBar.style.width = targetWidth;
  
      // Add animation for better visual feedback
      progressBar.addEventListener("mouseover", () => {
        progressBar.style.animation = "progress-animation 2s forwards";
      });
    });
  
    // 3. Smooth Scroll for Internal Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  
    // 4. Highlight Current Section in Navbar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200; // Adjust for header offset
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });
  