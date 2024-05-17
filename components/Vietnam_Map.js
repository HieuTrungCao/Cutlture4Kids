import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Vietnam_Map(props) {
  const { nodes, materials } = useGLTF(require("../assets/Vietnam_Map.glb"))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__555591'].geometry}
        material={materials['[0046_Gold].003']}
        position={[3.43, 0, 0.47]}
        scale={[7, 3.5, 7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['G-__555564001'].geometry}
        material={materials['[0046_Gold].004']}
        position={[3.04, 0, 7.18]}
        scale={[7, 3.5, 7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VN_map.geometry}
        material={materials.map}
        position={[-0.028, 0, -0.077]}
        scale={15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.island.geometry}
        material={materials.map}
        position={[-2.691, 0, 5.532]}
        scale={15}
      />
    </group>
  )
}

useGLTF.preload(require("../assets/Vietnam_Map.glb"))