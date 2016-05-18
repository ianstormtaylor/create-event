
# create-event

  Create an `event` object cross browser. Useful for unit testing mostly.

## Installation

    $ component install ianstormtaylor/create-event

## Example
  
```js
var create = require('create-event');
var event = create('keydown', {
  ctrl: true,
  key: 'enter'
});
```

## API

### createEvent(type, [options])
  
  Types:

    'click'
    'dblclick'
    'keydown'
    'keyup'

  Default `options`:

    alt        : false,
    bubbles    : true,
    button     : 0,
    cancelable : true,
    clientX    : 0,
    clientY    : 0,
    ctrl       : false,
    detail     : 1,
    key        : 0, // can be a string like 'enter' for convenience
    meta       : false,
    screenX    : 0,
    screenY    : 0,
    shift      : false,
    view       : window

## License

  MIT
