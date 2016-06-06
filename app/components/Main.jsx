var React = require('react');

var Nav = require('Nav');


//columns work with different screen sizes
//style cascade up - so small-centred works for all sizes
var Main = (props) => {
  return (
    <div>

      <div>
        <div>
          <Nav />
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>

  );
}

module.exports = Main;
