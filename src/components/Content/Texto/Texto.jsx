import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            position: 'absolute',
            width: '340px',
            height: '39px',
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
        }
    })

export default function Texto() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography variant="body1" className={classes.materia} >Lectura</Typography>
            <Typography variant="body1" className={classes.titulo} >Cuentos para aprender ortografia</Typography>
        </div>
    )
}
