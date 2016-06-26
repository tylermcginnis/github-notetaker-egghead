var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
// This probably isn't the right place for this if we want access for the entire app
var config = {
  apiKey: '<YOURVALUE>',
  authDomain: '<YOURVALUE>',
  databaseURL: '<YOURVALUE>',
  storageBucket: '<YOURVALUE>',
};
Firebase.initializeApp(config);

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [1,2,3],
      bio: {
        name: 'Tyler McGinnis'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentWillMount: function(){
    this.ref = Firebase.database().ref('usernames');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef,'notes');
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
})

module.exports = Profile;
