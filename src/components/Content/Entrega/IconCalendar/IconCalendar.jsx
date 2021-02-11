import React from 'react'
import { makeStyles } from '@material-ui/styles'

    const useStyles = makeStyles({
        container:{
            position: 'absolute',
            width: '24px',
            height: '23px',
            left: '0px',
            top: '1px',    
        },
        vector1:{
            position: 'absolute',
            left: '70.83%',
            right: '20.83%',
            top: '4.17%',
            bottom: '75%',
            background: '#1A1A1A',
        },
        vector2:{
            position: 'absolute',
            left: '20.83%',
            right: '70.83%',
            top: '4.17%',
            bottom: '75%',
            background: '#1A1A1A',
        },
        vector3:{
            position: 'absolute',
            left: '0',
            right: '0',
            top: '16.67%',
            bottom: '0',
            border: '2px solid #1A1A1A',
            borderRadius:'2.5px'
        },
        vector4:{
            position: 'absolute',
            left: '0',
            right: '0',
            top: '37.5%',
            bottom: '54.17%',
            background: '#1A1A1A',
        }
    })

export default function IconCalendar() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <span className={classes.vector1}></span>
            <span className={classes.vector2}></span>
            <span className={classes.vector3}></span>
            <span className={classes.vector4}></span>
        </div>
    )
}
