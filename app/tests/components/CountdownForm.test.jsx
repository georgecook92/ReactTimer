var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    //create spy
    var spy = expect.createSpy();
    //render form into dom
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //select the form via jQuery
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    //set seconds value through the ref
    countdownForm.refs.seconds.value = '109';
    //first dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    //create spy
    var spy = expect.createSpy();
    //render form into dom
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    //select the form via jQuery
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    //set seconds value through the ref
    countdownForm.refs.seconds.value = '';
    //first dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
