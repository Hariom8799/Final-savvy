"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF } from "@react-three/drei"

interface BagViewer3DProps {
  productId: string
}

function BagModel({ productId }: { productId: string }) {
  // Use the duck model as a placeholder
  const { scene } = useGLTF("/assets/3d/duck.glb")

  return <primitive object={scene} scale={2} position={[0, 0, 0]} rotation={[0, 0, 0]} />
}

export function BagViewer3D({ productId }: BagViewer3DProps) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D Model...</div>}>
        <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <BagModel productId={productId} />
          <OrbitControls />
          <Environment preset="city" />
        </Canvas>
      </Suspense>
    </div>
  )
}

