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

function vtimeline_expand(item) {
  const content = item.querySelector('.vtimeline-content');
  content.classList.toggle('expanded');
}
function copyToClipboard(walletId, coinType) {
  // Create a temporary input element to hold the wallet ID
  const tempInput = document.createElement('input');
  tempInput.value = walletId;
  document.body.appendChild(tempInput);
  
  // Select the text in the input
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Optionally, you can alert the user that the wallet ID has been copied
  alert(`${coinType} Wallet ID copied to clipboard!`);
}
