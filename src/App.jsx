import React, { createContext, useState } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
// import TravelInformation from './components/Hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Hotel from './components/Hotel/Hotel';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booking/:TravelCard">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/hotel/:TravelCard">
              <Hotel></Hotel>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
 