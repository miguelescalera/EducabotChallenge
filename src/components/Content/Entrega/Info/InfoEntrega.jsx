import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import { DataContext } from '../../../../Context/DataContext'

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
            color: '#1A1A1A',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0%',
        },
        fechaDemorada:{
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
            color: 'rgba(244, 92, 58, 1)',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0%'
        }
    })

export default function Info() {

    const { estado } = useContext(DataContext)
    const classes = useStyles()

    return (
        (estado.demorada) ? 
        <div className={classes.container}>
            <p className={classes.text}>Fecha de Entrega</p>
            <p className={classes.fechaDemorada}>15 de Abril</p>
        </div>
        : 
        <div className={classes.container}>
            <p className={classes.text}>Fecha de Entrega</p>
            <p className={classes.fecha}>15 de Abril</p>
        </div>
    )
}
