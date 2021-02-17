import React from 'react'
import { makeStyles } from '@material-ui/styles'

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

    const classes = useStyles()

    return (
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



{/*
            
            */}