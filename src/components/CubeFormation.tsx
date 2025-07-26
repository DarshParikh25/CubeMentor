import { useContext, useEffect, type JSX } from 'react'
import AppContext, { type AppContextType } from '../context/AppContext';

const CubeFormation = (): JSX.Element => {
    const context: AppContextType | undefined = useContext(AppContext)

    if(!context) {
        return <div>Loading...</div>
    }

    const { size, setSize, color, setColor, cube, setCube } = context;

    const colors: [string, string][] = [
        ['#fff', 'White'],
        ['#f00', 'Red'],
        ['#0f0', 'Green'],
        ['#00f', 'Blue'],
        ['#ff0', 'Yellow'],
        ['#ff7300', 'Orange']
    ]

    useEffect(() => {
        setCube(
            Array.from({ length: 6 }, () => (
                Array(size * size).fill('#ccc')
            ))
        )
    }, [size, setCube])

    const handleChangeColor = (index: number, i: number): void => {
        if(color) {
        const newCube = [...cube];
        newCube[index][i] = color;
        setCube(newCube);
        }
    }

    const faces = (faceIndex: number): JSX.Element => {
        return (
        <div className={`w-[150px] h-[150px] border-2 border-black bg-gray-300 grid grid-cols-${size}`}>
            {
            cube[faceIndex].map((pieceColor: string, i: number) => (
                <div 
                    key={i}
                    onClick={() => {handleChangeColor(faceIndex, i); console.log(cube)}}
                    className={`border border-black flex min-w-[37.5px] min-h-[37.5px] w-full h-full cursor-pointer`}
                    style={{ backgroundColor: pieceColor }}
                ></div>
            ))
            }
        </div>
        )
    }

    return (
        <section className="grid xl:grid-cols-[0.75fr_1.25fr] grid-cols-1 py-20 min-h-[85vh] gap-10 xl:gap-0">
            <div className=" flex flex-col gap-10 items-center">
                {/* Size Selection */}
                <form className="w-[60%] flex flex-col gap-2">
                    <label className="text-sm">Select cube size</label>
                    <select 
                        value={size} 
                        id="size" 
                        onChange={(e) => setSize(parseInt(e.target.value))}
                        className="w-full outline-none border-2 border-white rounded-md cursor-pointer text-sm px-2 py-1"
                    >
                        <option value="2">2x2x2</option>
                        <option value="3">3x3x3</option>
                        <option value="4">4x4x4</option>
                    </select>
                </form>

                {/* Color Options for Cube's Pieces */}
                <div className="grid grid-cols-3 w-fit gap-10">
                {
                    colors.map(([colorCode, colorName]) => (
                    <div key={colorName} className="flex flex-col justify-center items-center">
                        <div onClick={() => {setColor(colorCode)}} className={`w-20 h-20 border-2 ${color === colorCode ? 'border-white' : 'border-[#7c7f7e]'} rounded-xl cursor-pointer`} style={{ backgroundColor: colorCode }}></div>
                        <p>{colorName}</p>
                    </div>
                    ))
                }
                </div>

                {/* Error box */}
                <div className="w-[60%] border border-[#7c7f7e] rounded-md px-3 py-1 bg-[#ff636350] flex justify-between items-center">
                    <p>Hey! There's an error.</p>
                    <img src="/warning.png" alt="warning-icon" className="w-4" />
                </div>
            </div>

            {/* Rubik's Cube Layout */}
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-4 grid-rows-3 gap-0.5 w-[600px] h-[450px]">
                <div className="col-start-2 row-start-1">{faces(0)}</div>
                <div className="col-start-1 row-start-2">{faces(1)}</div>
                <div className="col-start-2 row-start-2">{faces(2)}</div>
                <div className="col-start-3 row-start-2">{faces(3)}</div>
                <div className="col-start-4 row-start-2">{faces(4)}</div>
                <div className="col-start-2 row-start-3">{faces(5)}</div>
                </div>
            </div>
        </section>
    )
}

export default CubeFormation
