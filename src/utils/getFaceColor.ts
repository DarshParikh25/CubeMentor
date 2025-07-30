import * as THREE from 'three';

export function getFaceColor(
    x: number,
    y: number,
    z: number,
    size: number,
    cube: string[][]
): THREE.Color[] {
    const half = Math.floor(size / 2);
    const getIndex = (row: number, col: number) => row * size + col;

    const colors: THREE.Color[] = [];

    // Right face
    if (x === half) {
        const row = half - y;
        const col = half - z;
        colors[0] = new THREE.Color(cube[3][getIndex(row, col)]);
    } else {
        colors[0] = new THREE.Color(0x7c7f7e);
    }

    // Left face
    if (x === -half) {
        const row = half - y;
        const col = z + half;
        colors[1] = new THREE.Color(cube[1][getIndex(row, col)]);
    } else {
        colors[1] = new THREE.Color(0x7c7f7e);
    }

    // Top face
    if (y === half) {
        const row = half - z;
        const col = x + half;
        colors[2] = new THREE.Color(cube[4][getIndex(row, col)]);
    } else {
        colors[2] = new THREE.Color(0x7c7f7e);
    }

    // Bottom face
    if (y === -half) {
        const row = z + half;
        const col = x + half;
        colors[3] = new THREE.Color(cube[2][getIndex(row, col)]);
    } else {
        colors[3] = new THREE.Color(0x7c7f7e);
    }

    // Front face
    if (z === half) {
        const row = half - y;
        const col = x + half;
        colors[4] = new THREE.Color(cube[5][getIndex(row, col)]);
    } else {
        colors[4] = new THREE.Color(0x7c7f7e);
    }

    // Back face
    if (z === -half) {
        const row = half - y;
        const col = half - x;
        colors[5] = new THREE.Color(cube[0][getIndex(row, col)]);
    } else {
        colors[5] = new THREE.Color(0x7c7f7e);
    }

    return colors;
}
