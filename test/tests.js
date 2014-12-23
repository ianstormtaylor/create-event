describe('create-event', function () {

var assert = require('assert')
  , create = require('create-event');

describe('click', function () {

  it('should have the right defaults', function () {
    var e = create('click');
    assert(true === e.bubbles);
    assert(true === e.cancelable);
    assert(window === e.view);
    assert(1 === e.detail);
    assert(0 === e.screenX);
    assert(0 === e.screenY);
    assert(0 === e.clientX);
    assert(0 === e.clientY);
    assert(false === e.ctrlKey);
    assert(false === e.altKey);
    assert(false === e.shiftKey);
    assert(false === e.metaKey);
    assert(0 === e.button);
  });

  it('should be able to set options', function () {
    var e = create('click', {
      bubbles: false,
      cancelable: false,
      screenX: 1,
      screenY: 2,
      clientX: 3,
      clientY: 4,
      ctrl: true,
      alt: true,
      shift: true,
      meta: true,
      button: 2
    });
    assert(false === e.bubbles);
    assert(false === e.cancelable);
    assert(window === e.view);
    assert(1 === e.detail);
    assert(1 === e.screenX);
    assert(2 === e.screenY);
    assert(3 === e.clientX);
    assert(4 === e.clientY);
    assert(true === e.ctrlKey);
    assert(true === e.altKey);
    assert(true === e.shiftKey);
    assert(true === e.metaKey);
    assert(2 === e.button);
  });

});

describe('dblclick', function () {

  it('should have the right defaults', function () {
    var e = create('dblclick');
    assert(true === e.bubbles);
    assert(true === e.cancelable);
    assert(window === e.view);
    assert(2 === e.detail);
    assert(0 === e.screenX);
    assert(0 === e.screenY);
    assert(0 === e.clientX);
    assert(0 === e.clientY);
    assert(false === e.ctrlKey);
    assert(false === e.altKey);
    assert(false === e.shiftKey);
    assert(false === e.metaKey);
    assert(0 === e.button);
  });

  it('should be able to set options', function () {
    var e = create('dblclick', {
      bubbles: false,
      cancelable: false,
      screenX: 1,
      screenY: 2,
      clientX: 3,
      clientY: 4,
      ctrl: true,
      alt: true,
      shift: true,
      meta: true,
      button: 2
    });
    assert(false === e.bubbles);
    assert(false === e.cancelable);
    assert(window === e.view);
    assert(2 === e.detail);
    assert(1 === e.screenX);
    assert(2 === e.screenY);
    assert(3 === e.clientX);
    assert(4 === e.clientY);
    assert(true === e.ctrlKey);
    assert(true === e.altKey);
    assert(true === e.shiftKey);
    assert(true === e.metaKey);
    assert(2 === e.button);
  });

});

describe('keydown', function () {

  it('should have the right defaults', function () {
    var e = create('keydown');
    assert(true === e.bubbles);
    assert(true === e.cancelable);
    assert(window === e.view);
    assert(false === e.ctrlKey);
    assert(false === e.altKey);
    assert(false === e.shiftKey);
    assert(false === e.metaKey);
    assert(0 === e.keyCode);
    assert(0 === e.charCode);
  });

  it('should be able to set options', function () {
    var e = create('keydown', {
      bubbles: false,
      cancelable: false,
      ctrl: true,
      alt: true,
      shift: true,
      meta: true,
      key: 42
    });
    assert(false === e.bubbles);
    assert(false === e.cancelable);
    assert(window === e.view);
    assert(true === e.ctrlKey);
    assert(true === e.altKey);
    assert(true === e.shiftKey);
    assert(true === e.metaKey);
    assert(42 === e.keyCode);
    assert(42 === e.charCode);
  });

  it('should be able to pass a string keyname', function () {
    var e = create('keydown', { key: 'enter'});
    assert(13 === e.keyCode);
  });

  it('should support `shift: false`', function(){
    var e = create('keydown', { key: 'tab', shift: false });
    assert(!e.shiftKey);
  });
});

describe('keyup', function () {

  it('should have the right defaults', function () {
    var e = create('keyup');
    assert(true === e.bubbles);
    assert(true === e.cancelable);
    assert(window === e.view);
    assert(false === e.ctrlKey);
    assert(false === e.altKey);
    assert(false === e.shiftKey);
    assert(false === e.metaKey);
    assert(0 === e.keyCode);
    assert(0 === e.charCode);
  });

  it('should be able to set options', function () {
    var e = create('keyup', {
      bubbles: false,
      cancelable: false,
      ctrl: true,
      alt: true,
      shift: true,
      meta: true,
      key: 42
    });
    assert(false === e.bubbles);
    assert(false === e.cancelable);
    assert(window === e.view);
    assert(true === e.ctrlKey);
    assert(true === e.altKey);
    assert(true === e.shiftKey);
    assert(true === e.metaKey);
    assert(42 === e.keyCode);
    assert(42 === e.charCode);
  });

  it('should be able to pass a string keyname', function () {
    var e = create('keyup', { key: 'enter'});
    assert(13 === e.keyCode);
  });

});

});
