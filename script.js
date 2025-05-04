const colorPicker = document.getElementById('colorPicker');
const saveBtn = document.getElementById('saveBtn');
const box = document.getElementById('animatedBox');

// Load theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('themeColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
});

// Save color and animate box
saveBtn.addEventListener('click', () => {
  const selectedColor = colorPicker.value;
  localStorage.setItem('themeColor', selectedColor);
  document.body.style.backgroundColor = selectedColor;

  // Trigger animation
  box.classList.remove('animate'); // reset
  void box.offsetWidth;            // reflow trick to restart animation
  box.classList.add('animate');
});
