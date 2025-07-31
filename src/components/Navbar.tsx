import type { JSX } from 'react'
import { useAppContext } from '../hooks/useAppContext';

const Navbar = (): JSX.Element => {
    const { setCube, cube, setMoves, size } = useAppContext();

    const handleReset = (): void => {
        setCube(
            Array.from({ length: 6 }, () => (
                Array(size * size).fill('#7c7f7e')
            ))
        )
    }

    const handleSolve = (): void => {
        const requiredCount = size * size;

        const colorNames: Record<string, string> = {
            '#fff': 'White',
            '#f00': 'Red',
            '#0f0': 'Green',
            '#00f': 'Blue',
            '#ff0': 'Yellow',
            '#ff7300': 'Orange',
            '#7c7f7e': 'Uncolored'
        };

        const allColors = cube.flat();

        const colorCount: Record<string, number> = {};
        for (const color of allColors) {
            if (!colorCount[color]) colorCount[color] = 0;
            colorCount[color]++;
        }

        if (colorCount['#7c7f7e'] || colorCount['#ccc']) {
            alert('Please color all tiles before solving.');
            return;
        }

        const uniqueColors = Object.keys(colorCount);

        if (uniqueColors.length !== 6) {
            alert('Cube must contain exactly 6 unique colors.');
            return;
        }

        const invalidColorCounts = Object.entries(colorCount).filter(
            ([, count]) => count !== requiredCount
        );

        if (invalidColorCounts.length > 0) {
            const errorList = invalidColorCounts.map(
                ([color, count]) => `${colorNames[color] || color}: ${count} squares`
            ).join('\n');

            alert(`Each color must appear exactly ${requiredCount} times.\nIssues:\n${errorList}`);
            return;
        }

        const exampleMoves = ['U', 'R', "U'", 'L2', 'F'];
        setMoves(exampleMoves);
    };

    return (
        <nav className="py-10 flex justify-between items-center">
            <img src="/logo.png" alt="logo" className="max-w-50" />
            <div className="flex md:gap-5 gap-10">
                <button 
                    onClick={handleSolve}
                    className="md:bg-transparent md:border md:border-[#7c7f7e] md:rounded-full md:text-sm md:px-5 md:py-2 flex md:gap-1.5 justify-center items-center cursor-pointer"
                >
                    <span className="md:block hidden">Solve</span>
                    <img src="/play.png" alt="solve-icon" className="md:w-3 cursor-pointer" />
                </button>
                <button
                    onClick={handleReset}
                    className="md:bg-transparent md:border md:border-[#7c7f7e] md:rounded-full md:text-sm md:px-5 md:py-2 flex md:gap-1 justify-center items-center cursor-pointer"
                >
                    <span className="md:block hidden">Reset</span>
                    <img src="/reset.png" alt="reset-icon" className="md:w-3.5 cursor-pointer" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar