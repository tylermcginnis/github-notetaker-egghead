var React = require('react');

var UserProfiles = React.createClass({
  render: function(){
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br />
        Bio: {this.props.bio}
      </div>
    )
  }
});

module.exports = UserProfiles;