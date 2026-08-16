import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Box, Sphere, Plane, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useGameStore } from '../store/gameStore';

const Ground = () => (
  <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
    <meshStandardMaterial color="#2d5016" />
  </Plane>
);

const Tree = ({ position }: { position: [number, number, number] }) => (
  <group position={position}>
    <Cylinder args={[0.5, 0.7, 4]} position={[0, 2, 0]}>
      <meshStandardMaterial color="#8B4513" />
    </Cylinder>
    <Sphere args={[3, 32, 32]} position={[0, 6, 0]}>
      <meshStandardMaterial color="#228B22" />
    </Sphere>
  </group>
);

const Cylinder = ({ args, position, children }: any) => {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={args} />
      {children}
    </mesh>
  );
};

const Rock = ({ position }: { position: [number, number, number] }) => (
  <Box args={[2, 2, 2]} position={position}>
    <meshStandardMaterial color="#808080" />
  </Box>
);

const Player = ({ position }: { position: [number, number, number] }) => (
  <Sphere args={[1, 32, 32]} position={position}>
    <meshStandardMaterial color="#ff6b6b" />
  </Sphere>
);

const Pet = ({ position, name }: { position: [number, number, number]; name: string }) => (
  <group position={position}>
    <Sphere args={[0.7, 32, 32]}>
      <meshStandardMaterial color="#ffa500" />
    </Sphere>
    <Text position={[0, 1.5, 0]} fontSize={0.5} color="white">
      {name}
    </Text>
  </group>
);

interface GameSceneProps {
  showUI?: boolean;
}

export const GameScene: React.FC<GameSceneProps> = ({ showUI = true }) => {
  const { level, pets } = useGameStore();

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[20, 20, 20]} />
      <OrbitControls />
      
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 20, 10]} intensity={1} />
      <pointLight position={[0, 10, 0]} intensity={0.5} />

      {/* Environment */}
      <Ground />
      
      {/* Trees */}
      <Tree position={[-15, 0, -15]} />
      <Tree position={[15, 0, -15]} />
      <Tree position={[-15, 0, 15]} />
      <Tree position={[15, 0, 15]} />

      {/* Rocks */}
      <Rock position={[-10, 1, 0]} />
      <Rock position={[10, 1, 0]} />
      <Rock position={[0, 1, -10]} />
      <Rock position={[0, 1, 10]} />

      {/* Player */}
      <Player position={[0, 1.5, 0]} />

      {/* Pets */}
      {pets.map((pet, idx) => (
        <Pet
          key={idx}
          position={[3 * Math.cos((idx * Math.PI * 2) / pets.length), 1, 3 * Math.sin((idx * Math.PI * 2) / pets.length)]}
          name={pet}
        />
      ))}

      {/* Level indicator */}
      {showUI && (
        <Text position={[0, 15, 0]} fontSize={2} color="white">
          Level: {level}
        </Text>
      )}

      <color attach="background" args={['#87CEEB']} />
    </Canvas>
  );
};
