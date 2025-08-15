document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero');
  const images = [
    'assests/ship1.jpg',
    'assests/ship2.jpg',
    'assests/ship3.jpg',
    'assests/ship4.jpg'
  ];
  let current = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  changeBackground(); // Initial background
  setInterval(changeBackground, 4000); // Change every 4 seconds
});
