import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import LecturaIcon from './Actividad/LecturaIcon'
import Texto from './Texto/Texto'
import Entrega from './Entrega/Entrega'
import Progreso from './Progreso/Progreso'
import BotonDefault from './BotonDefault/BotonDefault'
import { DataContext } from '../../Context/DataContext'


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
        },
        containerTerminada:{
            display:'flex',
            boxSizing:'border-box',
            height: '88px',
            width: '976px',
            position: 'absolute',
            background: '#F8F8F6',
            border: '1px solid #DFDFDA',
            borderTopLeftRadius:'12px',
            borderTopRightRadius:'12px',
            flex: 'none',
            order: '0',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        },
        containerNueva:{
            display:'flex',
            boxSizing:'border-box',
            height: '108px',
            width: '976px',
            position: 'absolute',
            background: '#F8F8F6',
            border: '1px solid #F8F8F6',
            borderTopLeftRadius:'12px',
            borderTopRightRadius:'12px',
            flex: 'none',
            order: '0',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        },
        containerDemorada:{
            display:'flex',
            boxSizing:'border-box',
            height: '108px',
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

    const { estado } = useContext(DataContext) 
    const classes = useStyles()

    return (
        (estado.terminada) ?
        <div className={classes.containerTerminada}>
            <LecturaIcon/>
            <Texto/>
            <Entrega/>
            <Progreso/>
            <BotonDefault/>
        </div>
        :
        (estado.nueva) ? 
        <div className={classes.containerNueva}>
            <LecturaIcon/>
            <Texto/>
            <Entrega/>
            <Progreso/>
            <BotonDefault/>
        </div>
        :
        (estado.demorada) ?
        <div className={classes.containerDemorada}>
            <LecturaIcon/>
            <Texto/>
            <Entrega/>
            <Progreso/>
            <BotonDefault/>
        </div>
        : 
        <div className={classes.container}>
            <LecturaIcon/>
            <Texto/>
            <Entrega/>
            <Progreso/>
            <BotonDefault/>
        </div>
    )
}

