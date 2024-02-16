import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './Box'; // Adjust the path based on your file structure
import Model from './Model';

function App() {
  return (
    <div className="myCanvas">
      <Canvas>
        <ambientLight/>
        <pointLight position = {[10, 10, 10]}/>
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Model modelPath="/assets/stylized_house/scene.gltf" />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
