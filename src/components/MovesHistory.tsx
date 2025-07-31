import type { JSX } from 'react'
import { useAppContext } from '../hooks/useAppContext'

const MovesHistory = (): JSX.Element => {
    const { moves } = useAppContext();

    return (
        <div>
            <h2>Moves :</h2>
            <div>
                {
                    moves.length === 0 ? (
                        <p>No moves yet.</p>
                    ) : (
                        <ul>
                            {moves.map((move, index) => (
                                <li key={index}>{move}</li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default MovesHistory
