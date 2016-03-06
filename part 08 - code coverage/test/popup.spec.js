import sinon from 'sinon';
import Popup from './../src/popup.js';
import assert from 'assert';

describe('Popup', function() {
  if (typeof window === 'undefined') {
    before(function() {
      global.window = { alert() {} };
    });

    after(function() {
      delete global.window;
    });
  }

  describe('#alert', function() {
    let popup;
    let alertSpy;

    beforeEach(function() { alertSpy = sinon.spy(window, 'alert'); });

    afterEach(function() { alertSpy.restore(); });

    describe('instance with default config', function() {
      beforeEach(function() { popup = new Popup(); });

      describe('when invoked with "hello universe!"', function() {
        beforeEach(function() { popup.alert('hello universe!'); });

        it('shows alert with text "hello universe!"', function() {
          assert(alertSpy.calledWith('hello universe!'));
        });
      });
    });

    describe('instance with capitalize as true', function() {
      beforeEach(function() { popup = new Popup({ capitalize: true }); });

      describe('when invoked with "hello universe!"', function() {
        beforeEach(function() { popup.alert('hello universe!'); });

        it('shows alert with text "hello universe!"', function() {
          assert(alertSpy.calledWith('Hello universe!'));
        });
      });
    });
  });
});
