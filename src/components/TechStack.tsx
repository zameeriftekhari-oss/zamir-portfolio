import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

/* IMPORT LOGOS */

import illustrator from "../assets/tech/illustrator.webp";
import coreldraw from "../assets/tech/coreldraw.webp";
import photoshop from "../assets/tech/photoshop.webp";
import autocad from "../assets/tech/autocad.webp";
import blender from "../assets/tech/blender.webp";
import amazon from "../assets/tech/amazon.webp";
import flipkart from "../assets/tech/flipkart.webp";
import infosys from "../assets/tech/infosys.webp";
import capgemini from "../assets/tech/capgemini.webp";
import bajaj from "../assets/tech/bajaj.webp";
import atlas from "../assets/tech/atlas.webp";
import zuaad from "../assets/tech/zuaad.webp";

/* LOGO ARRAY */

const logoTextures = [
  illustrator,
  coreldraw,
  photoshop,
  autocad,
  blender,
  amazon,
  flipkart,
  infosys,
  capgemini,
  bajaj,
  atlas,
  zuaad,
];

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  texture: THREE.Texture;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  texture,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;

    delta = Math.min(0.1, delta);

    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20) - 25,
        THREE.MathUtils.randFloatSpread(20) - 10,
      ]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />

      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />

      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
      >
        <meshPhysicalMaterial
          map={texture}
          emissive="#ffffff"
          emissiveMap={texture}
          emissiveIntensity={0.4}
          metalness={0.2}
          roughness={0.5}
          clearcoat={0.2}
        />
      </mesh>
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;

    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );

    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const threshold =
        document.getElementById("work")?.getBoundingClientRect().top ?? 0;

      setIsActive(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* LOAD TEXTURES */

  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return logoTextures.map((logo) => loader.load(logo));
  }, []);

  return (
    <div className="techstack">
      <h2>Tools, Platforms & Ecosystem</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        className="tech-canvas"
      >
        <ambientLight intensity={1.2} />

        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />

          {textures.map((texture, i) => (
            <SphereGeo
              key={i}
              scale={1}
              texture={texture}
              isActive={isActive}
            />
          ))}
        </Physics>

        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.6}
          environmentRotation={[0, 4, 2]}
        />

        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;