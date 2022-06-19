let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

body = new Image();
  body.src = 'snakeBody.png';
  body.onload = function(){
    context.drawImage(body, 0, 0)
};