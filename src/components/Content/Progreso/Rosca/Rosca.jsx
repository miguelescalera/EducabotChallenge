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
            left: '3px',
            top: '9px',        
            border: '4px solid rgba(80, 209, 116, 1)'
        },
        avance2:{
            position: 'absolute',
            visibility: 'hidden',
            width: '10px',
            height: '18.35px',
            left: '12px',
            top: '2px',
            border: '4px solid',
        },
        avance3:{
            position: 'absolute',
            visibility: 'hidden',
            width:' 20px',
            height: '20px',
            left: '2px',
            top: '2px'
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
            <span className={classes.avance1}></span>
            <span className={classes.avance2}></span>
            <span className={classes.avance3}></span>
            <span className={classes.rosca}></span>
        </div>
    )
}
