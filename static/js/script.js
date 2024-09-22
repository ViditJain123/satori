function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

function fadeContent() {
  const fadeContainer = document.getElementById('fade-container');
  
  fadeContainer.classList.add('fade-out');
  
  setTimeout(() => {
    fadeContainer.classList.remove('fade-out');
    fadeContainer.classList.add('fade-in');
  }, 500); // Adjust this timing according to your animation duration
}
document.addEventListener('DOMContentLoaded', function() {
  const fadeContainer = document.getElementById('fade-container');
  
  // Step 1: Fade out the content after 1 second
  setTimeout(() => {
      fadeContainer.classList.add('fade-out'); // Trigger fade out
  }, 500); // Wait 1 second before starting fade-out
  
  // Step 2: After fade-out completes, fade back in
  setTimeout(() => {
      fadeContainer.classList.remove('fade-out'); // Remove fade-out class
      fadeContainer.classList.add('fade-in'); // Trigger fade-in
  }, 2000); // Start fade-in 2 seconds after fade-out (adjust timing as needed)
});
