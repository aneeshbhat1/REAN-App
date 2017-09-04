import React from 'react'
import ReactDOM from 'react-dom';  //import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
//Import Container
import Home from './container/Home'
import About from './container/About'
import EventList from './container/EventList'
import Event from './container/EventList/Event'
//Finish Render
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}  >
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/eventlist" component={EventList}>
        <Route path="/eventlist/:userName/:repoName" component={Event}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))

