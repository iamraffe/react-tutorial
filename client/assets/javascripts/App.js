import React from 'react';
import ReactDOM from 'react-dom';

function toUnderscore(str) {
  return str.replace(/([A-Z])/g, function($1) { return "_" + $1.toLowerCase(); }).slice(1);
}

window.renderReact = (id, component, props) => {
  const c = require("components/" + toUnderscore(component)).default;
  ReactDOM.render(React.createElement(c, props), document.getElementById(id));
}