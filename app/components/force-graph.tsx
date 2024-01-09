"use client";

import React, { useEffect, useRef, useState, useCallback, HTMLAttributes, forwardRef, MutableRefObject } from "react";
import dynamic from "next/dynamic";
import ForceGraph3D, { ForceGraphMethods } from "react-force-graph-3d";


interface DataProps {
    nodes: Node[];
    links: Link[];
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

interface MyForceGraphProps {
    // Add your specific props here
    graphData: any; // replace 'any' with the actual type of your graph data
    enableNodeDrag: boolean;
    enableNavigationControls: boolean;
    showNavInfo: boolean;
    linkColor: () => string;
    nodeColor: () => string;
    nodeRelSize: number;
    linkDirectionalParticles: number;
    backgroundColor: string;
}

// const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
//     ssr: false,
// });


const MyForceGraph = forwardRef<ForceGraphMethods, MyForceGraphProps>((props, ref) => (
    <ForceGraph3D
        {...props}
        ref={ref as MutableRefObject<ForceGraphMethods>}
    />
));

const CameraOrbit: React.FC<CameraOrbitProps> = ({ data, className }) => {

    const fgRef = useRef<any>(null);

    const distance = 2400;
    const animationFrameRef = useRef<number | null>(null);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [hasMounted, setHasMounted] = useState(false);

    const dampeningFactor = 0.1; // Adjust this value to control the dampening effect
    const targetPosition = useRef({ x: 0, y: 0, z: distance });

    const animate = useCallback(() => {
        if (fgRef.current) {
            const time = performance.now() / 24000;
            const defaultAngle = time % (Math.PI * 2);

            if (typeof window !== "undefined") {
                // Client-side-only code
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
        }
        animationFrameRef.current = requestAnimationFrame(animate);
    }, [mousePosition.x, mousePosition.y]);



    useEffect(() => {
        setHasMounted(true);
        return () => {

        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleMouseMove = (event: MouseEvent) => {
                setMousePosition({
                    x: event.clientX - window.innerWidth / 2,
                    y: event.clientY - window.innerHeight / 2,
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
        }
    }, [animate]);

    useEffect(() => {
        if (fgRef.current) {
            fgRef.current.cameraPosition({ z: distance });
        }
    }, [distance]);

    if (!hasMounted) {
        return null;
    }

    return (
        <div className={`${className} overflow-hidden `} >
            <MyForceGraph
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
    );
};

export default CameraOrbit;
