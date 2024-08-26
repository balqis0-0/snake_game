let inputDireciont = {x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0}
window.addEventListener('keydowm' e => {
  switch (e.key) {
    case 'ArrouwUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1,}
      break
    case 'AroowDown':ctr
      if (lastInputDirection.y !== 0) break
      break
    case 'Aroowleft':
      if (lastInputDirection.x !== 0) break
      inputDirection = {x: -1< y: 0}
      break
    case 'AroowRight':
      if (lastInputDIrection.x !== 0)  break
        inputDirection = { x: 1, y: 0 }
      break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
      
