import * as THREE from 'three'
import { Environment, Html, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import Cookie from './components/three/Cookie'
import Form from './components/formElements/Form'

export default function App({ count = 150, depth = 80}) {
  return (
    <>
      <Form />

      <Canvas id="three-canvas-container" gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30}}>
        <color attach="background" args={['#f9deeb']} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} intensity={0} />
        <Suspense fallback={<Html>Loading...</Html>}>
          {Array.from({ length: count }, (_, i) => (
            <Cookie key={i} z={-(i / count) * depth - 15} scale={1}/>
          ))}
        </Suspense>
        {/* <EffectComposer>
          <DepthOfField
            target={[0,0,depth / 4]}
            focalLength={0.5}
            bokehScale={7}
            height={700}/>
        </EffectComposer> */}

      </Canvas>
    </>
  )
}
