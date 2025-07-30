import Cube from "./Cube";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useContext } from "react";
import AppContext from "../context/AppContext";

const RubiksCube: React.FC = () => {
    const context = useContext(AppContext);
    if (!context) return null;

    const { size } = context;
    const cubes: [number, number, number][] = [];

    const half = Math.floor(size / 2);

    for (let x = -half; x <= half; x++) {
        for (let y = -half; y <= half; y++) {
            for (let z = -half; z <= half; z++) {
                // Optionally skip center for odd cubes (e.g., 3x3x3)
                if (size % 2 !== 0 && x === 0 && y === 0 && z === 0) continue;
                cubes.push([x, y, z]);
            }
        }
    }

    return (
        <div className="w-[600px] h-[500px] border-2 border-[#7c7f7e] rounded-2xl shadow-md shadow-[#7c7f7e]">
            <Canvas camera={{ position: [5.5, 5.5, 5.5], fov: 45 }} className="hover:cursor-grab active:cursor-grabbing">
                <OrbitControls enableDamping enableZoom={false} />
                {
                    cubes.map((pos, idx) => (
                        <Cube key={idx} position={pos} />
                    ))
                }
            </Canvas>
        </div>
    );
};

export default RubiksCube;