'use strict';

var assert = require('proclaim');
var create = require('../lib');

describe('create-event', function() {
  describe('click', function() {
    it('should have the right defaults', function() {
      var e = create('click');
      assert(e.bubbles === true);
      assert(e.cancelable === true);
      assert(e.view === window);
      assert(e.detail === 1);
      assert(e.screenX === 0);
      assert(e.screenY === 0);
      assert(e.clientX === 0);
      assert(e.clientY === 0);
      assert(e.ctrlKey === false);
      assert(e.altKey === false);
      assert(e.shiftKey === false);
      assert(e.metaKey === false);
      assert(e.button === 0);
    });

    it('should be able to set options', function() {
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
      assert(e.bubbles === false);
      assert(e.cancelable === false);
      assert(e.view === window);
      assert(e.detail === 1);
      assert(e.screenX === 1);
      assert(e.screenY === 2);
      assert(e.clientX === 3);
      assert(e.clientY === 4);
      assert(e.ctrlKey === true);
      assert(e.altKey === true);
      assert(e.shiftKey === true);
      assert(e.metaKey === true);
      assert(e.button === 2);
    });
  });

  describe('dblclick', function() {
    it('should have the right defaults', function() {
      var e = create('dblclick');
      assert(e.bubbles === true);
      assert(e.cancelable === true);
      assert(e.view === window);
      assert(e.detail === 2);
      assert(e.screenX === 0);
      assert(e.screenY === 0);
      assert(e.clientX === 0);
      assert(e.clientY === 0);
      assert(e.ctrlKey === false);
      assert(e.altKey === false);
      assert(e.shiftKey === false);
      assert(e.metaKey === false);
      assert(e.button === 0);
    });

    it('should be able to set options', function() {
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
      assert(e.bubbles === false);
      assert(e.cancelable === false);
      assert(e.view === window);
      assert(e.detail === 2);
      assert(e.screenX === 1);
      assert(e.screenY === 2);
      assert(e.clientX === 3);
      assert(e.clientY === 4);
      assert(e.ctrlKey === true);
      assert(e.altKey === true);
      assert(e.shiftKey === true);
      assert(e.metaKey === true);
      assert(e.button === 2);
    });
  });

  describe('keydown', function() {
    it('should have the right defaults', function() {
      var e = create('keydown');
      assert(e.bubbles === true);
      assert(e.cancelable === true);
      assert(e.view === window);
      assert(e.ctrlKey === false);
      assert(e.altKey === false);
      assert(e.shiftKey === false);
      assert(e.metaKey === false);
      assert(e.keyCode === 0);
      assert(e.charCode === 0);
    });

    it('should be able to set options', function() {
      var e = create('keydown', {
        bubbles: false,
        cancelable: false,
        ctrl: true,
        alt: true,
        shift: true,
        meta: true,
        key: 42
      });
      assert(e.bubbles === false);
      assert(e.cancelable === false);
      assert(e.view === window);
      assert(e.ctrlKey === true);
      assert(e.altKey === true);
      assert(e.shiftKey === true);
      assert(e.metaKey === true);
      assert(e.keyCode === 42);
      assert(e.charCode === 42);
    });

    it('should be able to pass a string keyname', function() {
      var e = create('keydown', { key: 'enter' });
      assert(e.keyCode === 13);
    });

    it('should support `shift: false`', function() {
      var e = create('keydown', { key: 'tab', shift: false });
      assert(!e.shiftKey);
    });
  });

  describe('keyup', function() {
    it('should have the right defaults', function() {
      var e = create('keyup');
      assert(e.bubbles === true);
      assert(e.cancelable === true);
      assert(e.view === window);
      assert(e.ctrlKey === false);
      assert(e.altKey === false);
      assert(e.shiftKey === false);
      assert(e.metaKey === false);
      assert(e.keyCode === 0);
      assert(e.charCode === 0);
    });

    it('should be able to set options', function() {
      var e = create('keyup', {
        bubbles: false,
        cancelable: false,
        ctrl: true,
        alt: true,
        shift: true,
        meta: true,
        key: 42
      });
      assert(e.bubbles === false);
      assert(e.cancelable === false);
      assert(e.view === window);
      assert(e.ctrlKey === true);
      assert(e.altKey === true);
      assert(e.shiftKey === true);
      assert(e.metaKey === true);
      assert(e.keyCode === 42);
      assert(e.charCode === 42);
    });

    it('should be able to pass a string keyname', function() {
      var e = create('keyup', { key: 'enter' });
      assert(e.keyCode === 13);
    });
  });
});
