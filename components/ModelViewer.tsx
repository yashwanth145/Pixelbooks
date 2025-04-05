"use client"

import {Canvas} from "@react-three/fiber"
import {OrbitControls,useGLTF} from "@react-three/drei"
import { Suspense } from "react"
import * as THREE from "three"


function Model(){
    const {scene} =useGLTF("./book01.glb")
    return <primitive object={scene} scale={1.5}/>
}

export default function ModelViewer(){
    return(
        <Canvas camera={{position:[0,2,5],fov:50}} style={{width:"100vw",height:"100vh"}}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[2,5,2]} intensity={1}/>
            <Suspense fallback={null}>
                <Model/>
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}

