import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Area from './Areas/Area'
import IconMensaje from './Icon-Mensajes/IconMensaje'

export default function AsignaturaMensaje(props) {

    const useStyles = makeStyles({
        container:{
            boxSizing:'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'static',
            background: '#FFFFFF',
            padding: '0px 16px',
            height: '40px',
            width: '976px',
            left: '0px',
            right: '0px',
            top: '88px',
            border: '1px solid #DFDFDA',
            borderBottomLeftRadius: '12px',             
            borderBottomRightRadius: '12px',
            flex: 'none',
            order: '1',
            alignSelf: 'stretch',
            flexGrow: '0',
            marginTop: props.estado === 'nueva' || props.estado === 'demorada' || props.estado === 'noentregada' ? '108px' : '88px',
        },
        containerTD:{
            boxSizing:'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'static',
            background: '#FFFFFF',
            padding: '0px 16px',
            height: '40px',
            width: '976px',
            left: '0px',
            right: '0px',
            top: '88px',
            border: '1px solid #DFDFDA',
            borderBottomLeftRadius: '12px',             
            borderBottomRightRadius: '12px',
            flex: 'none',
            order: '1',
            alignSelf: 'stretch',
            flexGrow: '0',
            marginTop: '108px',
        }
    })

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Area/>
            <IconMensaje/>
        </div>
    )
}
