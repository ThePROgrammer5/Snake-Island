let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.drawImage('snakeHead.png', 0, 0, 100, 100, 0, 0, 100, 100);

ctx.drawImage('snakeBody.png', 0, 0, 100, 100, 0, 0, 100, 100);