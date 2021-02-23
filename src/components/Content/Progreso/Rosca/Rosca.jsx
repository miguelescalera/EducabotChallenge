import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import { DataContext } from '../../../../Context/DataContext'

    const useStyles = makeStyles({
        container:{
            position: 'static',
            width: '24px',
            height:' 24px',
            left: '0px',
            top: '6px',        
            flex: 'none',
            order: '0',
            flexGrow: '0',
            margin: '0px',
            borderRadius:'25%'
        },
        avance1:{
            position: 'absolute',
            width: '10px',
            height: '10px',
            left: '14px',
            top: '-1.7px',        
            
        },
        
        rosca:{
            position: 'absolute',
            width: '20px',
            height: '20px',
            left: '2px',
            top: '2px'
        }
    })

export default function Rosca() {

    const { estado } = useContext(DataContext)
    const classes = useStyles()

    return (
            (estado.nueva) ? 
            <div className={classes.container}>
            <span className={classes.rosca}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="4"/>
                <circle cx="12" cy="12" r="10" stroke="#50D174" stroke-opacity="0.2" stroke-width="4"/>
                </svg>
            </span>
            </div>
            :
            (estado.terminada) ?
            <div className={classes.container}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9908 8.82024 22.7235 5.77336 20.4751 3.52492C18.2266 1.27648 15.1798 0.00923395 12 0V0ZM10 17.414L4.58601 12L6.00001 10.586L10 14.586L18 6.586L19.414 8L10 17.414Z" fill="#50D174"/>
            </svg>
            </div>
            :
            <div className={classes.container}>
            <span className={classes.rosca}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="4"/>
                <circle cx="12" cy="12" r="10" stroke="#50D174" stroke-opacity="0.2" stroke-width="4"/>
                </svg>
            </span>
            <span className={classes.avance1}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12C10 6.47715 5.52285 2 0 2" stroke="#50D174" stroke-width="4"/>
                </svg>
            </span>
            </div>
    )
}

