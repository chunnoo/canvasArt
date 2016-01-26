function AddContent(core) {
  core.init = function() {

    /*for (var i=0; i<10000; i+=0.1) {
      this.context.beginPath();
      this.context.arc(0.1*i*Math.pow(Math.cos(i/11), 1) + 10*Math.sin(i/3), 0.1*i*Math.pow(Math.sin(i/13), 1) + 10*Math.cos(i/5), 5, 0, Math.PI*2, false);
      this.context.fillStyle = "rgba(255, 0, 0, 0.1)";
      this.context.fill();
    }*/
    
    /*var primes = [];
    
    for (var i=2; i<10000; i++) {
      var p = true;
      for (var j=0; j<primes.length; j++) {
        if (i % primes[j] == 0) {
          p = false;
          break;
        }
      }
      if (p) {
        primes.push(i);
      }
    }
    
    this.context.beginPath();
    this.context.moveTo(0, 0);
    
    for (var i=0; i<primes.length - 1; i++) {
      
      var primeDist = primes[i + 1] - primes[i];
      
      this.context.lineTo(1*i*Math.pow(Math.cos(Math.pow(primes[i], 0.5)), (i%3)*2 + 1), 1*i*Math.pow(Math.sin(Math.pow(primes[i], 0.5)), (i%3)*2 + 1));
      
    }
    
    this.context.lineWidth = 1;
    this.context.strokeStyle = "rgba(255, 0, 0, 1)";
    this.context.stroke();*/
    
    for (var i=0; i<10000; i++) {
      this.context.beginPath();
      this.context.arc(
        256*Math.pow((Math.cos(i/100 + 1.5*Math.PI) + Math.cos(i/50 + 1.5*Math.PI))/2, 1),
        256*Math.pow((Math.sin(i/100 - 0.5*Math.PI) + Math.sin(i/50 + 0.5*Math.PI))/2, 1),
        5*Math.cos(i/5) + 10, 0, Math.PI*2, false);
      this.context.fillStyle = "rgba(" + (Math.floor(Math.random()*255)) + ", " + (Math.floor(Math.random()*32)) + ", " + (Math.floor(Math.random()*32)) + ", 0.5)";
      this.context.fill();
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
