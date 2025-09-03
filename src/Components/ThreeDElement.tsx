'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default function ThreeDElement() {
  return (
    <div className="w-full h-96">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
