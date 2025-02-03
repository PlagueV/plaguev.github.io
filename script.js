let noButtonClicks = 0;
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// Function to handle "Yes!" button clicks
const handleYesClick = () => {
  window.location.href = 'yes.html';
};

yesButton.addEventListener('click', handleYesClick);

noButton.addEventListener('click', () => {
  noButtonClicks++;
  switch (noButtonClicks) {
    case 1:
      yesButton.style.fontSize = '1.5rem';
      noButton.textContent = 'Are you sure?';
      break;
    case 2:
      yesButton.style.fontSize = '2rem';
      noButton.textContent = 'Are you really really sure?';
      break;
    case 3:
      yesButton.style.fontSize = '2.5rem';
      noButton.textContent = 'Please Mi Amore?';
      startRunningAwayAnimation();
      break;
    case 4:
      // Reset to normal but with 2 Yes buttons
      yesButton.style.fontSize = '1.2rem';
      stopRunningAwayAnimation();
      noButton.remove();

      // Create a second "Yes!" button
      const newYesButton = yesButton.cloneNode(true);
      newYesButton.addEventListener('click', handleYesClick); // Add click event to the new button
      document.querySelector('.buttons').appendChild(newYesButton);
      break;
  }
});

function startRunningAwayAnimation() {
  noButton.style.position = 'absolute';
  noButton.style.transition = 'left 0.5s, top 0.5s';

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };

  // Move the button immediately and then every 500ms
  moveButton();
  noButton.interval = setInterval(moveButton, 500);

  // Move the button when the mouse gets close
  document.addEventListener('mousemove', (e) => {
    const rect = noButton.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const distance = Math.sqrt((e.clientX - buttonCenterX) ** 2 + (e.clientY - buttonCenterY) ** 2);

    if (distance < 100) { // If the mouse is within 100px of the button
      moveButton();
    }
  });
}

function stopRunningAwayAnimation() {
  clearInterval(noButton.interval);
  noButton.style.position = 'static';
  noButton.style.transition = 'none';
}