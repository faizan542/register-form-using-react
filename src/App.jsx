import React from 'react';
import './App.css';
// import Login from './component/Login';
import Form from './component/Form';

// let isLoggedIn = false;

let userIsRegistered = false;


function App() {
  return (
    <div className="container">
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
      <Form isRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
