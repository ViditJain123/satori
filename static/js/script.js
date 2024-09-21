function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// Fade-in Fade-out functionality
function fadeContent() {
  const fadeContainer = document.getElementById('fade-container');
  
  // Add fade-out class
  fadeContainer.classList.add('fade-out');
  
  // Wait for the fade-out animation to complete before applying fade-in
  setTimeout(() => {
    fadeContainer.classList.remove('fade-out');
    fadeContainer.classList.add('fade-in');
  }, 500); // Adjust this timing according to your animation duration
}

// JavaScript to remove hidden class after the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  const fadeContainer = document.getElementById('fade-container');
  fadeContainer.classList.remove('hidden');
});
