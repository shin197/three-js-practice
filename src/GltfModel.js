import React from 'react';
import { useGLTF } from '@react-three/drei';


function Model({ modelPath, ...props }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} {...props}/>;
}

export default Model;
