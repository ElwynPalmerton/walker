let walker;
let walkers = [];
let qty = 110;

function setup() {
  createCanvas(displayWidth, displayHeight);

  for (let x = 0; x < qty; x++) {
    let hue = random(360);
    let saturation = random(50);
    let lightness = random(50);
    let alpha = random(0.5);
    walker = new Walker(hue, saturation, lightness, alpha);
    walkers.push(walker);
  }

  for (let x = 0; x < qty / 5; x++) {
    let hue = 330 + random(30);
    if (random(100) > 50) {
      hue = random(90);
    }
    let saturation = random(50) + 40;
    let lightness = random(50) + 40;
    let alpha = random(1);
    walker = new Walker(hue, saturation, lightness, alpha);
    walkers.push(walker);
  }

  for (let x = 0; x < qty; x++) {
    let hue = 228;
    let saturation = 100;
    let lightness = 10;
    let alpha = 1;
    walker = new Walker(hue, saturation, lightness, alpha);
    walkers.push(walker);
  }

  colorMode(HSB, 360, 100, 100, 1.0);
  background(228, 100, 9, 1);
  setInterval(() => {
    background(228, 80, 20, 0.03);
  }, 500)
}

function draw() {
  walkers.forEach(walker => {
    walker.step();
    walker.render();
  });
}

//Good oones:

// setInterval(() => {
//   background(228, 80, 20, 0.03);
// }, 500)
// let hue = random(360);
// let saturation = random(100);
// let lightness = random(100);
// let alpha = random(1);