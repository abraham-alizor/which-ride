'use client';
import React from 'react';
import ReactLenis from '@studio-freight/react-lenis';
import { useScroll, motion } from 'framer-motion';

function ScrollContainer({ children }: { children: React.ReactNode }) {
	const { scrollYProgress } = useScroll();

	return (
		<ReactLenis
			root
			options={{
				smoothTouch: true,
				duration: 1.5,
			}}
		>
			<motion.div className='progress-bar z-50' style={{ scaleX: scrollYProgress }} />
			{children}
		</ReactLenis>
	);
}

export default ScrollContainer;
