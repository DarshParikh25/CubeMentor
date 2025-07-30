import type { JSX } from 'react';
import { useAppContext } from '../hooks/useAppContext';

const Navbar = (): JSX.Element => {
    const { setSize, setCube } = useAppContext();

    const handleReset = (): void => {
        setSize(3);
        
        setCube(
            Array.from({ length: 6 }, () => (
                Array(3 * 3).fill('#7c7f7e')
            ))
        )
    }

    return (
        <nav className="py-10 flex justify-between items-center">
            <img src="/logo.png" alt="logo" className="max-w-50" />
            <div className="flex md:gap-5 gap-10">
                <button className="md:bg-transparent md:border md:border-[#7c7f7e] md:rounded-full md:text-sm md:px-5 md:py-2 flex md:gap-1.5 justify-center items-center cursor-pointer">
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