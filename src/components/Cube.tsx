import type React from 'react';
import { useContext } from 'react';
import * as THREE from 'three';
import AppContext from '../context/AppContext';
import { getFaceColor } from '../utils/getFaceColor';

interface CubeProps {
    position: [number, number, number];
}

const Cube: React.FC<CubeProps> = ({ position }) => {
    const context = useContext(AppContext);

    if (!context) return null;

    const { size, cube } = context;
    const [x, y, z] = position;

    const faceColors = getFaceColor(x, y, z, size, cube);

    const materials = faceColors.map((color) => (
        new THREE.MeshBasicMaterial({ color })
    ));

    const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const edges = new THREE.EdgesGeometry(geometry);

    return (
        <group position={position}>
            <mesh geometry={geometry} material={materials} />
            <lineSegments geometry={edges}>
                <lineBasicMaterial color={0x000000} />
            </lineSegments>
        </group>
    );
};

export default Cube;