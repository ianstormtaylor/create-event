
var extend = require('extend')
  , keycode = require('keycode');


/**
 * Expose `createEvent`.
 */

module.exports = !!document.createEvent
  ? createEvent
  : createIeEvent;


/**
 * Default options.
 */

var defaults = {
  alt           : false,
  bubbles       : true,
  button        : 0,
  cancelable    : true,
  clientX       : 0,
  clientY       : 0,
  ctrl          : false,
  detail        : 1,
  key           : 0,
  meta          : false,
  relatedTarget : null,
  screenX       : 0,
  screenY       : 0,
  shift         : false,
  view          : window
};


/**
 * Create a non-IE event object.
 *
 * @param {String} type
 * @param {Object} options
 */

function createEvent (type, options) {
  switch (type) {
    case 'dblclick':
    case 'click':
      return createMouseEvent(type, options);
    case 'keydown':
    case 'keyup':
      return createKeyboardEvent(type, options);
  }
}


/**
 * Create a non-IE mouse event.
 *
 * @param {String} type
 * @param {Object} options
 */

function createMouseEvent (type, options) {
  options = clean(type, options);
  var e = document.createEvent('MouseEvent');
  e.initMouseEvent(
    type,
    options.bubbles,      // bubbles?
    options.cancelable,   // cancelable?
    options.view,         // view
    options.detail,       // detail
    options.screenX,      // screenX
    options.screenY,      // screenY
    options.clientX ,     // clientX
    options.clientY,      // clientY
    options.ctrl,         // ctrlKey
    options.alt,          // altKey
    options.shift,        // shiftKey
    options.meta,         // metaKey
    options.button,       // button
    options.relatedTarget // relatedTarget
  );
  return e;
}


/**
 * Create a non-IE keyboard event.
 *
 * @param {String} type
 * @param {Object} options
 */

function createKeyboardEvent (type, options) {
  options = clean(type, options);
  var e = document.createEvent('KeyboardEvent');
  (e.initKeyEvent || e.initKeyboardEvent).call(
    e,
    type,
    options.bubbles,    // bubbles?
    options.cancelable, // cancelable?
    options.view,       // view
    options.ctrl,       // ctrlKey
    options.alt,        // altKey
    options.shift,      // shiftKey
    options.meta,       // metaKey
    options.key,        // keyCode
    options.key         // charCode
  );

  // super hack: http://stackoverflow.com/questions/10455626/keydown-simulation-in-chrome-fires-normally-but-not-the-correct-key/10520017#10520017
  if (e.keyCode !== options.key) {
    Object.defineProperty(e, 'keyCode', {
      get: function () { return options.key; }
    });
    Object.defineProperty(e, 'charCode', {
      get: function () { return options.key; }
    });
    Object.defineProperty(e, 'which', {
      get: function () { return options.key; }
    });
    Object.defineProperty(e, 'shiftKey', {
      get: function () { return options.shift; }
    });
  }

  return e;
}


/**
 * Create an IE event. Surprisingly nicer API, eh?
 *
 * @param {String} type
 * @param {Object} options
 */

function createIeEvent (type, options) {
  options = clean(type, options);
  var e = document.createEventObject();
  e.altKey = options.alt;
  e.bubbles = options.bubbles;
  e.button = options.button;
  e.cancelable = options.cancelable;
  e.clientX = options.clientX;
  e.clientY = options.clientY;
  e.ctrlKey = options.ctrl;
  e.detail = options.detail;
  e.metaKey = options.meta;
  e.screenX = options.screenX;
  e.screenY = options.screenY;
  e.shiftKey = options.shift;
  e.keyCode = options.key;
  e.charCode = options.key;
  e.view = options.view;
  return e;
}


/**
 * Back an `options` object by defaults, and convert some convenience features.
 *
 * @param {String} type
 * @param {Object} options
 * @return {Object} [description]
 */

function clean (type, options) {
  options = extend({}, defaults, options);
  if ('dblclick' === type) options.detail = 2;
  if ('string' === typeof options.key) options.key = keycode(options.key);
  return options;
}
