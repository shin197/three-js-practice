import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={30}/>;
}

export default Model;
