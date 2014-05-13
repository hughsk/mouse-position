var Emitter = require('events/')

module.exports = attach

function attach(element) {
  var position = new Emitter

  position.x = 0
  position.y = 0
  position.prevX = 0
  position.prevY = 0
  position.flush = flush

  if (typeof window === 'undefined') {
    return position
  }

  ;(element || window).addEventListener('mousemove', function(e) {
    position.prevX = position.x
    position.prevY = position.y
    position.x = e.clientX - element.offsetLeft
    position.y = e.clientY - element.offsetTop
    position.emit('move', e)
  }, false)

  element = element || document.body

  return position

  function flush() {
    this.prevX = this.x
    this.prevY = this.y
  }
}
