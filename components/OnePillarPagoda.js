import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function OnePillarPagoda(props) {
  const { nodes, materials } = useGLTF(require('../assets/OnePillarPagoda.glb'))
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={8.963}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.011']}
        position={[0.766, 1.769, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.821, -2.126, -0.821]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.006']}
        position={[0.766, 3.906, 0]}
        scale={[2.478, 0.067, 2.478]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.011']}
        position={[8.574, 0.698, 8.571]}
        scale={[0.12, 0.511, 0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.011']}
        position={[8.574, 1.1, 8.571]}
        scale={[1.002, 0.886, 1.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.011']}
        position={[8.574, 1.169, 8.571]}
        scale={0.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.011']}
        position={[-8.578, 0.39, -0.958]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.154, -0.216, -0.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.006']}
        position={[-1.372, 4.241, -2.145]}
        scale={[0.157, 1.708, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['Material.006']}
        position={[-0.543, 2.875, -1.285]}
        rotation={[-Math.PI, Math.PI / 4, 0]}
        scale={[1.502, 0.134, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Material.006']}
        position={[0.075, 2.621, -0.682]}
        rotation={[-Math.PI, Math.PI / 4, 0.531]}
        scale={[1.1, 0.124, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.006']}
        position={[-0.543, 3.717, -1.285]}
        rotation={[-Math.PI, Math.PI / 4, 0]}
        scale={[1.502, 0.134, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[2.139, 3.717, -0.009]}
        scale={[1, 0.123, 0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[2.139, 2.89, -0.009]}
        scale={[1, 0.123, 0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[2.899, 3.189, -0.009]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.656, 0.053, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[1.73, 2.638, -0.01]}
        rotation={[0, 0, -2.611]}
        scale={[1.1, 0.124, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Material.006']}
        position={[2.906, 4.098, 0.002]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.042, -0.125, -2.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.006']}
        position={[-1.372, 4.858, -1.354]}
        scale={[0.106, 0.901, 0.106]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Material.006']}
        position={[-0.577, 4.858, -2.142]}
        scale={[0.106, 0.901, 0.106]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['Material.006']}
        position={[0.776, 4.098, -2.141]}
        rotation={[0, -1.571, 0]}
        scale={[-0.042, -0.125, -2.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['Material.006']}
        position={[-1.376, 4.098, -0.006]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.042, -0.125, -2.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.006']}
        position={[2.377, 4.324, -2.146]}
        scale={[0.016, 0.101, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Material.006']}
        position={[2.579, 4.324, -2.146]}
        scale={[0.016, 0.101, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.006']}
        position={[1.821, 4.324, -2.146]}
        scale={[0.016, 0.101, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.006']}
        position={[2.905, 4.324, 1.814]}
        scale={[0.016, 0.101, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials['Material.006']}
        position={[2.905, 4.324, 1.625]}
        scale={[0.016, 0.101, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['Material.006']}
        position={[0.776, 4.446, -2.141]}
        rotation={[0, -1.571, 0]}
        scale={[-0.042, -0.021, -2.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials['Material.006']}
        position={[2.905, 4.446, -0.004]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.042, -0.021, -2.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.006']}
        position={[2.905, 4.324, 1.063]}
        scale={[0.016, 0.101, 0.016]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials['Material.006']}
        position={[-1.373, 4.446, -1.736]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.032, -0.021, -0.353]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials['Material.006']}
        position={[-1.373, 4.38, -1.488]}
        scale={[0.028, 0.106, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials['Material.006']}
        position={[-1.373, 4.38, -1.964]}
        scale={[0.028, 0.106, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['Material.006']}
        position={[-0.493, 5.266, -1.272]}
        scale={[0.157, 1.309, 0.157]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials['Material.006']}
        position={[-0.267, 5.389, -1.26]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.065, 1.411, 0.208]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials['Material.006']}
        position={[0.036, 5.224, -1.271]}
        scale={[0.252, 1.249, 0.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials['Material.006']}
        position={[1.745, 5.224, 0.802]}
        rotation={[0, 1.571, 0]}
        scale={[0.27, 1.249, 0.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials['Material.006']}
        position={[-1.911, 5.309, -1.366]}
        rotation={[0, 0, 0.148]}
        scale={[0.518, 0.068, 0.051]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials['Material.006']}
        position={[-0.572, 5.288, -2.657]}
        rotation={[-0.148, -1.57, 0]}
        scale={[0.553, 0.068, 0.051]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials['Material.006']}
        position={[-1.95, 5.822, -2.73]}
        rotation={[0, -Math.PI / 4, -0.035]}
        scale={[0.803, 0.098, 0.068]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials['Material.006']}
        position={[3.846, 5.319, 0.003]}
        rotation={[0, 1.571, 0]}
        scale={[3.146, 0.146, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.001']}
        position={[0.766, 5.406, 0]}
        scale={[3.27, 1, 3.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials['Material.006']}
        position={[0.763, 5.319, -3.109]}
        scale={[3.146, 0.146, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.002']}
        position={[0.791, 5.406, 0.027]}
        scale={[3.27, 1, 3.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials['Material.005']}
        position={[-2.624, 6.851, 3.355]}
        rotation={[Math.PI / 2, 0, 2.585]}
        scale={[0.462, 0.782, 0.462]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Material.005']}
        position={[3.943, 4.323, -0.969]}
        rotation={[-0.027, -0.223, 0.002]}
        scale={[5.18, 1.581, 5.614]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials['Material.003']}
        position={[0.766, 5.198, 0.04]}
        scale={[3.27, 1, 3.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials['Material.004']}
        position={[0.766, 5.406, 0]}
        scale={[3.27, 1, 3.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Material.005']}
        position={[0.766, 5.349, 0]}
        scale={[3.27, 1, 3.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.011']}
        position={[-4.493, 1.647, -0.006]}
        scale={[1.612, 1.46, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials['Material.007']}
        position={[-7.385, 0.187, -0.007]}
        scale={[1.276, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials['Material.011']}
        position={[-5.802, 0.39, -0.958]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.154, -0.216, -0.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials['Material.011']}
        position={[-7.207, 0.283, 0.952]}
        scale={[1.324, 0.087, 0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials['Material.011']}
        position={[-7.189, 1.333, 0.952]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.508, 23.272, 0.508]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials['Material.011']}
        position={[-3.237, 3.21, -0.958]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.154, -0.103, -0.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials['Material.011']}
        position={[-1.897, 3.21, -0.958]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.154, -0.103, -0.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials['Material.011']}
        position={[-4.492, 1.86, -0.962]}
        rotation={[0, 0, 0.752]}
        scale={[1.789, 0.105, 0.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials['Material.011']}
        position={[-4.637, 2.296, -0.962]}
        rotation={[0, 0, -0.819]}
        scale={[0.472, 33.777, 0.472]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Material.007']}
        position={[-2.584, 3.111, -0.006]}
        scale={[0.893, 1, 1.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials['Material.011']}
        position={[-3.235, 3.823, -0.957]}
        scale={[1.002, 0.886, 1.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.011']}
        position={[-3.237, 3.875, -0.954]}
        scale={0.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={nodes.Cube042.material}
        position={[0.766, 8.101, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.017, 0.031, 1.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials['Material.005']}
        position={[0.228, 13.028, 0.057]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials['Material.011']}
        position={[8.616, 0.548, -0.042]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.044, 0.358, 8.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.011']}
        position={[0.005, 0.548, -8.617]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[0.044, 0.358, 8.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.011']}
        position={[-8.533, 0.545, -5.353]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.044, 0.358, 8.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.006']}
        position={[2.139, 3.717, -0.009]}
        scale={[1, 0.123, 0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Material.006']}
        position={[0.767, 3.717, -1.402]}
        rotation={[0, 1.571, 0]}
        scale={[1, 0.123, 0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.009']}
        position={[-4.5, 1.647, -0.006]}
        scale={[1.612, 1.46, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.010']}
        scale={8.989}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.012']}
        position={[0, 0.104, 0]}
        scale={8.989}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/OnePillarPagoda.glb'))
