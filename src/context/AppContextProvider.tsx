import { useState } from 'react'
import AppContext, { type AppContextType } from './AppContext'

type Props = {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
    const [size, setSize] = useState<number>(3);
    const [color, setColor] = useState<string | null>(null);
    const [cube, setCube] = useState<string[][]>(
        Array.from({ length: 6 }, () => (
        Array(9).fill('#ccc')
        ))
    );

    const value: AppContextType = {
        size, 
        setSize, 
        color, 
        setColor, 
        cube, 
        setCube
    }

    return (
        <AppContext.Provider 
            value={ value }
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider
