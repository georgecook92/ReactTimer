var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {

    //need to add done argument to say it is async
    //call done once the test is done
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      // wait just over a second to see if state has been updated
      //async
      setTimeout( () => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001 );

    });

    it('should not set the count lower than 0', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      // wait just over a second to see if state has been updated
      //async
      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001 );
    });

  });

});
