"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PresentationControls, Environment, useGLTF, Float } from "@react-three/drei"
import { motion } from "framer-motion-3d"
import { MotionConfig } from "framer-motion"

function BagModel() {
  // Use the duck model as a placeholder
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const modelRef = useRef<THREE.Object3D | null>(null)

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <motion.primitive
        ref={modelRef}
        object={scene}
        scale={2}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
        animate={{
          y: [-1, -0.8, -1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </Float>
  )
}

export function BagViewer() {
  return (
    <div className="w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        }
      >
        <MotionConfig transition={{ duration: 0.5 }}>
          <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
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
        </MotionConfig>
      </Suspense>
    </div>
  )
}

