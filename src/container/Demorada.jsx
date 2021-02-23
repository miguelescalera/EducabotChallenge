import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Content from '../components/Content/Content'
import AsignaturaMensaje from '../components/Asignatura+Mensajes/AsignaturaMensaje'
import { DataContext } from '../Context/DataContext'

    const useStyles = makeStyles({
    container:{
        height: '128px',
        width: '976px',
        marginBottom: '24px'

        }
    })

    const estado = {
        activo: 'Terminada'
    }

export default function Demorada() {

    const { setEstado } = useContext(DataContext)
    const classes = useStyles()

    useEffect(() => {
        setEstado(estado)
    })

    return (
        <div className={classes.container}>
            <Content/>
            <AsignaturaMensaje/>
        </div>
    )
}
