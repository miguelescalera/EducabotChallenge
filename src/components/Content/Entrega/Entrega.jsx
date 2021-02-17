import React from 'react'
import  { makeStyles } from '@material-ui/styles'
import InfoEntrega from './Info/InfoEntrega'
import IconCalendar from './IconCalendar/IconCalendar'

    const useStyles = makeStyles({
        container:{
            boxSizing:'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'flex-end',
            padding: '0%',
            position: 'absolute',
            width: '164px',
            height: '36px',
            right: '352px',
            left:'460px',
            top: '26px',
        }
    })

export default function Entrega() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <IconCalendar/>
            <InfoEntrega/>
        </div>
    )
}
