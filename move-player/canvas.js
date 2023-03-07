// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls

let canvas = document.getElementById("js-canvas");

const ctx = canvas.getContext("2d");

// player variables
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 20;

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
}

function drawPlayer()
{
  ctx.beginPath();
  // paint player with center x, y
  ctx.arc(x-radius, y - radius, radius, 0, Math.PI*2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}


function movePlayer()
{
  if (rightPressed)
  {
    x += 5;
  }
  else if(leftPressed)
  {
    x -= 5;
  }
}
function clearScreen()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// game loop
function draw()
{
  clearScreen();
  movePlayer();
  drawPlayer();

}

// register game loop
setInterval(draw, 10);
console.log("started");
