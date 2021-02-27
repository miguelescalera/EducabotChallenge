import React from 'react'
import { makeStyles } from '@material-ui/styles'

    const useStyles = makeStyles({
        container:{
            position: 'static',
            width: '24px',
            height:' 24px',
            left: '0px',
            top: '6px',        
            flex: 'none',
            order: '0',
            flexGrow: '0',
            margin: '0px',
            borderRadius:'25%'
        }
    })

export default function Correccion() {

    const classes = useStyles()

    return (
            <div className={classes.container}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C11.6022 2 11.2206 2.15804 10.9393 2.43934C10.658 2.72064 10.5 3.10218 10.5 3.5C10.5 3.89782 10.658 4.27936 10.9393 4.56066C11.2206 4.84196 11.6022 5 12 5C12.197 5 12.392 4.9612 12.574 4.88582C12.756 4.81044 12.9214 4.69995 13.0607 4.56066C13.1999 4.42137 13.3104 4.25601 13.3858 4.07403C13.4612 3.89204 13.5 3.69698 13.5 3.5C13.5 3.10218 13.342 2.72064 13.0607 2.43934C12.7794 2.15804 12.3978 2 12 2ZM9.52513 1.02513C10.1815 0.368749 11.0717 0 12 0C12.9283 0 13.8185 0.368749 14.4749 1.02513C15.1313 1.6815 15.5 2.57174 15.5 3.5C15.5 3.95963 15.4095 4.41475 15.2336 4.83939C15.0577 5.26403 14.7999 5.64987 14.4749 5.97487C14.1499 6.29988 13.764 6.55769 13.3394 6.73358C12.9148 6.90947 12.4596 7 12 7C11.0717 7 10.1815 6.63125 9.52513 5.97487C8.86875 5.3185 8.5 4.42826 8.5 3.5C8.5 2.57174 8.86875 1.6815 9.52513 1.02513ZM10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V13H15V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10H10ZM17 13V11C17 10.2043 16.6839 9.44129 16.1213 8.87868C15.5587 8.31607 14.7957 8 14 8H10C9.20435 8 8.44129 8.31607 7.87868 8.87868C7.31607 9.44129 7 10.2043 7 11V13H5H3H1V15H3V24H5V15H7H9H15H17H19V24H21V15H23V13H21H19H17Z" fill="#1A1A1A"/>
                </svg>
            </div>
    )
}