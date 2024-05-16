import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HoCitadelSub03(props) {
  const { nodes, materials } = useGLTF(require('../assets/HoCitadelSub/HoCitadelSub03.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base002.geometry}
        material={materials['Gate.001']}
        position={[-46.028, 1.802, -0.422]}
        scale={[56.225, 15.757, 22.704]}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/HoCitadelSub/HoCitadelSub03.glb'))