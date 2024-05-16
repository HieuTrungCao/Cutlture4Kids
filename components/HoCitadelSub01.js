import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HoCitadelSub01(props) {
  const { nodes, materials } = useGLTF(require('../assets/HoCitadelSub/HoCitadelSub01.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base004.geometry}
        material={materials['Gate.003']}
        position={[34.697, 3.041, -2.697]}
        scale={[56.225, 15.757, 22.704]}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/HoCitadelSub/HoCitadelSub01.glb'))