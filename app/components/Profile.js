var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes').default;
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers').default;
var _ = require('lodash');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  init: function(){
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(this.props.params.username)
        .then(function(dataObj){
          this.setState({
            bio: dataObj.bio,
            repos: dataObj.repos
          });
        }.bind(this));
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://github-note-taker.firebaseio.com');
    this.init();
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  componentWillReceiveProps: function(){
    this.unbind('notes');
    this.init();
  },
  handleAddNote: function(newNote){
    var noteArr = [];
    this.state.notes.forEach(function(note){
      noteArr.push(_.pick(note, '.value'));
    });
    noteArr.push(newNote);
    this.ref.child(this.props.params.username).set(noteArr);
  },
  render: function(){
    var username = this.props.params.username;
    return (
        <div className="row">
          <div className="col-md-4">
            <UserProfile username={username} bio={this.state.bio}/>
          </div>
          <div className="col-md-4">
            <Repos username={username} repos={this.state.repos} />
          </div>
          <div className="col-md-4">
            <Notes
                username={username}
                notes={this.state.notes}
                addNote={this.handleAddNote} />
          </div>
        </div>
    )
  }
});

module.exports = Profile;