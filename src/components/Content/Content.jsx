import React from 'react'
import { makeStyles } from '@material-ui/styles'
import LecturaIcon from './Actividad/LecturaIcon'
import Texto from './Texto/Texto'
import Entrega from './Entrega/Entrega'
import Progreso from './Progreso/Progreso'
import BotonDefault from './BotonDefault/BotonDefault'
import zIndex from '@material-ui/core/styles/zIndex'

    const useStyles = makeStyles({
        container:{
            display:'flex',
            boxSizing:'border-box',
            height: '88px',
            width: '976px',
            position: 'absolute',
            background: '#FFFFFF',
            border: '1px solid #DFDFDA',
            borderTopLeftRadius:'12px',
            borderTopRightRadius:'12px',
            flex: 'none',
            order: '0',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        }
    })

export default function Content() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <LecturaIcon/>
            <Texto/>
            <Entrega/>
            <Progreso/>
            <BotonDefault/>
        </div>
    )
}