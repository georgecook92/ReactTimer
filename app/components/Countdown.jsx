var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps,prevState) {
    //this function gets called when your props or state are updated
    //if the status changes from the previous status - start the timer
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        default:

      }
    }
  },

  startTimer: function() {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;

      //ternary if new is >= 0 use newCount - else use 0
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  render: function() {
    //after the prop gets called - it calls the handleSetCountdown function

    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
