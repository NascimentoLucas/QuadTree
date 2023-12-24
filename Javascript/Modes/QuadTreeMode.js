class QuadTreeMode {
  constructor(amount) {
    this.quadtree = new QuadTree(null, min_x, min_x, map_widht, map_widht);
    for (let i = 0; i < amount; i++) {
      const x = min_x + Math.floor(Math.random() * map_widht);
      const y = min_x + Math.floor(Math.random() * (map_widht / 2));
      this.quadtree.AddBoid(new Boid(x, y, 5));
    }
  }

  Update(ctx) {
    if (!pause) {
      var startTime = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.quadtree.Update(ctx, "cyan");
      var endTime = performance.now();

      count++;
      total += endTime - startTime;
    }
  }
}
