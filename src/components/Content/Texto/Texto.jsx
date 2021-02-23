import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { DataContext } from '../../../Context/DataContext'


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
            fontWeight: 'normal',
            fontSize: '18px',
            lineHeight: '23px',
            color: '#1A1A1A',
            flex: 'none',
            order: '1',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        },
        tituloTerminada:{
            position: 'static',
            width: '340px',
            height: '23px',
            left: '0px',
            top: '16px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '18px',
            lineHeight: '23px',
            color: '#1A1A1A',
            flex: 'none',
            order: '1',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        },
        containertexto1:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '2px 4px', 
            position: 'static',
            width: '55px',
            height: '20px',
            left: '0px',
            top: '47px',
            background: '#27A8FF',
            borderRadius: '3px',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '8px 0px',
        },
        containertexto2:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '2px 4px', 
            position: 'static',
            width: '115px',
            height: '20px',
            left: '0px',
            top: '47px',
            //background: '#50D174',
            background: 'linear-gradient(0deg, rgba(244, 92, 58, 0.1), rgba(244, 92, 58, 0.1)), #FFFFFF',
            borderRadius: '3px',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '8px 0px',
        },
        nueva1:{
            position: 'static',
            width: '47px',
            height: '16px',
            left: '4px',
            top: '2px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '16px',
            textAlign: 'end',
            color: '#FFFFFF'
        },
        nueva2:{
            position: 'static',
            width: '107px',
            height: '16px',
            left: '4px',
            top: '2px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '16px',
            textAlign: 'end',
            color: '#F45C3A'
        }
    })

export default function Texto() {

    const { estado } = useContext(DataContext)
    const classes = useStyles()

    return (
        (estado.terminada) ?
        <div className={classes.container}>
            <Typography variant="body1" className={classes.materia} >Lectura</Typography>
            <Typography variant="body1" className={classes.tituloTerminada} >Cuentos para aprender ortografia</Typography>
        </div>
        :
        (estado.nueva) ?
        <div className={classes.container}> 
        <div >
            <Typography variant="body1" className={classes.materia} >Lectura</Typography>
            <Typography variant="body1" className={classes.titulo} >Cuentos para aprender ortografia</Typography>
        </div>
        <div className={classes.containertexto1}>
            <Typography variant="body1" className={classes.nueva1}> ¡NUEVA! </Typography>
        </div>
        </div>
        :
        (estado.demorada) ?
        <div className={classes.container}>
            <div>
                <Typography variant="body1" className={classes.materia} >Lectura</Typography>
                <Typography variant="body1" className={classes.titulo} >Cuentos para aprender ortografia</Typography>
            </div>
            <div className={classes.containertexto2}>
            <Typography variant="body1" className={classes.nueva2}> ¡Estás demorad@! </Typography>
        </div>
        </div>
        :
        <div className={classes.container}>
            <Typography variant="body1" className={classes.materia} >Lectura</Typography>
            <Typography variant="body1" className={classes.titulo} >Cuentos para aprender ortografia</Typography>
        </div>
    )
}