var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


describe( 'Timer', () => {

  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {

    it('should set the state to started and start the timer', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.onStatusChange('started');

      expect( timer.state.timerStatus).toBe('started');

      setTimeout( () => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001 );

    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer()


      setTimeout( () => {
        timer.onStatusChange('paused');
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 3001 );

    });

    it('should stop timer on stopped status and set value to 0', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer();


      setTimeout( () => {
        timer.onStatusChange('stopped');

        setTimeout( () => {
          expect(timer.state.count).toBe(0);
          expect(timer.state.timerStatus).toBe('stopped');
          done();
        }, 1001 );

      }, 3001 );

    });

  });

} );
