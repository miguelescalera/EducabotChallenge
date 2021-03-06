import React from 'react'
import { makeStyles } from '@material-ui/styles'

export default function Info(props) {

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            position: 'static',
            width: '124px',
            height: '36px',
            right: '0px',
            top: '0px',       
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0%',
        },
        text:{
            position: 'static',
            width: '113px',
            height: '18px',
            left: '0px',
            top: 'calc(50% - 18px/2 - 9px)',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            color: '#6D7878',
            flex: 'none',
            order:' 0',
            flexGrow: '0',
            margin: '0%',
        },
        fecha:{
            position: 'static',
            width: '70px',
            height: '18px',
            left: '0px',
            top: 'calc(50% - 18px/2 + 9px)',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            color: props.estado === 'demorada' || props.estado === 'noentregada' ? 'rgba(244, 92, 58, 1)' : '#1A1A1A',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0%',
        }
    })

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <p className={classes.text}>Fecha de Entrega</p>
            <p className={classes.fecha}>15 de Abril</p>
        </div>
    )
}
