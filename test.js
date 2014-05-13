var mouse = require('./')()

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
