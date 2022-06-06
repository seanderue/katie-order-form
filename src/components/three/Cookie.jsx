import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'
import * as THREE from 'three'

export default function Cookie({ z }) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/models/cookie-v1-transformed.glb')
    console.log(nodes)
    console.log(materials)
    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
    
    const [hovered, setHovered] = useState(false)
    const props = useSpring({
      scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]

    })

    const [data] = useState({
      x: THREE.MathUtils.randFloatSpread(2), 
      y: THREE.MathUtils.randFloatSpread(height * 2),
      rX: Math.random() * Math.PI,
      rY: Math.random() * Math.PI,
      rZ: Math.random() * Math.PI,
    })
    
    useFrame((state) => {
      // Every frame, we'll update the position of the object
      ref.current.rotation.set(
          hovered ? data.rX += 0.005 : data.rX += 0.0005,
          hovered ? data.rY+=0.0005 : data.rY+=0.0005, 
          hovered ? data.rZ+=0.0005 : data.rZ+=0.0005)
      ref.current.position.set(data.x * width, (data.y -= 0.0125), z)
      // If the object goes out of screen, we'll reset it
      if (data.y < -height / 1) data.y = height
    })
    
    const eatCookieAnimation = () => {
      //On click, eat the cookie
    }

    return (
      <a.mesh
        ref={ref}
        onPointerOver={() => {setHovered(true)}}
        onPointerOut={() => {setHovered(false)}}
        scale={props.scale}
        geometry={nodes.cookie.geometry} 
        material={materials.cookie_skin} 
        rotation={[-1.58, 0, 0]} 
        // material-emissive="orange"
        // material-emissiveIntensity={0.05}
        />
  
    )
  }