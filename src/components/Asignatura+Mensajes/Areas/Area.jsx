import React from 'react'
import { makeStyles } from '@material-ui/styles'

    const useStyles = makeStyles({
        container:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            padding: '4px 8px',
            position:'static',
            width: '70px',
            height: '24px',
            left:' 0px',
            top:' 0px',
            background:'#FFFFFF',
            border: '1px solid rgba(223, 223, 218, 1)',
            boxSizing:'border-box',
            borderRadius: '16px',
            flex: 'none',
            order: '0',
            flexGrow: '0',
            margin: '0px 4px'
        },
        circle:{
            position: 'static',
            width: '8px',
            height: '8px',
            left: '8px',
            top: '8px',
            background: '#01CEAA',
            flex: 'none',
            order: '0',
            flexGrow: '0',
            borderRadius:'50%',
        },
        text:{
            position:'static',
            width: '42px',
            height: '16px',
            left: '20px',
            top:' 4px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '16px',        
            color: '#1A1A1A',
            flex: 'none',
            order: '1',
            flexGrow: '0',
            margin: '0px 4px'
        }
    })

export default function Area() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <p className={classes.circle}></p>
            <p className={classes.text}>Lengua</p>
        </div>
    )
}
