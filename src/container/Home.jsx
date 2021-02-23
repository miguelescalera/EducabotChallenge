import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography'
import Image from '../assets/unnamed.gif'
import Default from './Default'


    const useStyles = makeStyles({
        container:{
            maxWidth: '1920px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
            height:'80vh',
        },
        btn:{
            flexDirection: 'row',
            fontSize: 'larger',
            width: '300px',
            marginRight: '30px',
            textTransform: 'none'
        },
        title:{
            display: 'flex',
            justifyContent: 'center',
        },
        image:{
            height: '95px',
            width: '95px'
        },
        botones:{
            display: 'flex',
            justifyContent: 'center'
        }
    })

export default function Home() {
    
    const [buttonClicked, setButtonClicled] = useState(false)
    const classes = useStyles()

    const handleClick = () => {
        if(!buttonClicked){setButtonClicled(true)}
        else{setButtonClicled(false)}   
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <img className={classes.image} src={Image} alt="loading..."/>
                <Typography variant="h1" color="initial" > Educabot</Typography>
            </div>
            <div className={classes.botones}>
                <Button 
                    onClick={handleClick}
                    className={classes.btn}
                    variant="contained" 
                    color="primary"
                    startIcon={<MenuBookIcon/> }
                    >
                        Lectura  
                </Button>
                <Button 
                    className={classes.btn}
                    variant="contained" 
                    color="secondary"
                    startIcon={<HelpIcon/>} 
                    >
                        Preguntas
                </Button>
            </div>
            
                {buttonClicked ? <Default/> : null}
            
        </div>
    )
}