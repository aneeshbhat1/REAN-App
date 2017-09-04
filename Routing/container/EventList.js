import React from 'react'
import NavLink from '../modules/NavLink'
import { browserHistory } from 'react-router' // For URL Passing
var createReactClass = require('create-react-class'); // // React Update & ES6
export default createReactClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/eventlist/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/eventlist/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
 
      </div>
    )
  }
})
