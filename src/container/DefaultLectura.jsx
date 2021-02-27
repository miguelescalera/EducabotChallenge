import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Content from '../components/Content/Content'
import AsignaturaMensaje from '../components/Asignatura+Mensajes/AsignaturaMensaje'

export default function Default(props) {

    const useStyles = makeStyles({
        container:{
                height: '128px',
                width: '976px',
                marginBottom: '18px',
                marginTop: '18px',
            }
        })

    const classes = useStyles()
    
    return ( 
        <div className={classes.container}>
            <Content estado={props.estado} />
            <AsignaturaMensaje estado={props.estado}/>
        </div>
    )
}