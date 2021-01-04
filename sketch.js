//let walker;

//Changed master.

//Created Git repository with the branch "Gaussian."
let walkers = [];
let qty = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let x = 0; x < qty; x++) {
    let hue = random(360);
    let saturation = random(80);
    let lightness = random(80);
    let alpha = random(1.0);


    // let hue = random(360);
    // let saturation = 50;
    // let lightness = 100;
    // let alpha = 1;

    walker = new Walker(hue, saturation, lightness, alpha);
    walkers.push(walker);
  }

  colorMode(HSB, 360, 100, 100, 1.0);
  background(228, 100, 9, 1);
  setInterval(() => {
    background(228, 80, 20, 0.03);
  }, 500);
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