function include(file) {
  document.write("<script type='text/javascript' src='" + file + "'></script>");
}

include("core/matrix.js");
include("core/vector.js");

function Core(canvasName, fullscreen) {
  
  this.canvas = document.getElementById(canvasName);
  this.context = this.canvas.getContext("2d");
  
  this.image = this.canvas.toDataURL("image/png");
  
  this.screen = new Vec2(0, 0);
  
  this.mouse = {
    x: 0,
    y: 0,
    leftButton: false,
    rightButton: false
  };
  
  this.framecount = 0;
  this.framerate = 0;
  this.time = Date.now();
  this.deltaTime = 0;
  this.focus = true;
  
  this.canvas.onmousemove = function(e) {
    e.preventDefault;
    this.mouse.x = e.clientX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.clientY - (this.canvas.height/2 - this.screen.y);
  }.bind(this);
  this.canvas.ontouchmove = function(e) {
    e.preventDefault();
    this.mouse.x = e.targetTouches[0].pageX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.targetTouches[0].pageY - (this.canvas.height/2 - this.screen.y);
  }.bind(this);
  //mouse release
  this.canvas.onmouseup = function(e) {
    this.mouse.x = e.clientX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.clientY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = false;
    if (this.leftMouseUp) {
      this.leftMouseUp();
    }
  }.bind(this);
  this.canvas.onmouseleave = function(e) {
    this.mouse.x = e.clientX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.clientY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = false;
    if (this.leftMouseUp) {
      this.leftMouseUp();
    }
  }.bind(this);
  this.canvas.ontouchend = function(e) {
    e.preventDefault();
    this.mouse.x = e.targetTouches[0].pageX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.targetTouches[0].pageY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = false;
    if (this.leftMouseUp) {
      this.leftMouseUp();
    }
  }.bind(this);
  this.canvas.ontouchleave = function(e) {
    e.preventDefault();
    this.mouse.x = e.targetTouches[0].pageX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.targetTouches[0].pageY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = false;
    if (this.leftMouseUp) {
      this.leftMouseUp();
    }
  }.bind(this);
  this.canvas.ontouchcancel = function(e) {
    e.preventDefault();
    this.mouse.x = e.targetTouches[0].pageX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.targetTouches[0].pageY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = false;
    if (this.leftMouseUp) {
      this.leftMouseUp();
    }
  }.bind(this);
  //mouse press
  this.canvas.onmousedown = function(e) {
    this.mouse.x = e.clientX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.clientY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = true;
    if (this.leftMouseDown) {
      this.leftMouseDown();
    }
  }.bind(this);
  this.canvas.onmouseenter = function(e) {
    this.mouse.x = e.clientX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.clientY - (this.canvas.height/2 - this.screen.y);
  }.bind(this);
  this.canvas.ontouchstart = function(e) {
    e.preventDefault();
    this.mouse.x = e.targetTouches[0].pageX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.targetTouches[0].pageY - (this.canvas.height/2 - this.screen.y);
    this.mouse.leftButton = true;
    if (this.leftMouseDown) {
      this.leftMouseDown();
    }
  }.bind(this);
  this.canvas.ontouchenter = function(e) {
    e.preventDefault();
    this.mouse.x = e.targetTouches[0].pageX - (this.canvas.width/2 - this.screen.x);
    this.mouse.y = e.targetTouches[0].pageY - (this.canvas.height/2 - this.screen.y);
  }.bind(this)
  
  window.addEventListener("keydown", function(e) {
    if (this.keydown) {
      if (e.keyCode) {
        this.keydown(e.keyCode);
      } else {
        this.keydown(e.charCode);
      }
    }
  }.bind(this));
  window.addEventListener("keyup", function(e) {
    if (this.keyup) {
      if (e.keyCode) {
        this.keyup(e.keyCode);
      } else {
        this.keyup(e.charCode);
      }
    }
  }.bind(this));
  window.addEventListener("load", function() {
    this.resize();
    this.begin();
  }.bind(this));
  window.addEventListener("blur", function() {
    this.focus = false;
  }.bind(this));
  window.addEventListener("focus", function() {
    this.focus = true;
    requestAnimationFrame(this.coreDraw.bind(this));
  }.bind(this));
  window.addEventListener("resize", function() {
    this.resize();
  }.bind(this));
}

Core.prototype = {
  begin: function() {
  
    this.context.fillStyle = "rgba(0, 0, 0, 1)";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
    this.context.save();
      this.context.translate(this.canvas.width/2 - this.screen.x, this.canvas.height/2 - this.screen.y);
    
    this.init();
    
    this.context.restore();
    
    this.image = this.canvas.toDataURL("image/png");
    document.write('<img src="' + this.image + '"/>');
    
    this.coreDraw();
  },
  coreDraw: function() {
    if (this.focus) {
    
      this.deltaTime = (new Date().getTime() - this.time)/1000;
      this.time = Date.now();
      this.fps = 1/this.deltaTime;
    
      //this is where i would clear the frame, but the default lighting automatically does that.
      //this.clearFrame();
      
      this.context.save();
      this.context.translate(this.canvas.width/2 - this.screen.x, this.canvas.height/2 - this.screen.y);
      
      this.draw();
    
      this.context.restore();
      
      this.framecount += 1;
    
      requestAnimationFrame(this.coreDraw.bind(this));
    }
  },
  resize: function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
};
