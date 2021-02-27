import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

export default function Texto(props) {

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            position: 'absolute',
            width: '340px',
            height: '67px',
            left: '88px',
            top: '25px',
            flex: 'none',
            order: '0',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px'
        },
        materia:{
            position: 'static',
            width: '340px',
            height: '16px',
            left: '0px',
            top: '0px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '16px',
            color: '#1A1A1A',
            flex: 'none',
            order: '0',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        },
        titulo:{
            position: 'static',
            width: '340px',
            height: '23px',
            left: '0px',
            top: '16px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: props.estado === 'terminada' ? 'bold' : 'normal',
            fontSize: '18px',
            lineHeight: '23px',
            color: '#1A1A1A',
            flex: 'none',
            order: '1',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        },
        containertexto:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '2px 4px', 
            position: 'static',
            width: props.estado === 'noentregada' ? '87px' : props.estado === 'nueva' ? '55px' : '115px',
            height: '20px',
            left: '0px',
            top: '47px',
            background: props.estado === 'nueva' ? '#27A8FF' : 'linear-gradient(0deg, rgba(244, 92, 58, 0.1), rgba(244, 92, 58, 0.1)), #FFFFFF',
            borderRadius: '3px',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '8px 0px',
        },
        nueva:{
            position: 'static',
            width: props.estado === 'noentregada' ? '79px' : props.estado === 'nueva' ? '47px' : '107px',
            height: '16px',
            left: '4px',
            top: '2px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '16px',
            textAlign: 'end',
            color: props.estado === 'nueva' ? '#FFFFFF' : '#F45C3A'
        },
    })
    const classes = useStyles()

    return (
        <div className={classes.container}> 
        <div >
            <Typography variant="body1" className={classes.materia} >Lectura</Typography>
            <Typography variant="body1" className={classes.titulo} >Cuentos para aprender ortografia</Typography>
        </div>
        {props.estado === 'nueva' || props.estado === 'demorada' || props.estado === 'noentregada' ?
        <div className={classes.containertexto}>
            <Typography variant="body1" className={classes.nueva}> {props.estado === 'noentregada' ? 'No entregada' : props.estado === 'nueva' ? '¡NUEVA!' : '¡Estás demorad@!'  }   </Typography>
        </div>
        :
        null}
        </div>
    )
}