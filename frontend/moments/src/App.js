import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Route,Switch,Redirect } from "react-router-dom";
import Profile from './components/user/Profile';
import Home from './components/user/Home';
import PageNotFound from './components/user/PageNotFound';
import UserComponent from './components/user/UserComponent';

function App() {
  return (
    <React.Fragment>
      <UserComponent></UserComponent>
      <h2>Hello Routing</h2>
      <Switch>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Redirect from="/myroute" to="/home" exact>
        </Redirect>
        {/* it will always go to this route  */}
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;