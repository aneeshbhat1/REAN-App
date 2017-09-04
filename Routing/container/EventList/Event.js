import React from 'react'
var createReactClass = require('create-react-class');

export default createReactClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})
