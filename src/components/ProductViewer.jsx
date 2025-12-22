import React from 'react'
import useMacbookStore from "../store/index.js";
import clsx from 'clsx';
import { Canvas, useFrame, } from '@react-three/fiber'
import { Box, OrbitControls, ContactShadows } from '@react-three/drei';
import { MacbookModel14 } from "./models/Mackbook-14.jsx";
import StudioLights from "./three/StudioLights.jsx";

import { MacbookModel16 } from "./models/Macbook-16.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import { useMediaQuery } from "react-responsive";


const ProductViewer = () => {

  const { color, scale, setColor, setScale } = useMacbookStore()

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <section id={"product-viewer"}>
      <h1 className={"text-center"}>Take a closer look.</h1>

      <div className={"controls"}>
        <p className={"info"}>Macbook Pro | Available in 14" and 16" in Space Grey and Dark colors
        </p>
        <div className={"flex-center gap-5 mt-5"}>
          <div className={"color-control"}>
            <div className={clsx("bg-neutral-300", color === "#adb5bd" && "active")}
              onClick={() => setColor("#adb5bd")} />
            <div className={clsx("bg-neutral-900", color === "#2e2c2e" && "active")}
              onClick={() => setColor("#2e2c2e")} />
          </div>

          <div className={'size-control'}>
            <div className={clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}
              onClick={() => setScale(0.06)}>
              <p>14"</p>
            </div>
            <div className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}
              onClick={() => setScale(0.08)}>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id={"canvas"}
        camera={{ position: [0, 2, 6], fov: 50, far: 100 }}
        shadows
        gl={{ antialias: true, toneMappingExposure: 1.5 }}
      >
        <StudioLights />
        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  )
}
export default ProductViewer
