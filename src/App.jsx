import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Default from './container/Default'

  const useStyles = makeStyles({
    container:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }
  })

function App() {

  const classes = useStyles()

  return (
    <div className={classes.container}>
        <Default/>
    </div>
  );
}

export default App;

