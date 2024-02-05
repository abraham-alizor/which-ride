/* eslint-disable jsx-a11y/alt-text */

import { IPHONE_MOCKUP } from 'assets';
import { Zoom } from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';

function TheApp() {
	return (
		<div className='flex justify-center items-center px-16 py-12 z-30 w-full bg-purple-900 max-md:px-5 max-md:max-w-full'>
			<div className='flex flex-col items-center mt-16 mb-16 max-w-full w-[842px] max-md:my-10'>
				<Zoom triggerOnce={false}>
					<div className='text-4xl font-bold tracking-tight leading-10 text-center text-white max-md:max-w-full'>
						Whichride brings together multiple ride hailing providers and local taxi firms in one
						app
					</div>
				</Zoom>
				<div className='  mt-11 text-xl font-medium tracking-normal leading-8 text-center text-neutral-200 max-md:mt-10 max-md:max-w-full'>
					Allowing riders to select the provider that offers the best price, service or travel time,
					then seamlessly book within the app
				</div>

				<div className='self-stretch   max-md:max-w-full'>
					<div className='flex  max-md:flex-col'>
						<Fade
							direction='left'
							triggerOnce={false}
							className=' flex flex-col w-[40%] max-md:ml-0 max-md:w-full overflow-hidden'
						>
							<img loading='lazy' src={IPHONE_MOCKUP} className='grow w-full  aspect-[0.5]' />
						</Fade>

						<div className='flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full'>
							<div className='flex flex-col self-stretch py-1.5 my-auto max-md:mt-10 max-md:max-w-full'>
								<Fade direction={'right'} triggerOnce={false} duration={1000}>
									<div className='flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full'>
										<div className='flex gap-1.5 px-3 py-6 my-auto text-sm tracking-normal leading-4 text-center text-black bg-[#f2c94c] whitespace-nowrap rounded-full'>
											<div>Step</div>
											<div>1</div>
										</div>
										<div className='flex flex-col flex-1'>
											<div className='text-2xl font-bold tracking-tight leading-7 text-white'>
												Enter location
											</div>
											<div className='mt-6 text-lg font-medium tracking-normal leading-5 text-neutral-100'>
												Enter your destination to see a list of taxi providers near you.
											</div>
										</div>
									</div>
								</Fade>
								<Fade direction={'right'} triggerOnce={false} duration={2000}>
									<div className='flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
										<div className='flex gap-1 px-2.5 py-6 my-auto text-sm tracking-normal leading-4 text-center text-black bg-[#f2f2f2] whitespace-nowrap rounded-full'>
											<div>Step</div>
											<div>2</div>
										</div>
										<div className='flex flex-col flex-1'>
											<div className='text-2xl font-bold tracking-tight leading-7 text-white'>
												Find the perfect ride
											</div>

											<div className='mt-5 text-lg font-medium tracking-normal leading-5 text-neutral-100'>
												Filter results by driver rating, driver sex, waiting times, price or speed.
												Reduce carbon footprint by only showing hybrid or electric cars.
											</div>
										</div>
									</div>
								</Fade>
								<Fade direction={'right'} triggerOnce={false} duration={3000}>
									<div className='flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full '>
										<div className='flex gap-1 self-start px-2.5 py-6 mt-3.5 text-sm tracking-normal leading-4 text-center text-black bg-[#f2f2f2] whitespace-nowrap rounded-full'>
											<div>Step</div>
											<div>3</div>
										</div>
										<div className='flex flex-col flex-1'>
											<div className='text-2xl font-bold tracking-tight leading-7 text-white'>
												Pay and Save
											</div>
											<div className='mt-5 text-lg font-medium tracking-normal leading-5 text-neutral-200'>
												Once you select a ride, we search the web for coupons to get you an even
												better deal, then book seemlessly within our app and earn points while you
												ride.
											</div>
										</div>
									</div>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TheApp;
