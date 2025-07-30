import Cube from "./Cube";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo } from "react";
import { useAppContext } from "../hooks/useAppContext";

const RubiksCube: React.FC = () => {
    const { size } = useAppContext();
    
    const cubes = useMemo(() => {
        const positions: [number, number, number][] = [];
        const offset = (size - 1) / 2;

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                for (let z = 0; z < size; z++) {
                    const posX = x - offset;
                    const posY = y - offset;
                    const posZ = z - offset;
                    
                    positions.push([posX, posY, posZ]);
                }
            }
        }

        return positions;
    }, [size]);

    return (
        <div className="w-[600px] h-[500px] border-2 border-[#7c7f7e] rounded-2xl shadow-md shadow-[#7c7f7e]">
            <Canvas 
                camera={{ position: [5.5, 5.5, 5.5], fov: 45 }} 
                className="hover:cursor-grab active:cursor-grabbing"
            >
                <OrbitControls enableDamping enableZoom={false} />
                {cubes.map((pos, i) => (
                    <Cube key={i} position={pos} />
                ))}
            </Canvas>
        </div>
    );
};

export default RubiksCube;