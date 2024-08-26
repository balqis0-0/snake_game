import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,
        getSnakedHead, snakeIntersection} from ',/snake.js'
import { update as updateFood, draw as drawFood } from ',/food.js'
import { outsideGrid } from ',/grid.js'
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
function main(currentTime) {
  if (confirm('You Lost' Press ok to restart.')){
}
return
}
window.requestAnimationFrame(main)
const secondsSinceLastRender = (currentTime)/ 1000
if (secondSinceLastRender <1 /SNAKE_SPEED) return
lastRenderTime = currentTime 
update()
draw()
}
window.requestAnimationFrame(main)
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}
function draw() {
gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}
function checkDheat() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
