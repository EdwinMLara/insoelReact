import './App.css';
import React, { useState } from 'react';
import clsx from 'clsx';

import {makeStyles} from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBarInsoel from './Components/NavBarInsoel';
import DrawerInsoel from './Components/DrawerInsoel';
import Usuarios from './Components/Usuarios';
import Login from './Components/Login';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  usuariosdiv:{
    marginTop: '10px'
  }
 
}));

function Sensores(){
  return <h2>Sensores</h2>;
}

function Productos(){
  return <h2>Productos</h2>;
}

function App() {
  const classes = useStyles();

  const [stateDrawer, setStateDrawer] = useState(false);

  const handleOpenDrawer = () =>{
    setStateDrawer(true);
  };

  const handleCloseDrawer = () =>{
    setStateDrawer(false);
  };

  return (
    <div className="App">
      <Router>
        <NavBarInsoel onClick={(stateDrawer) => handleOpenDrawer(stateDrawer)} state={stateDrawer} />
        <DrawerInsoel onClick={(stateDrawer) => handleCloseDrawer(stateDrawer)} state={stateDrawer}/>
        
        {/*<main 
          className={clsx(classes.content, {
          [classes.contentShift]: stateDrawer})}>
        
          <Switch>
            <Route exact path="/">
              <Usuarios className={classes.usuariosdiv}/>
            </Route>

            <Route path="/Sensores">
              <Sensores/>
            </Route>

            <Route path="/Productos">
              <Productos/>
            </Route>
          </Switch>
          </main>*/}

          <Login/>
      </Router>
    </div>
  );
}

export default App;
