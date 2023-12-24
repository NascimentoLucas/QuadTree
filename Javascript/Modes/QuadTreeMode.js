class QuadTreeMode {
  constructor(boids, amount) {
    for (let i = 0; i < amount; i++) {
      const x = min_x + Math.floor(Math.random() * map_widht);
      const y = min_x + Math.floor(Math.random() * (map_widht / 2));
      quadtree.AddBoid(new Boid(x, y, 5));
    }
  }

  Update(ctx) {
    if (!lock) {
      var startTime = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      quadtree.Update(ctx, "cyan");
      var endTime = performance.now();

      count++;
      total += endTime - startTime;
    }
  }
}
