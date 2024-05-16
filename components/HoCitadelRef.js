import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HoCitadelRef(props) {
  const { nodes, materials } = useGLTF(require('../assets/HoCitadelSub/HoCitadelRef.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={materials.Transparent}
        scale={[56.225, 15.757, 22.704]}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/HoCitadelSub/HoCitadelRef.glb'))
