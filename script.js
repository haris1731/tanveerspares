 const hero = document.querySelector('.hero');
const images = [
    'ship1.jpg',
    'ship2.jpg',
    'ship3.jpg',
    'ship4.jpg'
];
let current = 0;

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

function changeBackground() {
    hero.style.opacity = 0; // fade out
    setTimeout(() => {
        hero.style.backgroundImage = `url('${images[current]}')`;
        hero.style.opacity = 1; // fade in
        current = (current + 1) % images.length;
    }, 500); // fade out time
}

changeBackground(); // Initial
setInterval(changeBackground, 4000);

