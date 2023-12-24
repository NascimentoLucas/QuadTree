class Boid {
  constructor(_x, _y, _radius) {
    this.x = _x;
    this.y = _y;
    this.radius = _radius;
    this.speed = 1;

    const x_direct = Math.random() > 0.5 ? 1 : -1;
    this.speedX = this.speed * x_direct;
    const y_direct = Math.random() > 0.5 ? 1 : -1;
    this.speedY = this.speed * y_direct;
  }

  Check_Collision(boid) {
    var x;
    var y;

    x = this.x - boid.x;
    y = this.y - boid.y;

    if (Math.sqrt(x * x + y * y) < this.radius) {
      return true;
    } else {
      return false;
    }
  }

  Inverse() {
    const result = Math.floor(Math.random() * 3);

    switch (result) {
      case 0:
        this.speedX = -this.speedX;
        break;

      case 1:
        this.speedY = -this.speedY;
        break;
      default:
        this.speedX = -this.speedX;
        this.speedY = -this.speedY;
        break;
    }
  }

  Colision(boid) {
    if (this.Check_Collision(boid)) {
      this.Inverse();
      boid.Inverse();
      return true;
    }
    return false;
  }

  Update(ctx, color) {
    if (this.x + this.radius > map_widht + min_x) this.speedX = -this.speed;
    else if (this.x - this.radius < min_x) this.speedX = this.speed;

    if (this.y + this.radius > map_widht + min_x) this.speedY = -this.speed;
    else if (this.y - this.radius < min_x) this.speedY = this.speed;

    this.x += this.speedX;
    this.y += this.speedY;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    //ctx.fillText(this.id + '', posX, posY );
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
