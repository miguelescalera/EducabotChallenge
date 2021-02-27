import React from 'react'
import { makeStyles } from '@material-ui/styles'

    const useStyles = makeStyles({
        container:{
            position: 'absolute',
            width: '24px',
            height: '23px',
            left: '0px',
            top: '4px',    
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

export default function IconCalendar(props) {

    const classes = useStyles()

    return (
        (props.estado === 'terminada') ? 
        <div className={classes.container}>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0V3H17V0H19V3H21C22.6569 3 24 4.34315 24 6V8V10V20C24 21.6569 22.6569 23 21 23H3C1.34314 23 0 21.6569 0 20V10V8V6C0 4.34315 1.34315 3 3 3H5V0H7ZM22 6V8H2V6C2 5.44772 2.44772 5 3 5H5H7H17H19H21C21.5523 5 22 5.44771 22 6ZM2 20V10H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20ZM12.2072 17.7071L16.7072 13.2071L15.293 11.7929L11.5001 15.5858L9.70718 13.7929L8.29297 15.2071L10.793 17.7071C11.1835 18.0976 11.8167 18.0976 12.2072 17.7071Z" fill="#1A1A1A"/>
            </svg>
        </div>
        : 
        <div className={classes.container}>
            <span className={classes.vector1}></span>
            <span className={classes.vector2}></span>
            <span className={classes.vector3}></span>
            <span className={classes.vector4}></span>
        </div>
    )
}
