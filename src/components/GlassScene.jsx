import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Text } from '@react-three/drei';

function Model() {
    const { viewport } = useThree()
    const torusGroup = useRef(null);

    useFrame(() => {
        if (torusGroup.current) {
            torusGroup.current.rotation.x += 0.008
            torusGroup.current.rotation.y += 0.005
        }
    })

    const materialProps = {
        thickness: 0.8,
        roughness: 0,
        transmission: 1,
        ior: 1.25,
        chromaticAberration: 0.08,
        backside: true,
    }

    // Scale relative to viewport to ensure it fills the space appropriately
    return (
        <group scale={viewport.width / 6} >
            {/* The Text that gets distorted by the glass */}
            <Text position={[0, 0, -2]} fontSize={1.2} color="black" anchorX="center" anchorY="middle" letterSpacing={-0.05} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff">
                PRECISION
            </Text>

            <group ref={torusGroup}>
                <mesh>
                    <torusGeometry args={[1.5, 0.6, 64, 128]} />
                    <MeshTransmissionMaterial {...materialProps} clearcoat={1} clearcoatRoughness={0.1} color="#ffffff" />
                </mesh>
            </group>
        </group>
    )
}

export default function GlassScene() {
    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
            <Canvas style={{ background: 'transparent', height: '100%', width: '100%', position: 'absolute', inset: 0 }}>
                <Model />
                <directionalLight intensity={4} position={[0, 4, 3]} />
                <ambientLight intensity={1.5} />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
