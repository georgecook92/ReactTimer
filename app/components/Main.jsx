var React = require('react');

var Nav = require('Nav');


//columns work with different screen sizes
//style cascade up - so small-centred works for all sizes
var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          {props.children}
        </div>
      </div>
    </div>

  );
}

module.exports = Main;
