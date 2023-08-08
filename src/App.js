import { useState } from 'react';
import './App.css';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      showAlert('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode has been enabled", "success");
    }
  }


  return (
    <>

      <Router>
        <Navebar titles="TextUtiles" labels="that my web" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} titles="Enter text" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>


    </>
  );
}

export default App;
