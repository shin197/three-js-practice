import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useFBX } from '@react-three/drei';

const FbxModel = ({ modelPath, ...props }) => {
  const fbx = useFBX(modelPath);
  const modelRef = useRef();
  const mixer = useRef(new THREE.AnimationMixer(fbx));
  const { scene } = useThree();

  useEffect(() => {
    // Assuming the FBX model has animations
    // This code snippet plays the first animation clip found
    if (fbx.animations.length > 0) {
      const action = mixer.current.clipAction(fbx.animations[0]);
      action.play();
    }

    return () => mixer?.stopAllAction(); // Cleanup
    // scene.add(fbx);
    // return () => {
    //   scene.remove(fbx);
    // };
  }, [fbx, scene]);

  useFrame((state, delta) => {
    mixer.current.update(delta);
  });

  return (
    <group ref={modelRef} {...props}>
      <primitive object={fbx} ref={modelRef} {...props}/>
    </group>
  );
};

export default FbxModel;