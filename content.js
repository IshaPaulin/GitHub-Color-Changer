// This code runs on every GitHub page

// Create a button
const colorButton = document.createElement('button');
colorButton.textContent = '🎨 Change BG Color';
colorButton.id = 'color-changer-btn';

// Add the button to the top of the page
// We'll add it to GitHub's header
const header = document.querySelector('header');
if (header) {
  header.appendChild(colorButton);
}

// Array of fun colors to cycle through
const colors = ['#360c0c', '#1a3045', '#2b1b44', '#e6ffe6', '#fff9e6'];
let currentColorIndex = 0;

// What happens when you click the button
colorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  
  // Show a little message
  alert('Background color changed! 🎨');
});

console.log('GitHub Color Changer extension loaded!');
