// writing-samples-scripts.js
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

// Full-Screen Functionality
function toggleFullscreen(button) {
  const pdfContainer = button.closest('.pdf-container');
  const pdfEmbed = pdfContainer.querySelector('.pdf-embed');

  if (!document.fullscreenElement) {
    if (pdfContainer.requestFullscreen) {
      pdfContainer.requestFullscreen();
    } else if (pdfContainer.mozRequestFullScreen) { // Firefox
      pdfContainer.mozRequestFullScreen();
    } else if (pdfContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      pdfContainer.webkitRequestFullscreen();
    } else if (pdfContainer.msRequestFullscreen) { // IE/Edge
      pdfContainer.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
}