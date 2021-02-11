import React from 'react'
import  { makeStyles } from '@material-ui/styles'
import Info from './Info/Info'
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
            top: '26px',
            border: '1px solid black'
        }
    })

export default function Entrega() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <IconCalendar/>
            <Info/>
        </div>
    )
}
