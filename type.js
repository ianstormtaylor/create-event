
/**
 * Arguments
 */

var args = [
  'keyup',
  false,
  false,
  window,
  '+',
  3,
  true,
  false,
  true,
  false,
  false
];

/**
 * Get create event type.
 * 
 * IE `.initKeyboardEvent` signature is different
 * from all other browsers so we have to put this ugly
 * code here, because ie is awesome.
 * 
 * taken from: https://github.com/termi/DOM-Keyboard-Event-Level-3-polyfill/blob/0.4/DOMEventsLevel3.shim.js (MIT)
 */

module.exports = (function(){
  try {
    var e = document.createEvent('KeyboardEvent');
    e.initKeyboardEvent.apply(e, args);
    return ('+' == (e.keyIdentifier || e.key))
      && (3 == (e.keyLocation || e.location))
      && (e.ctrlKey ? e.altKey ? 1 : 3 : e.shiftKey ? 2 : 4)
      || ('+' == e.char) && 5
      || 9;
  } catch (_) { return 0; }
})();
