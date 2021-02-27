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
 
export default function PreguntaIcon() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.15" width="56" height="56" rx="6" fill="#FFB800"/>
                <g clip-path="url(#clip0)">
                <path d="M21.595 43.2771C26.005 38.8739 17.125 29.9925 12.7225 34.4032L10 46L21.595 43.2771Z" fill="white"/>
                <path d="M40.3748 24.4933L21.5948 43.2762C21.5723 42.6386 21.3098 42.016 20.8298 41.5284C20.1548 40.8533 19.2098 40.6133 18.3548 40.8233C18.5573 39.9682 18.3248 39.0155 17.6498 38.3479C16.9748 37.6728 16.0298 37.4328 15.1748 37.6428C15.3773 36.7877 15.1448 35.835 14.4623 35.1599C13.9823 34.6799 13.3523 34.4173 12.7148 34.3948L31.5023 15.6194L40.3748 24.4933Z" fill="#FFB800"/>
                <path d="M42.3823 22.4938L45.2873 19.5884C46.2398 18.6357 46.2398 17.083 45.2873 16.1303L39.8723 10.7145C38.9198 9.76184 37.3673 9.76184 36.4148 10.7145L33.5098 13.6199L42.3823 22.4938Z" fill="#4F36D6"/>
                <path d="M42.3823 22.4938L45.2873 19.5884C46.2398 18.6357 46.2398 17.083 45.2873 16.1303L39.8723 10.7145C38.9198 9.76184 37.3673 9.76184 36.4148 10.7145L33.5098 13.6199L42.3823 22.4938Z" fill="#1A1A1A" fill-opacity="0.6"/>
                <path d="M13.5025 45.1744C13.195 43.8469 12.1525 42.8044 10.825 42.4969L10 45.9994L13.5025 45.1744Z" fill="#4F36D6"/>
                <path d="M13.5025 45.1744C13.195 43.8469 12.1525 42.8044 10.825 42.4969L10 45.9994L13.5025 45.1744Z" fill="#1A1A1A" fill-opacity="0.6"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="36.0019" height="36" fill="white" transform="translate(10 10)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}