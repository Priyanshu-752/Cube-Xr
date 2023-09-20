import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {

    const cubeRef = useRef();

 // hook for animation useFrame
 useFrame(() => {
    cubeRef.current.rotation.y +=0.05;
 });

  return (
    <>
      {/* OrbitControls for giving 3rd look to project */}
    <OrbitControls />
    {/* ambientLight for allowing color to mesh */}
    <ambientLight/>
    {/* mesh is for 3rd object */}
      <mesh ref={cubeRef}>
        <boxGeometry  />
        <meshStandardMaterial color={"mediumblue"} />
      </mesh>
    </>
  )
}

export default Cube;
