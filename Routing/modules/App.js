//Required Component from node
import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
var createReactClass = require('create-react-class');
//  import from modules
import NavLink from './NavLink'
//import from container
import Home from '../container/Home'
var Jumbotron = createReactClass({
    render: function (params) {
        return (
            <div>
              <div className="jumbotron">
                  <h1>Marketing stuff!</h1>
                  <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
                  <p><a className="btn btn-lg btn-success btn-big" href="#" role="button">Get started today</a></p>
              </div>
              <div className="row">
                  <div className="col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
                  </div>
                  <div className="col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
                  </div>
                  <div className="col-lg-4">
                      <h2>Heading</h2>
                      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                      <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
                  </div>
              </div>
            </div>
        );
    }
});
var AppNavbar = createReactClass({
    render: function (params) {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
            {/*<li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>*/}
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <IndexLink to="/" className="navbar-brand" activeClassName="navbar-brand">Event Manager</IndexLink>
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Eventlist</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <NavLink className="dropdown-item" to="/eventlist">Even List</NavLink>
                      <IndexLink to="/" className="dropdown-item">Event Manager</IndexLink>
                      <IndexLink to="/" className="dropdown-item">Event Manager</IndexLink>
                    </div>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
        );
    }
});
export default createReactClass({
    render() {
      //console.log(this.props.children);
        return (
            <div className="container">
              <AppNavbar/>
                {this.props.children || <Home/>}
                {/*<Jumbotron/>*/}
             </div>
        )
    }
})

// {this.props.children == null ? <Home/> : <Jumbotron/>}
