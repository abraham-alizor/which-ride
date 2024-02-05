/* eslint-disable jsx-a11y/alt-text */
import { HERO_MOCKUP } from 'assets';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Parallax from 'shared/components/parallax';
import { Fade } from 'react-awesome-reveal';
import { useMediaQuery } from 'hooks/useMediaQuery';

function HeroComponent() {
	const { scrollYProgress } = useViewportScroll() as any;
	const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
	const isMobileView = useMediaQuery('(max-width: 640px)');
	const isTabletView = useMediaQuery('(max-width: 840px)');

	return (
		<>
			{isMobileView && isTabletView ? (
				<motion.div className='overflow-hidden self-center px-16 pt-8 -mt-7 w-full bg-white max-w-[1235px] max-md:px-5 max-md:max-w-full'>
					<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
						<Fade
							direction='left'
							triggerOnce={false}
							className='flex flex-col w-[45%] max-md:ml-0 max-md:w-full'
						>
							<div className='flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full'>
								<div className='text-5xl font-bold tracking-tight text-gray-800 leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]'>
									Compare & book ride-hailing providers{' '}
								</div>
								<div className='mt-7 text-xl font-medium tracking-normal leading-6 text-neutral-600 max-md:max-w-full'>
									Save money and time with WhichrRide. <br />
									Think Compare the market but for taxis.
									<br />
								</div>
							</div>
						</Fade>

						<Fade
							direction='right'
							triggerOnce={false}
							className='flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full'
						>
							<Parallax speed={0.1}>
								<div className='flex overflow-hidden relative flex-col grow items-center  px-16 pt-12 min-h-[551px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
									<img
										loading='lazy'
										src={HERO_MOCKUP}
										className='object-cover absolute inset-0 size-full'
									/>
								</div>
							</Parallax>
						</Fade>
					</div>
				</motion.div>
			) : (
				<motion.div
					style={{ scale }}
					className='overflow-hidden self-center px-16 pt-8 -mt-7 w-full bg-white max-w-[1235px] max-md:px-5 max-md:max-w-full'
				>
					<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
						<Fade
							direction='left'
							triggerOnce={false}
							className='flex flex-col w-[45%] max-md:ml-0 max-md:w-full'
						>
							<div className='flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full'>
								<div className='text-5xl font-bold tracking-tight text-gray-800 leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]'>
									Compare & book ride-hailing providers{' '}
								</div>
								<div className='mt-7 text-xl font-medium tracking-normal leading-6 text-neutral-600 max-md:max-w-full'>
									Save money and time with WhichrRide. <br />
									Think Compare the market but for taxis.
									<br />
								</div>
							</div>
						</Fade>

						<Fade
							direction='right'
							triggerOnce={false}
							className='flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full'
						>
							<Parallax speed={0.1}>
								<div className='flex overflow-hidden relative flex-col grow items-center  px-16 pt-12 min-h-[551px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
									<img
										loading='lazy'
										src={HERO_MOCKUP}
										className='object-cover absolute inset-0 size-full'
									/>
								</div>
							</Parallax>
						</Fade>
					</div>
				</motion.div>
			)}
		</>
	);
}

export default HeroComponent;
