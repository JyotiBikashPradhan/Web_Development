const filament = document.querySelector('.filament');
const shine = document.querySelector('.shine');
const glow = document.querySelector('.glow');

setInterval(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  filament.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  filament.style.boxShadow = `0 0 20px rgba(${r}, ${g}, ${b}, 0.5)`;
  shine.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
  glow.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.2)`;
}, 1000);
