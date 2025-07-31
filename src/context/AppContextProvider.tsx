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
            Array(9).fill('#7c7f7e')
        ))
    );
    const [moves, setMoves] = useState<string[]>([]);

    const value: AppContextType = {
        size, 
        setSize, 
        color, 
        setColor, 
        cube, 
        setCube,
        moves,
        setMoves
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
