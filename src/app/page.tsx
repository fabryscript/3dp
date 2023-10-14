"use client";

import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="relative grid h-screen grid-cols-12 items-center px-2 lg:px-10">
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-6">
          {/* <h1 className="text-8xl font-bold text-green-400">こんにちは!</h1> */}
          <h1 className="text-8xl font-bold text-red-500">Hello!</h1>
          <p className="ml-2 text-3xl">
            I&apos;m Fabrizio. A web developer based in Milazzo, Italy.
          </p>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <Canvas className="col-span-12 max-h-[600px] pt-12 lg:col-span-6">
            <Model />
            <PerspectiveCamera makeDefault position={[0, 2.5, 8]} />
            <ambientLight intensity={2.5} />
            <pointLight position={[1, 1, 2]} />
            <pointLight position={[-3, 3, 1]} />
            <pointLight position={[2, 15, 2]} />
            <OrbitControls
              maxPolarAngle={1.3} // disable scrolling on the y axis
              minPolarAngle={1.3} // disable scrolling on the y axis
              minDistance={8} // disable wheel scrolling
              maxDistance={8} // disable wheel scrolling
              autoRotate
              autoRotateSpeed={5}
            />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
