import React from 'react'
import { makeStyles } from '@material-ui/styles'
import InfoProgreso from './Info/InfoProgreso'
import Rosca from './Rosca/Rosca'
import Correccion from './Correccion/Correccion'

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',        
            position: 'absolute',
            width: '97px',
            height: '36px',
            left: '711px',
            top: '26px',
        }
    })

export default function Progreso(props) {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <InfoProgreso estado={props.estado}/>
            {props.estado === 'correccion' ? <Correccion/> : <Rosca estado={props.estado}/>}
        </div>
    )
}
