class HorseMode {
  constructor(boids, amount) {
    for (let i = 0; i < amount; i++) {
      const x = min_x + Math.floor(Math.random() * map_widht);
      const y = min_x + Math.floor(Math.random() * (map_widht / 2));
      boids.push(new Boid(x, y, 5));
    }
  }

  Update(ctx, boids) {
    for (let i = 0; i < boids.length; i++) {
      const boid = boids[i];

      for (let j = i + 1; j < boids.length; j++) {
        boid.Colision(boids[j]);
      }

      boid.Update(ctx, "black");
    }
  }
}
