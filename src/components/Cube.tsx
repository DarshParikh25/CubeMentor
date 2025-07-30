import type React from 'react';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { getFaceColor } from '../utils/getFaceColor';
import { useAppContext } from '../hooks/useAppContext';

interface CubeProps {
    position: [number, number, number];
}

const Cube: React.FC<CubeProps> = ({ position }) => {
    const { size, cube } = useAppContext();
    const [x, y, z] = position;

    const materials = useMemo(() => {
        const faceColors = getFaceColor(x, y, z, size, cube);
        return faceColors.map(color => new THREE.MeshBasicMaterial({ color }));
    }, [x, y, z, size]);

    // Update material colors when cube state changes (but not size, as that recreates materials)
    useEffect(() => {
        const faceColors = getFaceColor(x, y, z, size, cube);
        
        faceColors.forEach((color, index) => {
            if (materials[index]) {
                materials[index].color.copy(color);
                materials[index].needsUpdate = true;
            }
        });
    }, [cube, materials]);

    const geometry = useMemo(() => new THREE.BoxGeometry(0.9, 0.9, 0.9), []);
    const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

    useEffect(() => {
        return () => {
            materials.forEach(material => material.dispose());
        };
    }, [materials]);

    return (
        <group position={position}>
            <mesh 
                geometry={geometry} 
                material={materials}
            />
            <lineSegments geometry={edges}>
                <lineBasicMaterial color={0x000000} />
            </lineSegments>
        </group>
    );
};

export default Cube;