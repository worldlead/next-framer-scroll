"use client";

import React, { useEffect, useRef, useState, useCallback, HTMLAttributes } from "react";
import ForceGraph3D from "react-force-graph-3d";


// Define types for your data structure
interface DataProps {
    className?: string;
}

interface CameraOrbitProps extends HTMLAttributes<HTMLDivElement> {
    data: DataProps;
    className?: string;
    // ... any other props specific to CameraOrbit
}

// Define a type for the MousePosition state
interface MousePosition {
    x: number;
    y: number;
}

interface Node {
    id: string;
    // Other properties as expected by ForceGraph3D
}

interface Link {
    source: string;
    target: string;
    // Other properties as expected by ForceGraph3D
}

interface DataProps {
    nodes: Node[];
    links: Link[];
}
const CameraOrbit: React.FC<CameraOrbitProps> = ({ data, className }) => {
    const fgRef = useRef<any>(null);
    const distance = 2400;
    const animationFrameRef = useRef<number | null>(null);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const dampeningFactor = 0.1; // Adjust this value to control the dampening effect
    const targetPosition = useRef({ x: 0, y: 0, z: distance });

    const animate = useCallback(() => {
        if (fgRef.current) {
            const time = performance.now() / 24000;
            const defaultAngle = time % (Math.PI * 2);
            const mouseXFactor = mousePosition.x / window.innerWidth * 2;
            const mouseYFactor = mousePosition.y / window.innerHeight * 2;

            const mouseAngle = mouseXFactor * Math.PI * -0.1;

            const totalAngle = defaultAngle + mouseAngle;

            // Calculate the target position
            targetPosition.current = {
                x: distance * Math.sin(totalAngle),
                y: distance * Math.sin(mouseYFactor * Math.PI / 6),
                z: distance * Math.cos(totalAngle),
            };

            // Get the current camera position
            const currentPosition = fgRef.current.cameraPosition();

            // Interpolate towards the target position
            fgRef.current.cameraPosition(
                {
                    x: currentPosition.x + (targetPosition.current.x - currentPosition.x) * dampeningFactor,
                    y: currentPosition.y + (targetPosition.current.y - currentPosition.y) * dampeningFactor,
                    z: currentPosition.z + (targetPosition.current.z - currentPosition.z) * dampeningFactor,
                },
                null,  // Look-at position (null keeps current look-at)
                0      // No transition duration, we're manually animating
            );
        }
        animationFrameRef.current = requestAnimationFrame(animate);
    }, [mousePosition.x, mousePosition.y]);

    useEffect(() => {

        const handleMouseMove = (event: MouseEvent) => {
            const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
            const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
            setMousePosition({
                x: event.clientX - windowWidth / 2,
                y: event.clientY - windowHeight / 2,
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [animate]);

    useEffect(() => {
        if (fgRef.current) {
            fgRef.current.cameraPosition({ z: distance });
        }
    }, [distance]);

    if (!hasMounted) {
        return null;
    }

    return hasMounted && data ? (
        <div className={`${className} overflow-hidden`}>
            <ForceGraph3D
                ref={fgRef}
                graphData={data}
                enableNodeDrag={false}
                enableNavigationControls={false}
                showNavInfo={false}
                linkColor={() => "grey"}
                nodeColor={() => "black"}
                nodeRelSize={2}
                linkDirectionalParticles={1}
                backgroundColor="white"
            />
        </div>
    ) : null;
};

export default CameraOrbit;
