import React from 'react'
import { makeStyles } from '@material-ui/styles'

    const useStyles = makeStyles({
        container:{
            position: 'absolute',
            width: '56px',
            height: '56px',
            left: '16px',
            top: '16px' 
        }
    })
 
export default function LecturaIcon() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.15" width="56" height="56" rx="6" fill="#01CEAA"/>
                <rect x="10" y="18" width="36" height="24" rx="1" fill="#4F36D6"/>
                <rect x="10" y="18" width="36" height="24" rx="1" fill="#1A1A1A" fill-opacity="0.6"/>
                <path d="M12 18C12 15.7909 13.7909 14 16 14H40C42.2091 14 44 15.7909 44 18V39C44 39.5523 43.5523 40 43 40H13C12.4477 40 12 39.5523 12 39V18Z" fill="#01CEAA"/>
                <path d="M42 27H14V29H42V27Z" fill="white"/>
                <path d="M22 23H14V25H22V23Z" fill="white"/>
                <path d="M38 31H14V33H38V31Z" fill="white"/>
                <path d="M42 35H14V37H42V35Z" fill="white"/>
                <g opacity="0.2">
                <path d="M28 14H40C42.2091 14 44 15.7909 44 18V39C44 39.5523 43.5523 40 43 40H28V14Z" fill="#4F36D6"/>
                <path d="M28 14H40C42.2091 14 44 15.7909 44 18V39C44 39.5523 43.5523 40 43 40H28V14Z" fill="#1A1A1A" fill-opacity="0.6"/>
                </g>
            </svg>
        </div>
    )
}
