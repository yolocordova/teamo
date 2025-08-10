// Colores de flores
const flowerColors = [
    ['#ffb6c1', '#fff176'],
    ['#f48fb1', '#ffd54f'],
    ['#ce93d8', '#f06292'],
    ['#81d4fa', '#4fc3f7'],
    ['#a5d6a7', '#66bb6a'],
  ];
  
  // Crear flores animadas
  const createFloatingFlower = () => {
    const flower = document.createElement('div');
    flower.classList.add('floating-flower');
  
    // Colores aleatorios
    const [petalColor, centerColor] = flowerColors[Math.floor(Math.random() * flowerColors.length)];
    flower.style.setProperty('--petal', petalColor);
    flower.style.setProperty('--center', centerColor);
  
    // Posición y duración aleatoria
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.bottom = '-40px';
    const duration = 10 + Math.random() * 10;
    flower.style.animationDuration = `${duration}s`;
  
    document.body.appendChild(flower);
  
    setTimeout(() => flower.remove(), duration * 1000);
  };
  
  // Crear flores cada 400 ms
  setInterval(createFloatingFlower, 400);
  const heartColors = ['#ff4d6d', '#ff6b81', '#ff85a1', '#ff99b5'];

const createFloatingHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');

  // Color aleatorio
  const color = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.setProperty('--heart-color', color);

  // Posición aleatoria
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-30px';

  const duration = 8 + Math.random() * 8;
  heart.style.animationDuration = `${duration}s`;

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
};

// Crear corazones cada 600ms
setInterval(createFloatingHeart, 600);
