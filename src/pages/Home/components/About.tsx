/* eslint-disable jsx-a11y/alt-text */
import { SHIELD, bytesize_options } from 'assets';
import { Fade } from 'react-awesome-reveal';

function About() {
	return (
		<div className='w-full max-md:max-w-full relative '>
			<div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
				<div className='absolute left-[42%] hidden md:block text-4xl tracking-tight text-center max-md:max-w-full pt-20'>
					Why Whichride
				</div>
				<Fade
					direction='left'
					triggerOnce={false}
					duration={2000}
					className='flex flex-col w-full  md:w-[50%] max-md:w-full'
				>
					<div className=' flex flex-col grow justify-center items-end px-16 py-12 w-full text-xl font-bold tracking-normal leading-6 text-gray-800 bg-violet-400 bg-opacity-10 max-md:px-5 max-md:max-w-full'>
						<div className='flex flex-col px-10 lg:px-0  mt-36 mr-20 max-w-full w-[397px] max-md:mt-10 max-md:mr-2.5'>
							<img
								alt=''
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/3a380a2b24915cd02d54991f85e876fe51042d8362330ded66ab7f3dbf34e117?'
								className='w-16 aspect-square'
							/>
							<div className='mt-6'>More choices</div>
							<div className='mt-7 text-lg font-medium tracking-normal leading-6 text-neutral-600'>
								WhichRide lets you compare pricing across the major rideshares so you can save money
								on every ride.
							</div>
							<img
								alt=''
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/9eda4322524fe49f4c21cc284c73e5d177dc0b71a0694b5120f0a5480d962600?'
								className='mt-16 w-16 aspect-square max-md:mt-10'
							/>
							<div className='mt-6'>More choices</div>
							<div className='mt-7 text-lg font-medium tracking-normal leading-6 text-neutral-600'>
								WhichRide lets you compare pricing across the major rideshares so you can save money
								on every ride.
							</div>
						</div>
					</div>
				</Fade>
				<Fade
					direction='right'
					triggerOnce={false}
					duration={2000}
					className='flex flex-col w-full  md:w-[50%] max-md:w-full md:ml-20'
				>
					<div className='flex flex-col px-10 lg:px-0 pb-10 lg:pb-0 mt-24 font-bold text-gray-800 leading-[112.5%] max-md:mt-10 max-md:max-w-full'>
						<div className='flex flex-col mt-16 max-w-full text-xl tracking-normal w-[463px] max-md:mt-10'>
							<img
								alt=''
								loading='lazy'
								srcSet={bytesize_options}
								className=' w-16 rounded-full aspect-square max-md:ml-2.5 bg-[#6fcf97] p-4'
							/>
							<div className='mt-6 max-md:max-w-full'>More choices</div>
							<div className=' text-lg font-medium tracking-normal leading-6 text-neutral-600 max-md:max-w-full'>
								WhichRide lets you compare pricing across the major rideshares so you can save money
								on every ride.
							</div>
							<img
								alt=''
								loading='lazy'
								srcSet={SHIELD}
								className='mt-16  w-16 bg-[#bb6bd9] p-4 rounded-full aspect-square  max-md:mt-10'
							/>
							<div className='self-start mt-6'>Safety first</div>
							<div className='mt-6 text-lg font-medium tracking-normal leading-6 text-neutral-600 max-md:max-w-full'>
								WhichRide lets you compare pricing across the major rideshares so you can save money
								on every ride.
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default About;
