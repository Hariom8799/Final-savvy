"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PresentationControls, Environment, useGLTF } from "@react-three/drei"

function BagModel() {
  // Use the duck model as a placeholder
  const { scene } = useGLTF("/assets/3d/duck.glb")

  return <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />
}

export function BagViewer() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D Model...</div>}>
        <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 4], fov: 50 }}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <BagModel />
          </PresentationControls>
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  )
}

