import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import User from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';

class App extends Component {

  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/edit/:id" element={< UserForm />} />
              <Route path="/add" element={< UserForm />} />
              <Route exact path="/" element={< User />} />
              <Route path="/*" element={< NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}