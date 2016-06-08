var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps,prevState) {
    //this function gets called when your props or state are updated
    //if the status changes from the previous status - start the timer
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStartTimer();
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

  handleStartTimer: function() {
    this.timer = setInterval( () => {
      var newCount = this.state.count + 1;

      this.setState({
        count: newCount
      });

    }, 1000);

  },

  handleSetTimer: function() {
    this.setState({
      timerStatus: 'started'
    });
  },

  onStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },

  render: function() {

    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className='page-title-timer'>Timer Application</h1>
          <Clock totalSeconds={count}/>
          <Controls countdownStatus={timerStatus} onStatusChange={this.onStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
