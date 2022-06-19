let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let body = new Image();
body.src = 'snakeBody.png';
body.onload = function() {
  createImg();
};

function createImg() {
  ctx.drawImage(body, 0, 0);
}