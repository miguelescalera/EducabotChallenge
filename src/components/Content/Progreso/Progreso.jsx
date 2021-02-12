import React from 'react'
import { makeStyles } from '@material-ui/styles'
import InfoProgreso from './Info/InfoProgreso'
import Rosca from './Rosca/Rosca'

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',        
            position: 'absolute',
            width: '97px',
            height: '36px',
            right: '168px',
            top: '26px',
        }
    })

export default function Progreso() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <InfoProgreso />
            <Rosca/>
        </div>
    )
}
