import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { DataContext } from '../../../../Context/DataContext'


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
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',        
            color: '#6D7878'
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

export default function InfoProgreso() {

    const { estado } = useContext(DataContext)
    const classes = useStyles()

    return (
        (estado.nueva) ? 
        <div className={classes.container}>
            <Typography variant="body1" className={classes.text}>Progreso</Typography>
            <Typography variant="body1" className={classes.porcentaje}> - </Typography>
        </div>
        :
        (estado.terminada) ? 
        <div className={classes.container}>
            <Typography variant="body1" className={classes.completa}>Actividad</Typography>
            <Typography variant="body1" className={classes.completa}>Completada</Typography>
        </div>
        : 
        <div className={classes.container}>
            <Typography variant="body1" className={classes.text}>Progreso</Typography>
            <Typography variant="body1" className={classes.porcentaje}>25%</Typography>
        </div>

    )
}

