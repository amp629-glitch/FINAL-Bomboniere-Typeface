
 // Get the textbox div
const textbox = document.getElementById('textbox');

// Select all divs inside all grids that should act as keys
const keys = document.querySelectorAll('.grid div, .grid .key');

// Add click event listener to each key
keys.forEach(key => {
  key.addEventListener('click', () => {
    textbox.textContent += key.textContent;
  });
});


const targetInput = document.getElementById('targetInput');
const virtualKeyboard = document.getElementById('virtualKeyboard');

virtualKeyboard.addEventListener('click', function(event) {
  const clickedElement = event.target;

  // Check if a key button was clicked
  if (clickedElement.classList.contains('key')) {
    const keyValue = clickedElement.dataset.key;

    if (keyValue === 'backspace') {
      targetInput.value = targetInput.value.slice(0, -1); // Remove last character
    } else if (keyValue === 'space') {
      targetInput.value += ' '; // Add a space
    } else {
      targetInput.value += keyValue; // Add the character
    }

    targetInput.focus(); // Keep focus on the input field
  }
});
