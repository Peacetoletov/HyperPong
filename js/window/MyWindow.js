function MyWindow() {
  this.width = 1280;
  this.height = 720;
  this.ctx = document.getElementById("ctx").getContext("2d");
  this.getWidth = function() {
    return this.width;
  };
  this.getHeight = function() {
    return this.height;
  };
  this.getCtx = function() {
    return this.ctx;
  };
}
