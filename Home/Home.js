// scripts.js
const matrixEffect = document.querySelector('.matrix-effect');

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

// scripts.js
const errorOverlay = document.querySelector('.error-overlay');
const errorIcon = document.querySelector('.error-icon');

function showError() {
  const random = Math.random(); // Random number between 0 and 1

  if (random < 0.5) {
    errorOverlay.style.display = 'block'; // Show "Error" text
    errorIcon.style.display = 'none'; // Hide icon
  } else {
    errorOverlay.style.display = 'none'; // Hide "Error" text
    errorIcon.style.display = 'flex'; // Show icon
  }

  // Hide both after a short delay
  setTimeout(() => {
    errorOverlay.style.display = 'none';
    errorIcon.style.display = 'none';
  }, 500); // Display for 0.5 seconds
}

// Randomly show error every 5-10 seconds
setInterval(showError, Math.random() * 5000 + 5000);

// scripts.js
const terminalOverlay = document.querySelector('.terminal-overlay');
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.querySelector('.terminal-output');
const accessGrantedOverlay = document.querySelector('.access-granted-overlay');

// Phrases that trigger redirection (you can customize these)
const redirectPhrases = ['open terminal', 'access terminal', 'enter terminal'];

// Open Terminal
function openTerminal() {
  terminalOverlay.style.display = 'flex';
  terminalInput.focus();
}

// Close Terminal
function closeTerminal() {
  terminalOverlay.style.display = 'none';
}

// Show Access Granted Overlay
function showAccessGranted() {
  accessGrantedOverlay.style.display = 'flex'; // Show overlay
  setTimeout(() => {
    accessGrantedOverlay.style.display = 'none'; // Hide overlay after 3 seconds
    window.location.href = 'terminal.html'; // Redirect to terminal.html
  }, 3000); // 3 seconds delay
}

// Handle Terminal Input
terminalInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const input = terminalInput.value.trim().toLowerCase();

    // Display the command in the terminal
    terminalOutput.innerHTML += `<p>C:\\Users\\[Your Name]> ${input}</p>`;

    // Handle specific commands
    if (input === 'clear') {
      terminalOutput.innerHTML = ''; // Clear the terminal output
    } else if (redirectPhrases.includes(input)) {
      closeTerminal(); // Close the terminal popup
      showAccessGranted(); // Show "Access Granted" overlay
    } else {
      // Display error message for invalid input
      terminalOutput.innerHTML += `<p>'${input}' is not recognized as an internal or external command.</p>`;
    }

    terminalInput.value = ''; // Clear input
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to bottom
  }
});

// scripts.js
function toggleNav() {
  const navbarLinksContainer = document.querySelector('.navbar-links-container');
  navbarLinksContainer.classList.toggle('active'); // Toggle visibility
}