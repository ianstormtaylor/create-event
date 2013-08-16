
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

## License

  MIT
