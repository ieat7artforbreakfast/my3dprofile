import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FaceControls, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ( { isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.53}
       groundColor="black" />
      <pointLight intensity={4} /> 
      <spotLight
      position={[-20, 100, 60]}
      angle={0.12}
      penumbra={1}
      intensity={10}
      castShadow
      shadow-mapSize={1024}
      decay={false}/>       
      <primitive object={computer.scene}
      scale={isMobile ? 0.1 : 0.5}
      position={isMobile ? [0, -37, -.2] : [0, -3.25, -1.5]}
      rotation={[0.1, 1, -0.1]} />
      
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the isMobile variable

    setIsMobile(mediaQuery.matches);

    // define a callback function to handle changes to the media query

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);      
    };

    // add the callback function as a listener for changes to the mediaquery

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove this listener when the component is unmounted

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  })

  return (
    <Canvas
    frameloop="demand"
    camera={{ position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2} />
      <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )


}

export default ComputersCanvas