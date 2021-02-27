import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import DefaultLectura from './DefaultLectura'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        background: '#BDBDBD'
    },
    flecha:{
        position: 'fixed',
        top: '25px',
        left: '25px',
        background: 'linear-gradient(0deg, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6)), #4F36D6',
        color: '#FFFFFF'
    }
})

export default function Lectura() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Link to="/">
                <IconButton className={classes.flecha} >
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
            {['default', 'nueva', 'demorada', 'terminada'].map(valor=>{
                return(
                <DefaultLectura estado={valor}/>
                )
            })}
        </div>
    )
}

