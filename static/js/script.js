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
  
  // Use requestAnimationFrame for smoother transition
  requestAnimationFrame(() => {
    fadeContainer.classList.add('fade-out'); // Trigger fade out immediately
  });
  
  // Step 2: After fade-out completes, fade back in
  setTimeout(() => {
    fadeContainer.classList.remove('fade-out'); // Remove fade-out class
    fadeContainer.classList.add('fade-in'); // Trigger fade-in
  }, 1000); // Start fade-in 2 seconds after fade-out (adjust timing as needed)
});
