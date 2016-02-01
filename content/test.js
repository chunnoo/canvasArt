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
    
    /*for (var i=0; i<4*Math.PI; i+=0.001) {
      this.context.beginPath();
      this.context.arc(
        256*Math.pow((Math.cos(i + 0.5*Math.PI) + 0.5*Math.cos(1.5*i + 0.5*Math.PI))/1.5, 1),
        -256*Math.pow((Math.sin(i - 1.5*Math.PI) + 0.5*Math.sin(1.5*i + 1.5*Math.PI))/1.5, 1),
        15, 0, Math.PI*2, false);
      this.context.fillStyle = "rgba(" + (255) + ", " + (32) + ", " + (32) + ", 0.25)";
      this.context.fill();
    }*/
    
    /*//Heart loop
    for (var i=0; i<256; i+=0.01) {
      this.context.beginPath();
      this.context.arc(
        16*i*Math.pow(Math.sin(i), 3),
        -16*i*Math.pow((13/16)*Math.cos(i) - (5/16)*Math.cos(2*i) - (1/8)*Math.cos(3*i) - (1/16)*Math.cos(4*i), 1),
        1, 0, Math.PI*2, false);
      this.context.fillStyle = "rgba(" + (255) + ", " + (32) + ", " + (32) + ", 0.25)";
      this.context.fill();
    }*/
    
    for (var i=0; i<1024; i+=0.01) {
      this.context.beginPath();
      this.context.arc(
        1*i*Math.pow((Math.cos(i + 0.5*Math.PI) + 0.5*Math.cos(1.5*i + 0.5*Math.PI))/1.5, 1),
        -1*i*Math.pow((Math.sin(i - 1.5*Math.PI) + 0.5*Math.sin(1.5*i + 1.5*Math.PI))/1.5, 1),
        1, 0, Math.PI*2, false);
      this.context.fillStyle = "rgba(" + (255) + ", " + (32) + ", " + (32) + ", 0.25)";
      this.context.fill();
    }
    
  };

  core.draw = function() {
  
    /*var f15 = this.framecount/15;
    
    for (var i=f15; i<f15 + Math.PI*3; i+=0.01) {
      var distFromFront = i - f15;
      this.context.beginPath();
      this.context.arc(
        256*Math.pow(Math.cos(f15 + 0.5*Math.PI + 0.25*f15 - 2*(3 - distFromFront/Math.PI))
                + 0.5*Math.cos(1.5*f15 + 0.5*Math.PI + 0.25*f15 - 2*(3 - distFromFront/Math.PI))/1.5, 1),
        256*Math.pow(Math.sin(f15 - 1.5*Math.PI + 0.25*f15 - 2*(3 - distFromFront/Math.PI))
                + 0.5*Math.sin(1.5*f15 + 1.5*Math.PI + 0.25*f15 - 2*(3 - distFromFront/Math.PI))/1.5, 1),
        distFromFront, 0, Math.PI*2, false);
      this.context.fillStyle = "rgba(" + 255 + ", 0, 0, 0.25)";
      this.context.fill();
    }*/
    
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
