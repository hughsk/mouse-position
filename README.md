# mouse-position [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A module for getting the current mouse position on an element, designed for
use in games and animations.

## Usage

[![NPM](https://nodei.co/npm/mouse-position.png)](https://nodei.co/npm/mouse-position/)

### mouse = mousePosition([element], [listener])

Start watching `element` for `mousemove` events. If you don't pass an element,
`mouse` will watch the entire browser window.

`listener` will attach the listener event to another element – helpful, for
example, to catch movement across a larger area but still receive positions
relative to `element`.

### mouse[0]

The current horizontal position of the mouse, in pixels.

### mouse[1]

The current vertical position of the mouse, in pixels.

### mouse.prev[0]

The previous horizontal position of the mouse, in pixels.

### mouse.prev[1]

The previous vertical position of the mouse, in pixels.

### mouse.on('move', callback(event))

Called every time the mouse is moved anywhere on the targeted element.

### mouse.flush()

Call this method at the end of each frame to update the `prevX` and `prevY`
values – you won't get `mousemove` events every frame, so if you don't update
this you might get incorrect values.

### mouse.dispose()

Call this method to remove the internal `mousemove` event listener and any `move` callbacks on the `mouse` object.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/mouse-position/blob/master/LICENSE.md) for details.
