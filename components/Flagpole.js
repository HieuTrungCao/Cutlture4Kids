import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../assets/Flagpole.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Granite_brick}
        position={[0, 1.111, 0]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Granite_brick}
        position={[0, 1.665, 0]}
        scale={[0.3, 0.054, 0.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Granite_brick_red}
        position={[0.003, 2.827, 0.012]}
        scale={[0.5, 1.13, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star.geometry}
        material={materials['Golden Text']}
        position={[0.413, 2.932, -0.003]}
        scale={0.86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star001.geometry}
        material={materials['Golden Text']}
        position={[0.01, 2.923, -0.414]}
        scale={0.86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star002.geometry}
        material={materials['Golden Text']}
        position={[-0.412, 2.924, -0.002]}
        scale={0.86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Star003.geometry}
        material={materials['Golden Text']}
        position={[0.021, 2.935, 0.41]}
        scale={0.86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[0.003, 2.827, 0.012]}
        scale={[0.5, 1.13, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Step_1.geometry}
        material={materials.Granite_brick}
        position={[0, 0.078, 0]}
        scale={[1.707, 0.07, 1.707]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Step_2.geometry}
        material={materials.Granite_brick}
        position={[0, 0.229, 0]}
        scale={[1.463, 0.07, 1.463]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Step_3.geometry}
        material={materials.Granite_brick}
        position={[0, 0.38, 0]}
        scale={[1.219, 0.07, 1.219]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Step_4.geometry}
        material={materials.Granite_brick}
        position={[-0.005, 0.53, 0.001]}
        scale={[0.976, 0.07, 0.976]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao.geometry}
        material={materials['Golden Text']}
        position={[-0.424, 2.485, 0.021]}
        rotation={[Math.PI / 2, -0.104, Math.PI / 2]}
        scale={[0.642, 0.642, 0.387]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao001.geometry}
        material={materials['Golden Text']}
        position={[-0.45, 2.255, 0.006]}
        rotation={[Math.PI / 2, -0.104, Math.PI / 2]}
        scale={[0.386, 0.642, 0.646]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao002.geometry}
        material={materials.Material}
        position={[-0.472, 2.022, -0.418]}
        rotation={[Math.PI / 2, -0.104, Math.PI / 2]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao003.geometry}
        material={materials.Material}
        position={[-0.472, 2.022, 0.456]}
        rotation={[Math.PI / 2, -0.104, Math.PI / 2]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao004.geometry}
        material={materials['Golden Text']}
        position={[0.023, 2.494, 0.424]}
        rotation={[1.467, 0, 0]}
        scale={[0.642, 0.642, 0.387]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao005.geometry}
        material={materials['Golden Text']}
        position={[0.008, 2.264, 0.449]}
        rotation={[1.467, 0, 0]}
        scale={[0.386, 0.642, 0.646]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao006.geometry}
        material={materials.Material}
        position={[-0.416, 2.031, 0.485]}
        rotation={[1.467, 0, 0]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao007.geometry}
        material={materials.Material}
        position={[0.458, 2.031, 0.485]}
        rotation={[1.467, 0, 0]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao008.geometry}
        material={materials['Golden Text']}
        position={[0.425, 2.485, -0.019]}
        rotation={[Math.PI / 2, 0.104, -Math.PI / 2]}
        scale={[0.642, 0.642, 0.387]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao009.geometry}
        material={materials['Golden Text']}
        position={[0.451, 2.255, -0.004]}
        rotation={[Math.PI / 2, 0.104, -Math.PI / 2]}
        scale={[0.386, 0.642, 0.646]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao010.geometry}
        material={materials.Material}
        position={[0.473, 2.022, 0.42]}
        rotation={[Math.PI / 2, 0.104, -Math.PI / 2]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao011.geometry}
        material={materials.Material}
        position={[0.473, 2.022, -0.454]}
        rotation={[Math.PI / 2, 0.104, -Math.PI / 2]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao012.geometry}
        material={materials['Golden Text']}
        position={[-0.024, 2.485, -0.422]}
        rotation={[1.675, 0, Math.PI]}
        scale={[0.642, 0.642, 0.387]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao013.geometry}
        material={materials['Golden Text']}
        position={[-0.008, 2.255, -0.447]}
        rotation={[1.675, 0, Math.PI]}
        scale={[0.386, 0.642, 0.646]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao014.geometry}
        material={materials.Material}
        position={[0.416, 2.022, -0.47]}
        rotation={[1.675, 0, Math.PI]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao015.geometry}
        material={materials.Material}
        position={[-0.459, 2.022, -0.47]}
        rotation={[1.675, 0, Math.PI]}
        scale={0.764}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drum_Pattern.geometry}
        material={materials.Bronze_drum_faces}
        position={[-0.003, 1.122, 0.509]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao016.geometry}
        material={materials['Golden Text']}
        position={[-0.001, 3.486, 0.308]}
        rotation={[1.467, 0, 0]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao017.geometry}
        material={materials['Golden Text']}
        position={[0.005, 3.264, 0.343]}
        rotation={[1.467, 0, 0]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao018.geometry}
        material={materials['Golden Text']}
        position={[-0.001, 3.486, 0.3]}
        rotation={[1.467, 0, 0]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao019.geometry}
        material={materials['Golden Text']}
        position={[0.005, 3.264, 0.335]}
        rotation={[1.467, 0, 0]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao020.geometry}
        material={materials['Golden Text']}
        position={[-0.001, 3.486, 0.3]}
        rotation={[1.467, 0, 0]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao021.geometry}
        material={materials['Golden Text']}
        position={[0.005, 3.264, 0.335]}
        rotation={[1.467, 0, 0]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao022.geometry}
        material={materials['Golden Text']}
        position={[-0.001, 3.264, -0.333]}
        rotation={[1.675, 0, Math.PI]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao023.geometry}
        material={materials['Golden Text']}
        position={[0.005, 3.486, -0.298]}
        rotation={[1.675, 0, Math.PI]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao024.geometry}
        material={materials['Golden Text']}
        position={[0.301, 3.486, 0.004]}
        rotation={[Math.PI / 2, 0.104, -Math.PI / 2]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao025.geometry}
        material={materials['Golden Text']}
        position={[0.336, 3.264, -0.002]}
        rotation={[Math.PI / 2, 0.104, -Math.PI / 2]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao026.geometry}
        material={materials['Golden Text']}
        position={[-0.333, 3.264, 0.004]}
        rotation={[Math.PI / 2, -0.104, Math.PI / 2]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dao027.geometry}
        material={materials['Golden Text']}
        position={[-0.298, 3.486, -0.002]}
        rotation={[Math.PI / 2, -0.104, Math.PI / 2]}
        scale={[0.33, 0.341, 0.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Pole}
        position={[0.002, 3.955, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drum_Pattern001.geometry}
        material={materials.Bronze_drum_faces}
        position={[0, 1.111, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/Flagpole.glb'))
