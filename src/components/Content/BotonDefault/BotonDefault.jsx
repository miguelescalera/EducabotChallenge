import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '9.5px 16px',
            position: 'absolute',
            width: '110px',
            height: '40px',
            right: '16px',
            top: '24px',
            background: 'linear-gradient(0deg, rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6)), #4F36D6',
            borderRadius: '3px',
        },
        btn:{
            position: 'static',
            width: '78px',
            height: '21px',
            left: '16px',
            top: '9.5px',
            fontFamily: 'DM Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight:' 21px',
            color: '#FFFFFF',        
            flex: 'none',
            order: '0',
            flexGrow:' 0',
            margin: '0px 8px',
        }
    })

export default function BotonDefault() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Button className={classes.btn}>
                <Typography variant="body1">Continuar</Typography>
            </Button>
        </div>
    )
}

