import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './container/Home' 
import Lectura from './container/Lectura'
import Pregunta from './container/Pregunta'
import { DataProvider } from './Context/DataContext'

function App() {
  return (
    <Router>
      <DataProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/lectura" exact component={Lectura}/>
          <Route path="/Preguntas" exact component={Pregunta}/>
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;

