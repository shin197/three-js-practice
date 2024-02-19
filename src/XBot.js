import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = ({ ...props}) => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/assets/xbot/xbot.gltf");
  const { actions } = useAnimations(animations, groupRef);

  useFrame((state, delta) => {
    // This is necessary if you have animations that need to be updated each frame
    actions?.[Object.keys(actions)[0]]?.play();
  });

  return <primitive ref={groupRef} object={scene} dispose={null} {...props}/>;
};

// function Model({ modelPath, ...props }) {
//   const { scene } = useGLTF(modelPath);
//   return <primitive object={scene} {...props}/>;
// }

export default Model;
