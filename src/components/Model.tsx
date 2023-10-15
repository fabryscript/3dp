"use client";

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model() {
  let { scene } = useGLTF("/images/neko/scene.gltf");

  useEffect(() => {
    console.log("model rendered");
    scene.children[0].translateZ(-1.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, delta) => (scene.children[0].rotation.z += delta * 0.2));

  return <primitive object={scene} />;
}

export default Model;
