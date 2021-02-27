import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import Content from '../components/Content/Content'
import AsignaturaMensaje from '../components/Asignatura+Mensajes/AsignaturaMensaje'
import { useMediaQuery } from '@material-ui/core';

export default function Demorada(props) {

    const useStyles = makeStyles(theme=>({
        container:{
            height: '128px',
            width: '976px',
            marginBottom: '18px',
            marginTop: '18px',
            [theme.breakpoints.up('mobile')]:{
                backgroundColor: 'red',
                height: '50px'
            }
            }
        }))

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Content estado={props.estado}/>
            <AsignaturaMensaje estado={props.estado}/>
        </div>
    )
}