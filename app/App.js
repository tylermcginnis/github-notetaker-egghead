var React = require('react');
var render = require('react-dom').render;
var Router = require('react-router').Router;
var routes = require('./config/routes');


render(
    <Router >{routes}</Router>,
    document.getElementById('app')
    );
