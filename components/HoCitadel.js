import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HoCitadel(props) {
  const { nodes, materials } = useGLTF(require('../assets/HoCitadel.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Gate}
        position={[-14.25, -5.188, 4.321]}
        scale={[56.225, 15.757, 22.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base002.geometry}
        material={materials.Gate}
        position={[24.018, -3.687, 4.315]}
        scale={[56.225, 15.757, 22.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={materials.Gate}
        position={[66.475, -3.949, 2.045]}
        scale={[56.225, 15.757, 22.704]}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/HoCitadel.glb'))