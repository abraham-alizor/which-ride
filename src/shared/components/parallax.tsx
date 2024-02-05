import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'hooks/useMediaQuery';
import React, { ReactNode, useEffect, useRef } from 'react';

interface ParallaxProps {
	className?: string;
	children?: ReactNode;
	speed?: number;
	id?: string;
}

function Parallax({ className, children, speed = 1, id = 'parallax' }: ParallaxProps) {
	const trigger = useRef<HTMLDivElement | any>();
	const target = useRef<HTMLDivElement | any>();
	const timeline = useRef<HTMLDivElement | any>();
	const windowWidth = window.innerWidth;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const y = windowWidth * speed * 0.1;

		const setY = gsap.quickSetter(target.current, 'y', 'px');

		timeline.current = gsap.timeline({
			scrollTrigger: {
				id: id,
				trigger: trigger?.current,
				scrub: true,
				start: 'top bottom',
				end: 'bottom top',
				onUpdate: (e) => {
					setY(e.progress * y);
				},
			},
		});

		return () => {
			timeline?.current?.kill();
		};
	}, [id, speed, windowWidth]);

	return (
		<div ref={trigger} className={className} id={id}>
			<div ref={target}>{children}</div>
		</div>
	);
}

export default Parallax;
