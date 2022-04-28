import './App.css';
import React from 'react';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (

    <>

        <Router>
          <Routes>
          <Route exact path ='/' component={Login}/>

          </Routes>

          
          
          </Router>    
    </>
   
  );
}

export default App;
