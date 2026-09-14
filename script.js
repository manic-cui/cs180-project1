document.querySelectorAll('.compare').forEach((comparison) => {
  const slider = comparison.querySelector('input');
  const images = comparison.querySelector('.compare-images');
  slider.addEventListener('input', () => {
    images.style.setProperty('--split', slider.value + '%');
  });
});
