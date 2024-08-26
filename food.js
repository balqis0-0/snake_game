import{ onSnake, expandSnake } from './snake.js'
import{ randomGridPosition } from './grid.js'
let food = getRandomFoodPosition()
const EXPANSION_RATE = 5
export function update() {
  if (onSnake(food)){
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}
export function draw(gameBord) {
  const foodElement = document.creatElemant('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElemant.style.classList.add('food')
  gameBoard.appendChild(foodElement)
}
function getRandomFoodPosition() {
  let newFoodPosition 
  while(newFoodPosition == null || onSnake)) {
    newFoodPosition = randomPosition()
  }
  return newFoodPosition
}
    
    

                      
  
