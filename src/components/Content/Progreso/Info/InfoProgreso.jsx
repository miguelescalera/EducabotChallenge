import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

export default function InfoProgreso(props) {

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            position: 'static',
            width: '57px',
            height: '36px',
            right: '0px',
            top: '0px',        
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0px 16px'
        },
        text:{
            position: 'static',
            width: '57px',
            height: '18px',
            left: '0px',
            top: 'calc(50% - 18px/2 - 9px)',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: props.estado === 'terminada' || props.estado === 'correccion' ? 'bold' : 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',        
            color: props.estado === 'terminada' || props.estado === 'correccion' ? '#1A1A1A' : '#6D7878'
        },
        porcentaje:{
            position: 'static',
            width: '29px',
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
            color: '#1A1A1A'
        },
        completa:{
            position: 'static',
            width: '57px',
            height: '18px',
            left: '0px',
            top: 'calc(50% - 18px/2 - 9px)',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',        
            color: '#1A1A1A'
        }
    })

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant="body1" className={classes.text}> {props.estado === 'correccion' ? 'Esperando' : props.estado === 'terminada' ? 'Actividad' : 'Progreso' } </Typography>
            <Typography variant="body1" className={classes.porcentaje}> {props.estado === 'correccion' ? 'corrección' : props.estado === 'nueva' ? '-' : props.estado === 'terminada' ? 'Completada' : '25%'} </Typography>
        </div>
    )
}

