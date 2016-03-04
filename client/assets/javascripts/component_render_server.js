require('babel-core/register');

var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var React = require('react');
var ReactDOM = require('react-dom');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

function toUnderscore(str){
  // CommentSection -> comment_section
  return str.replace(/([A-Z])/g, function($1) { return "_" + $1.toLowerCase(); }).slice(1);
}

function renderToString(component, props, callback) {
  var component = require('./components/' + toUnderscore(component)).default;
  callback(React.renderToString(React.createElement(component, props)));
}

app.post('/', function( req, res) {
  // return res.end(req.body.props);
  renderToString(req.body.component, req.body.props, function(str) {
    res.end(str);
  });
});

app.listen(3001);
