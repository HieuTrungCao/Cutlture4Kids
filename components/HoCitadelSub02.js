import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HoCitadelSub02(props) {
  const { nodes, materials } = useGLTF(require('../assets/HoCitadelSub/HoCitadelSub02.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base003.geometry}
        material={materials['Gate.002']}
        position={[-7.76, 3.303, -0.427]}
        scale={[56.225, 15.757, 22.704]}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/HoCitadelSub/HoCitadelSub02.glb'))