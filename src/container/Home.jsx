import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography'
import Image from '../assets/unnamed.gif'
import { DataContext } from '../Context/DataContext'

    const useStyles = makeStyles({
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignContent: 'center',
            height:'100vh',
            background:'#BDBDBD'
        },
        btn:{
            flexDirection: 'row',
            fontSize: 'larger',
            width: '300px',
            marginRight: '30px',
            textTransform: 'none',
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
            justifyContent: 'center',
        }, 
        link:{
            textDecoration: 'none',
            color: 'inherit'
        }
    })

export default function Home() {

    const { estado, setEstado} = useContext(DataContext)
    console.log('ESTADOOOOOOOO',estado)

    const handlePregunta=_=>{
        setEstado({Estado:'Pregunta'})
    }
    const handleLectura=_=>{
        setEstado({Estado:'Lectura'})
    }

    const classes = useStyles()
   
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <img className={classes.image} src={Image} alt="loading..."/>
                <Typography variant="h1" color="initial" > Educabot</Typography>
            </div>
            <div className={classes.botones}>
                <Link className={classes.link} to='/lectura'>
                    <Button 
                        onClick={handleLectura}
                        className={classes.btn}
                        variant="contained" 
                        color="primary"
                        startIcon={<MenuBookIcon/> }
                        >
                        Lectura    
                    </Button>
                </Link>
                <Link className={classes.link} to='/preguntas' >
                    <Button 
                        onClick={handlePregunta}
                        className={classes.btn}
                        variant="contained" 
                        color="secondary"
                        startIcon={<HelpIcon/>} 
                        >
                            Preguntas    
                    </Button>
                </Link>
            </div>
        </div>
    )
}