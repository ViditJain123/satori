function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

function fadeContent() {
  const fadeContainer = document.getElementById('fade-container');
  
  fadeContainer.classList.add('fade-out');
  
  // Wait for the fade-out animation to complete before applying fade-in
  setTimeout(() => {
    fadeContainer.classList.remove('fade-out');
    fadeContainer.classList.add('fade-in');
  }, 500); // Adjust this timing according to your animation duration
}

document.addEventListener('DOMContentLoaded', function() {
  const fadeContainer = document.getElementById('fade-container');
  
  // Ensure the container starts as invisible (handled by CSS)
  // Trigger fade-in after a short delay to ensure it appears smoothly
  setTimeout(() => {
    fadeContainer.classList.add('fade-in');
  }, 100); // Delay to ensure the effect appears
});
