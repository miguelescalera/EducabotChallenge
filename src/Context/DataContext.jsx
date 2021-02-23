import React, { createContext, useState } from 'react'

export const DataContext = createContext()

const Estados = {
    default: false,
    nueva: true,
    demorada: false,
    Terminada: false
}

export function DataProvider({ children }) {

    const [estado, setEstado] = useState(Estados)

    return (
        <DataContext.Provider value={{estado, setEstado}}>
            { children }
        </DataContext.Provider>
    )
}
