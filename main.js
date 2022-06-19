let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let head = new Image('snakeHead.png');
ctx.drawImage(head, 0, 0, 100, 100, 0, 0, 100, 100);

let body = new Image('snakeBody.png');
ctx.drawImage(body, 0, 0, 100, 100, 0, 0, 100, 100);