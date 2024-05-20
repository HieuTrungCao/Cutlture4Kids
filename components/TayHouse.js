import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/TayHouse.glb')
  const instances = useMemo(
    () => ({
      Plane: nodes.Plane010,
      Plane1: nodes.Plane010_1,
      Columns: nodes.Columns,
      Plane2: nodes.Plane011,
      Plane3: nodes.Plane011_1,
      Walls: nodes.Walls,
      WindowBars: nodes.Window_Bars,
      Cylinder: nodes.Cylinder055,
      Cylinder1: nodes.Cylinder055_1,
      Cylinder2: nodes.Cylinder060,
      Cylinder3: nodes.Cylinder060_1,
      Roof: nodes.Roof,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <instances.Columns />
      <instances.Walls />
      <instances.WindowBars />
      <group rotation={[0, Math.PI / 2, 0]} scale={[1.334, 1.75, 1.75]}>
        <instances.Cylinder2 />
        <instances.Cylinder3 />
      </group>
      <instances.Roof rotation={[0, 0, 2.618]} scale={[2.705, 1, 7.67]} />
      <instances.Plane />
      <instances.Plane1 />
      <instances.Plane2 />
      <instances.Plane3 />
      <instances.Cylinder />
      <instances.Cylinder1 />
    </group>
  )
}

useGLTF.preload('/TayHouse.glb')
