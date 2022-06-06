/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cookie-v1-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.cookie.geometry} material={materials.cookie_skin} rotation={[-1.58, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/cookie-v1-transformed.glb')