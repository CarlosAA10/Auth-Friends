import React from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom'; 

import LogIn from './components/Login'; 
import FriendsList from './components/FriendsList'; 
import PrivateRoute from './components/PrivateRoute'; 


function App() {
  return (
    <div className="App">
      <h2>Friends App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link> 
          </li>
          <li>
          <Link to="/protected">Friends List</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <PrivateRoute  path="/protected" component={FriendsList} /> 
        <Route exact path="/login" component={LogIn} /> 
      </Switch>
    </div>
  );
}

export default App;
