
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


const box = document.getElementById('box');
let x = 0, y = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') y -= 10;
  if (e.key === 'ArrowDown') y += 10;
  if (e.key === 'ArrowLeft') x -= 10;
  if (e.key === 'ArrowRight') x += 10;
  box.style.transform = `translate(${x}px, ${y}px)`;
});


const clock = document.getElementById('clock');
setInterval(() => {
  clock.textContent = new Date().toLocaleTimeString();
}, 1000);