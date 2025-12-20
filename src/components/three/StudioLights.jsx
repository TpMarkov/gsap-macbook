import React from 'react'
import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
  return (
    <group name={"lights"}>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form={"rect"}
            intensity={2}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form={"rect"}
            intensity={2}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      <hemisphereLight intensity={0.5} groundColor="#000000" />
      <spotLight
        position={[-2, 10, 5]}
        decay={2}
        angle={0.15}
        intensity={150}
        castShadow
      />
      <spotLight
        position={[0, -25, 10]}
        decay={2}
        angle={0.15}
        intensity={50}
      />
      <spotLight
        position={[0, 15, 5]}
        decay={2}
        angle={0.15}
        intensity={100}
        castShadow
      />
    </group>
  )
}
export default StudioLights
