"use client";

import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Title from "@/components/Title";
import Loading from "@/components/Loading";
import ColorBlur from "@/components/ColorBlur";

import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Link from "next/link";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/fabryscript",
  },
  {
    icon: <FaXTwitter />,
    href: "https://twitter.com/fabryscript",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com/fabryscript",
  },
];

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <IconContext.Provider value={{ size: "24" }}>
        <main>
          <Navbar />
          <div className="relative grid h-screen grid-cols-12 items-center px-2 max-lg:mt-16 max-lg:text-center lg:px-10">
            <motion.div
              // initial={{ y: 200 }}
              // animate={{ y: 0 }}
              // transition={{
              //   duration: 0.2,
              //   ease: "easeInOut",
              //   type: "spring",
              //   stiffness: 100,
              // }}
              className={`animate-fadein relative col-span-12 flex flex-col gap-4 max-lg:items-center lg:col-span-6`}
            >
              <Title />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5 }}
                className="z-10 ml-2 text-3xl"
              >
                I&apos;m Fabrizio. A web developer based in Milazzo, Italy 🇮🇹
              </motion.p>
              <ul className="z-10 mt-12 flex items-center gap-10 lg:ml-4 lg:flex-row">
                {socials.map(({ href, icon }) => (
                  <Link key={href} href={href} target="_blank">
                    <li className="flex items-center gap-2">{icon}</li>
                  </Link>
                ))}
              </ul>
              <ColorBlur className="top-0 h-28 w-28 bg-red-500 blur-[200px]" />
              <ColorBlur className="-bottom-[500px] h-[300px] w-[300px] bg-red-500 blur-[400px]" />
            </motion.div>
            <div className="relative col-span-12 flex h-full w-full lg:col-span-6">
              <ColorBlur className="right-24 top-48 h-[300px] w-[300px] bg-red-500 blur-[500px]" />
              <Suspense fallback={<Loading />}>
                <Canvas className="max-h-[600px] flex-1 pt-12 max-lg:-mt-24">
                  <Model />
                  <PerspectiveCamera makeDefault position={[0, 2.5, 8]} />
                  <ambientLight intensity={0.5} color={"#FFFFFF"} />
                  <directionalLight
                    intensity={1}
                    color={"#FFFFFF"}
                    position={[1, 1, 2]}
                  />
                  <directionalLight
                    intensity={1}
                    color={"#FFFFFF"}
                    position={[1, 1, -1]}
                  />
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
          </div>
        </main>
      </IconContext.Provider>
    </Suspense>
  );
}
