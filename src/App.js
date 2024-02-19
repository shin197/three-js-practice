import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Box'; // Adjust the path based on your file structure
import GltfModel from './GltfModel';
import FbxModel from './FbxModel';
import XBot from './XBot';

function App() {
  return (
    <div className="myCanvas">
      <Canvas>
        <ambientLight/>
        <pointLight position = {[10, 10, 10]}/>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <GltfModel modelPath="/assets/stylized_house/scene.gltf" scale={30} position={[5, 0, 0]} />
        <FbxModel modelPath="/assets/amy/Gangnam_Style.fbx" scale={1/10} position={[-2, 0, 3]} />
        <XBot scale={1} position={[-5, 0, 0]} />
        <OrbitControls enableZoom={true} />
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      </Canvas>
    </div>
  );
}

export default App;
