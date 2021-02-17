import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'



    const useStyles = makeStyles({
        container:{
            height: '16px',
            width: '16px',
            left: '944px',
            top: '11px'
        },
        boton:{
            height: '14px',
            width: '14px',
            left:' 1px',
            top:' 1px',
        }
    })

export default function IconMensaje() {
    
    const classes = useStyles()

    return (
        <div className={classes.container}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.262821 2.60133C0.465952 1.40707 1.40331 0.529172 2.58634 0.346879C3.71987 0.172214 5.27491 0 7 0C8.72509 0 10.2801 0.172214 11.4137 0.346879C12.5967 0.529172 13.534 1.40707 13.7372 2.60133C13.8788 3.43368 14 4.49102 14 5.67115C14 6.85128 13.8788 7.90862 13.7372 8.74097C13.534 9.93524 12.5967 10.8131 11.4137 10.9954C10.3767 11.1552 8.98688 11.313 7.43685 11.3387L3.15611 13.9003C2.68948 14.1796 2.1 13.8389 2.1 13.29V10.8772C1.15259 10.5582 0.437191 9.76615 0.262821 8.74097C0.121248 7.90862 0 6.85128 0 5.67115C0 4.49102 0.121248 3.43368 0.262821 2.60133Z" fill="#1A1A1A"/>
              </svg>
        </div>
    )
}





