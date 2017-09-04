import React from 'react';
import { Link } from 'react-router';

function HelloWorld() {
  return <div >Hello World!</div>;
};



function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <span>
    Hello, {formatName(user)}!
  </span>
);


const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}



export default (props) => {
  const links = (
      <div>
        
      </div>
    );
  return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-12"><h1>I'm Here</h1></div>
        </div>
      </div>
  );
};
