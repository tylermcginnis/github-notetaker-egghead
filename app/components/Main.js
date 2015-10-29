var React = require('react');
var render = require('react-dom').render;

var Main = React.createClass({
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

render(<Main />, document.getElementById('app'));