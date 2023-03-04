import React from 'react';
//import { Switch, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider,  Router, Route, Link } from 'react-router-dom';

import App from './Appm.jsx';
import Report from './AppReoprt';
import { db } from './components/firestore';

function Ap() {
  const handleAddRegistration = (formData) => {
    db.collection('Schools').add(formData).then(() => {
      console.log('Registration added successfully');
    }).catch((error) => {
      console.error('Error adding registration:', error);
    });
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AppReoprtBox">Register</Link></li>
          <li><Link to="/Appreoprt">Report</Link></li>
        </ul>
      </nav>
      
        <Route exact path="/">
          <h1>Welcome to our school!</h1>
        </Route>
        <Route path="/AppReoprtBox">
         <h1>hii</h1>
        </Route>
        <Route path="/AppReport">
          <report/>
        </Route>
      
    </Router>
  );
}

export default Ap;