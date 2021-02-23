import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Home from './container/Home' 
import { DataProvider } from './Context/DataContext'

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
    <DataProvider>
      <div className={classes.container}>
          <Home/>
      </div>
    </DataProvider>
  );
}

export default App;

