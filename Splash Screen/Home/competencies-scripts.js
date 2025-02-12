// competencies-scripts.js
const matrixEffect = document.querySelector('.matrix-effect');
const glitchText = document.querySelector('.glitch-text');

// Matrix Effect
function createMatrixStream() {
  const stream = document.createElement('div');
  stream.classList.add('matrix-stream');
  stream.style.left = `${Math.random() * 100}vw`;
  stream.style.animationDuration = `${Math.random() * 2 + 3}s`;
  matrixEffect.appendChild(stream);

  setTimeout(() => {
    stream.remove();
  }, 5000);
}

setInterval(createMatrixStream, 100);

// Random Symbols for Corruption
const symbols = ['@', '#', '$', '%', '&', '*', '!', '?', '~', '^', '+', '-', '=', '/', '|'];

// Function to Corrupt Text
function corruptText() {
  const originalText = glitchText.textContent;
  let corruptedText = '';

  // Replace each character with a random symbol
  for (let i = 0; i < originalText.length; i++) {
    if (Math.random() > 0.5) {
      corruptedText += symbols[Math.floor(Math.random() * symbols.length)];
    } else {
      corruptedText += originalText[i];
    }
  }

  // Apply corrupted text
  glitchText.textContent = corruptedText;
  glitchText.classList.add('corrupted');

  // Restore original text after a short delay
  setTimeout(() => {
    glitchText.textContent = originalText;
    glitchText.classList.remove('corrupted');
  }, 500); // Duration of corruption
}

// Randomly trigger corruption every 2-5 seconds
setInterval(() => {
  corruptText();
}, Math.random() * 3000 + 2000);