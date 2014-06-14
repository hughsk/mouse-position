var mouse = require('./')()

document.body.style.top =
document.body.style.left =
document.body.style.right =
document.body.style.bottom =
document.body.style.margin = 0
document.body.style.padding = 0
document.body.style.position = 'absolute'

mouse.on('move', function() {
  update(true)
  setTimeout(update, 250)
})

function update(flush) {
  console.clear()

  console.log('position:', [mouse.x, mouse.y])
  console.log('speed:', [mouse.x-mouse.prevX, mouse.y-mouse.prevY])

  if (flush) mouse.flush()
}
