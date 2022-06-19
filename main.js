let head = new Image();
head.src = 'snakeHead.png';
let body = new Image();
body.src = 'snakeBody.png';

body.onload = function() {
  drawSnake();
};

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function drawSnake() {
  ctx.drawImage(body, 0, 0);
  ctx.drawImage(head, 0, 200);
}