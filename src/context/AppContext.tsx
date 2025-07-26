import { createContext } from 'react'

export type AppContextType = {
    size: number,
    setSize: React.Dispatch<React.SetStateAction<number>>,
    color: string | null,
    setColor: React.Dispatch<React.SetStateAction<string | null>>,
    cube: string[][],
    setCube: React.Dispatch<React.SetStateAction<string[][]>>
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext