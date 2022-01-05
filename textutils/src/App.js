import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); 
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#101766';
      showAlert("Dark Mode has been Enabled","success");
      document.title = "TextUtils - Dark Mode";
      /* setInterval(() => {
        document.title = "Install TextUtils"
      }, 1500);
      setInterval(() => {
        document.title = "TextUtils is the Best website"
      }, 1000); */
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} /> 
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Enter the Text to Analyse Below" mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
   
    </>
    
  );
}

export default App;
