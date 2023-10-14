"use client";

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

function Model() {
  let { scene } = useGLTF("/images/neko/scene.gltf");
  useEffect(() => {
    scene.children[0].translateZ(-1);
  }, [scene.children]);

  return <primitive object={scene} />;
}

export default Model;
