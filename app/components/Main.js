import React from 'react';
import { RouteHandler } from 'react-router';
import SearchGithub from './SearchGithub';

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub history={this.props.history} />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Main;