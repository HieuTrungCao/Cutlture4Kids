
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TayHouse(props) {
  const { nodes, materials } = useGLTF(require('../assets/TayHouse.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Columns.geometry}
        material={materials.Pillar}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials['Wall.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Bars.geometry}
        material={materials.Railing}
      />
      <group rotation={[0, Math.PI / 2, 0]} scale={[1.334, 1.75, 1.75]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={materials.Ladder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060_1.geometry}
          material={materials.Beams}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={materials.Roof}
        rotation={[0, 0, 2.618]}
        scale={[2.705, 1, 7.67]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials.Floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010_1.geometry}
        material={materials.Beams}
      />
      <mesh castShadow receiveShadow geometry={nodes.Plane011.geometry} material={materials.Step} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011_1.geometry}
        material={materials.Ladder}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials.Railing}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055_1.geometry}
        material={materials['Railing.001']}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/TayHouse.glb'))