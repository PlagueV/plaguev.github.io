// physical-scripts.js
const matrixEffect = document.querySelector('.matrix-effect');
const galleryImages = document.querySelectorAll('.gallery-image');
const popupOverlay = document.querySelector('.popup-overlay');
const popupImage = document.querySelector('.popup-image');
const popupDescription = document.querySelector('.popup-description');
const closeBtn = document.querySelector('.close-btn');

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

// Gallery Popup
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    popupImage.src = image.src;
    popupDescription.textContent = image.nextElementSibling.textContent;
    popupOverlay.style.display = 'flex';
  });
});

// Close Popup
closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});