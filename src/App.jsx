import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Home from './container/Home' 

  const useStyles = makeStyles({
    container:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background:'#BDBDBD'
    }
  })

function App() {

  const classes = useStyles()

  return (
    <div className={classes.container}>
        <Home/>
    </div>
  );
}

export default App;

