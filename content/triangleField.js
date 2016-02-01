function AddContent(core) {
  core.init = function() {
    
    this.field = new Array(100);
    
    for (var i=0; i<300; i+=1) {
      this.field[i] = new Array(100);
      for (var j=0; j<300; j+=1) {
        this.field[i][j] = new Vec2(
          (i - 0.5*(j) - 150)*this.canvas.width/96 + 5*(Math.random()*2 - 1),
          (j - 150)*this.canvas.width/96 + 5*(Math.random()*2 - 1));
      }
    }
    
    for (var i=0; i<299; i+=1) {
      for (var j=0; j<299; j+=1) {
        this.context.beginPath();
        this.context.moveTo(this.field[i][j].x, this.field[i][j].y);
        this.context.lineTo(this.field[i + 1][j].x, this.field[i + 1][j].y);
        this.context.lineTo(this.field[i + 1][j + 1].x, this.field[i + 1][j + 1].y);
        this.context.closePath();
        this.context.fillStyle = "rgba(" + (Math.floor(Math.random()*255)) + ", " + (Math.floor(Math.random()*32)) + ", " + (Math.floor(Math.random()*32)) + ", 1.0)";
        this.context.fill();
        this.context.beginPath();
        this.context.moveTo(this.field[i][j].x, this.field[i][j].y);
        this.context.lineTo(this.field[i][j + 1].x, this.field[i][j + 1].y);
        this.context.lineTo(this.field[i + 1][j + 1].x, this.field[i + 1][j + 1].y);
        this.context.closePath();
        this.context.fillStyle = "rgba(" + (Math.floor(Math.random()*255)) + ", " + (Math.floor(Math.random()*32)) + ", " + (Math.floor(Math.random()*32)) + ", 1.0)";
        this.context.fill();
      }
    }
    
  };

  core.draw = function() {
    
    
    
  };

  core.clearFrame = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  core.leftMouseDown = function() {
    this.game.leftMouseDown(this.mouse.x, this.mouse.y);
  };

  core.keydown = function(charCode) {
    
  };

  core.keyup = function(charCode) {
    
  };
  
}
