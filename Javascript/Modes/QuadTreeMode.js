class QuadTreeMode {
  constructor(amount) {
    this.quadtree = new QuadTree(
      null,
      left_padding,
      left_padding,
      map_widht,
      map_widht
    );
    for (let i = 0; i < amount; i++) {
      const x = left_padding + Math.floor(Math.random() * map_widht);
      const y = left_padding + Math.floor(Math.random() * (map_widht / 2));
      this.quadtree.AddBoid(new Boid(x, y, 5));
    }
  }

  Update(ctx) {
    if (!pause) {
      this.quadtree.Update(ctx, "cyan");
    }
  }
}
