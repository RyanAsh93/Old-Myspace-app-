import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import FetchUser from './components/FetchUser'


const App = () => (
  <>
    <NavBar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </>
)

export default App;
