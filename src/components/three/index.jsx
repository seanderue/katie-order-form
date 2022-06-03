import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef  } from "react"
import { AmbientLight } from "three"
import { angleToRadians } from "../../utils/angle"

export default function Three() {

    const orbitControlsRef = useRef(null)
    useFrame((state)=>{
        if(!!orbitControlsRef){
            const { x, y } = state.mouse
            orbitControlsRef.current.setAzimuthalAngle(- x * angleToRadians(30))
            orbitControlsRef.current.setPolarAngle(y + 1 * angleToRadians(90 - 30))
        }
    })

    useEffect(() => {
        if(!!orbitControlsRef.current){
            console.log(orbitControlsRef.current)
        }

    }, [orbitControlsRef.current])


    return (
        <>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 1.25, 5]}/>
        <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>

        {/* Ball */}
        <mesh position={[0, 1, 0]}>
            <sphereGeometry args={[.75, 32, 32]}/>
            <meshStandardMaterial color="#fff" />

        </mesh>

        {/* Floor */}
        <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
            <planeGeometry args={[7, 7]}/>
            <meshStandardMaterial color="#cd80bf" />
        </mesh>

        {/* Ambient Light */}
        <ambientLight args={["#FFF", 1]} />
        </>
    )

}