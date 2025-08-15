document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero');
  const images = [
    'ship1.jpg',
    'ship2.jpg',
    'ship3.jpg',
    'ship4.jpg'
  ];
  let current = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  changeBackground(); // Initial background
  setInterval(changeBackground, 4000); // Change every 4 seconds
});

