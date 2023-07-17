"use client";

import React, { useEffect, useState, useRef } from 'react';
import ForceGraph3D from 'react-force-graph-3d';

interface ForceGraphProps {
	className?: string;
}

export default function ForceGraph({ className }: ForceGraphProps) {
	const [graphData, setGraphData] = useState(null);
	const fgRef = useRef(null);

	useEffect(() => {
		fetch('/blocks.json')
			.then(res => res.json())
			.then(data => setGraphData(data));
	}, []);

	const handleMouseMove = (event) => {
		const x = event.clientX;
		const y = event.clientY;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		// normalize the mouse coordinates to range [-1, 1] and invert y-axis
		const nx = 2*(x / windowWidth - 0.5);
		const ny = -2*(y / windowHeight - 0.5);

		// compute the new camera position, adjust the 10 to control orbit radius
		const newCameraPosition = {
			x: 10*nx,
			y: 10*ny,
			z: 3  // keep z constant to maintain a horizontal orbit
		};

		// update the camera position
		fgRef.current.cameraPosition(newCameraPosition);
	}

	return graphData && (
		<div className={className}>
			<ForceGraph3D
				ref={fgRef}
				graphData={graphData}
				// nodeLabel={node => `${node.user}: ${node.description}`}
				nodeAutoColorBy={() => 'white'}
				linkDirectionalParticles={1}
				onMouseMove={handleMouseMove}
			/>
		</div>
	);
}
