class HorseMode {
  constructor(amount) {
    this.boids = Array();
    for (let i = 0; i < amount; i++) {
      const x = left_padding + Math.floor(Math.random() * map_widht);
      const y = left_padding + Math.floor(Math.random() * (map_widht / 2));
      this.boids.push(new Boid(x, y, 5));
    }
  }

  Update(ctx) {
    for (let i = 0; i < this.boids.length; i++) {
      const boid = this.boids[i];

      for (let j = i + 1; j < this.boids.length; j++) {
        boid.Colision(this.boids[j]);
      }

      boid.Update(ctx, "black");
    }
  }
}
