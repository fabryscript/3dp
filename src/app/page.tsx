"use client";

import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Navbar />
        <div className="relative grid h-screen grid-cols-12 items-center px-2 lg:px-10">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              staggerChildren: 0.3,
              delayChildren: 1,
            }}
            className="col-span-12 flex flex-col gap-4 lg:col-span-6"
          >
            {/* <h1 className="text-8xl font-bold text-green-400">こんにちは!</h1> */}
            <Title />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="ml-2 text-3xl"
            >
              I&apos;m Fabrizio. A web developer based in Milazzo, Italy.
            </motion.p>
          </motion.div>
          <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}
