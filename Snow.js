class Snow {
    constructor(x,y,w,h) {
        this.snow = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        this.image = loadImage("snow4.webp");
        World.add(world, this.snow);
    }

    display() {
        var pos = this.snow.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
    }
}