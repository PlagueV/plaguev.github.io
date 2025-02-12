// research-scripts.js
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