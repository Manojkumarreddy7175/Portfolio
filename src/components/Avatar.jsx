import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Avatar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Materials
    const mainColor = 0xFF3333; // Accent Color
    const secondaryColor = 0x333333; // Dark Grey
    const glowColor = 0x00FFFF; // Cyan for eyes

    const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color: secondaryColor, 
        roughness: 0.3, 
        metalness: 0.8 
    });
    
    const accentMaterial = new THREE.MeshStandardMaterial({ 
        color: mainColor, 
        roughness: 0.2, 
        metalness: 0.5,
        emissive: mainColor,
        emissiveIntensity: 0.2
    });

    const eyeMaterial = new THREE.MeshBasicMaterial({ color: glowColor });

    // Group for the whole robot
    const robot = new THREE.Group();
    scene.add(robot);

    // --- Body Parts ---

    // Head
    const headGeo = new THREE.BoxGeometry(1.2, 1, 1);
    const head = new THREE.Mesh(headGeo, bodyMaterial);
    head.position.y = 1.8;
    robot.add(head);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMaterial);
    leftEye.position.set(-0.3, 1.85, 0.5);
    robot.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMaterial);
    rightEye.position.set(0.3, 1.85, 0.5);
    robot.add(rightEye);

    // Antenna
    const antStemGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
    const antStem = new THREE.Mesh(antStemGeo, accentMaterial);
    antStem.position.set(0, 2.5, 0);
    robot.add(antStem);

    const antBulbGeo = new THREE.SphereGeometry(0.15);
    const antBulb = new THREE.Mesh(antBulbGeo, eyeMaterial);
    antBulb.position.set(0, 2.8, 0);
    robot.add(antBulb);

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.8, 0.6, 1.5, 8);
    const torso = new THREE.Mesh(torsoGeo, bodyMaterial);
    torso.position.y = 0.5;
    robot.add(torso);

    // Core (Glowing Chest Piece)
    const coreGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
    const core = new THREE.Mesh(coreGeo, accentMaterial);
    core.rotation.x = Math.PI / 2;
    core.position.set(0, 0.5, 0.55); // Slightly protruding
    robot.add(core);

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2);
    
    // Left Arm (Static)
    const leftArm = new THREE.Mesh(armGeo, bodyMaterial);
    leftArm.position.set(-1, 0.5, 0);
    leftArm.rotation.z = 0.2;
    robot.add(leftArm);

    // Right Arm (Waving) - Needs a pivot point at the shoulder
    const rightArmPivot = new THREE.Group();
    rightArmPivot.position.set(1, 0.8, 0); // Shoulder position
    robot.add(rightArmPivot);

    const rightArm = new THREE.Mesh(armGeo, bodyMaterial);
    rightArm.position.set(0, -0.6, 0); // Offset so pivot is at top
    rightArmPivot.add(rightArm);

    // Hand (Sphere)
    const handGeo = new THREE.SphereGeometry(0.25);
    const rightHand = new THREE.Mesh(handGeo, accentMaterial);
    rightHand.position.set(0, -1.3, 0);
    rightArmPivot.add(rightHand);

    const leftHand = new THREE.Mesh(handGeo, accentMaterial);
    leftHand.position.set(0, -0.7, 0);
    leftArm.add(leftHand);

    // Base/Hover Effect
    const ringGeo = new THREE.TorusGeometry(1, 0.05, 16, 100);
    const ring = new THREE.Mesh(ringGeo, accentMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1;
    robot.add(ring);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(mainColor, 1, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // Camera Position
    camera.position.z = 5;
    camera.position.y = 1;

    // --- Animation ---
    let time = 0;
    let animationFrameId;

    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        time += 0.05;

        // Floating Motion
        robot.position.y = Math.sin(time * 0.5) * 0.1;

        // Waving Motion (Right Arm)
        rightArmPivot.rotation.z = Math.PI - 0.5 + Math.sin(time * 3) * 0.5;

        // Subtle Head Bob
        head.rotation.y = Math.sin(time * 0.5) * 0.1;

        // Ring Rotation
        ring.rotation.z -= 0.02;
        ring.scale.setScalar(1 + Math.sin(time * 2) * 0.05);

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    const handleResize = () => {
        if (!container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
        }
        // Dispose geometries and materials to prevent memory leaks
        headGeo.dispose();
        eyeGeo.dispose();
        // ... (dispose others ideally)
        bodyMaterial.dispose();
        accentMaterial.dispose();
        eyeMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="avatar-container" />;
};

export default Avatar;
