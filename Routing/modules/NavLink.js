// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
var createReactClass = require('create-react-class');
export default createReactClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
