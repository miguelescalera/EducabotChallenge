import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Content from '../components/Content/Content'
import AsignaturaMensaje from '../components/Asignatura+Mensajes/AsignaturaMensaje'

    const useStyles = makeStyles({
        container:{
            height: '128px',
            width: '976px'
        }
    })

export default function Default() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Content/>
            <AsignaturaMensaje/>
        </div>
    )
}
