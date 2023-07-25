"use client";

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const ForceGraph3D = dynamic(
	() => import('react-force-graph-3d'),
	{ ssr: false }
  );

interface ForceGraphProps {
	className?: string;
}

export default function ForceGraph({ className }: ForceGraphProps) {
	const [graphData, setGraphData] = useState(null);
	const fgRef = useRef<any>(null);

	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		fetch('/blocks.json')
			.then(res => res.json())
			.then(data => setGraphData(data));
	}, []);

	const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
		const x = event.clientX;
		const y = event.clientY;

		const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
		const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

		// normalize the mouse coordinates to range [-1, 1] and invert y-axis
		const nx = 2 * (x / windowWidth - 0.5);
		const ny = -2 * (y / windowHeight - 0.5);

		// compute the new camera position, adjust the 10 to control orbit radius
		const newCameraPosition = {
			x: 10 * nx,
			y: 10 * ny,
			z: 3  // keep z constant to maintain a horizontal orbit
		};

		// update the camera position
		if (fgRef.current) {
			// @ts-ignore
			fgRef.current.cameraPosition(newCameraPosition.x, newCameraPosition.y, newCameraPosition.z);
		}

		setCameraPosition(newCameraPosition);

	}

	const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });


	return hasMounted && graphData ? (
		<div className={className} onMouseMove={handleMouseMove}>
		  <ForceGraph3D
			ref={fgRef}
			graphData={graphData}
			linkColor={link => 'grey'}
			nodeColor={node => 'black'}
			nodeRelSize={2} // All nodes radius 10px
			linkDirectionalParticles={1}
			backgroundColor="white"
		  />
		</div>
	  ) : null;
}
