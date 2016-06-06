var React = require('react');
var ReactDOM = require('react-dom');

//destructuring syntax - same as - var Route = require('react-router').Route and so on
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');


//load foundation-sites - uses loaders also
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //router component
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
    </Route>
  </Router>,
  document.getElementById('app')
);
