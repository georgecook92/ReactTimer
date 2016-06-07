var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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

        //intentionally no break here as if you stop, you also want the clear Interval
        case 'stopped':
          this.setState({count: 0});

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer: function() {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;

      //ternary if new is >= 0 use newCount - else use 0
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }

    }, 1000);



  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  render: function() {
    //after the prop gets called - it calls the handleSetCountdown function

    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    };

    return (
      <div>

        <h1 className='page-title'>Countdown App</h1>

        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
