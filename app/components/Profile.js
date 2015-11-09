var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {name: 'Tyler'},
      repos: [1,2,3]
    }
  },
   componentDidMount: function(){
        this.ref = new Firebase('https://github-note-taker.firebaseio.com');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
        this.unbind('notes');
  },
  render: function(){
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;