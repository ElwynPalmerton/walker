class Walker {
  constructor(hue, saturation, lightness, alpha) {
    this.x = width / 2;
    this.y = height / 2;
    this.px = this.x;
    this.py = this.y;

    this.hue = hue || 180;
    this.saturation = saturation || 50;
    this.lightness = lightness || 50;
    this.alpha = alpha;
  }

  render() {
    stroke(this.hue, this.saturation, this.lightness, this.alpha);
    strokeWeight(1);

    line(this.x, this.y, this.px, this.py);
    this.px = this.x;
    this.py = this.y;
  }

  step() {
    let dist = 5;
    let leap = 20;

    let chance = random(100);
    if (chance < 99) {
      this.x += random(-dist, dist);
      this.y += random(-dist, dist);
    } else {
      this.x += random(-leap, leap);
      this.y += random(-leap, leap);
    }



    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}