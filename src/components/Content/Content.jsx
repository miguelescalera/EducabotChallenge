import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import LecturaIcon from './Actividad/LecturaIcon'
import PreguntaIcon from './Actividad/PreguntaIcon'
import Texto from './Texto/Texto'
import Entrega from './Entrega/Entrega'
import Progreso from './Progreso/Progreso'
import BotonDefault from './BotonDefault/BotonDefault'
import { DataContext } from '../../Context/DataContext'


export default function Content(props) {

    const useStyles = makeStyles({
        container:{
            display:'flex',
            boxSizing:'border-box',
            height: props.estado === 'nueva' || props.estado === 'demorada' || props.estado === 'noentregada' ? '108px' : '88px',
            width: '976px',
            position: 'absolute',
            background: props.estado === 'nueva' || props.estado === 'terminada' ? '#F8F8F6' : '#FFFFFF',
            border: props.estado === 'nueva' ? '1px solid #F8F8F6' : '1px solid #DFDFDA',
            borderTopLeftRadius:'12px',
            borderTopRightRadius:'12px',
            flex: 'none',
            order: '0',
            alignSelf: 'stretch',
            flexGrow: '0',
            margin: '0px 0px',
        }
    })
    
    const {estado} = useContext(DataContext)
    const classes = useStyles()

    return (
        <div className={classes.container}>
            {estado.Estado === 'Lectura' ? <LecturaIcon /> : <PreguntaIcon/>}
            <Texto estado={props.estado}/>
            <Entrega estado={props.estado}/>
            <Progreso estado={props.estado}/>
            <BotonDefault estado={props.estado}/>
        </div>
    )
}

