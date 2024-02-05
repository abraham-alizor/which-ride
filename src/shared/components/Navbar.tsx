/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navbar() {
	const handleClick = (targetId: string) => {
		console.log(`Clicked on ${targetId}`);
		// You can add any additional logic here

		// Example: Scroll to the element with the specified ID
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className='bg-white sticky top-0 z-40'>
			<div className='flex z-10 gap-5 px-8 lg:px-0 pb-8 lg:pb-0 justify-between self-center w-full text-sm font-bold text-gray-800 max-w-[1205px] max-md:flex-wrap max-md:max-w-full'>
				<a href='#'>
					<img
						loading='lazy'
						src='https://cdn.builder.io/api/v1/image/assets/TEMP/9db2742a87323b464a0bf19c6000173a60b970d0e9ddf2bf0c504dee01ad5f8e?'
						className='w-52 max-w-full aspect-[2.63] lg:ml-16'
						alt='Your Alt Text'
					/>
				</a>
				<div className='flex gap-5 justify-between pr-5 my-auto'>
					<a
						href='#the-app'
						onClick={(e) => {
							e.preventDefault();
							handleClick('the-app');
						}}
					>
						The App
					</a>
					<a
						href='#about'
						onClick={(e) => {
							e.preventDefault();
							handleClick('about');
						}}
					>
						About Us
					</a>
					<a
						href='#contact-us'
						onClick={(e) => {
							e.preventDefault();
							handleClick('contact-us');
						}}
					>
						Get in Touch
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
