import React from 'react';
import { Zoom } from 'react-awesome-reveal';

function ContactUs() {
	return (
		<Zoom triggerOnce={false}>
			<div className='flex justify-center items-center px-16  pb-48 md:pb-0 lg:py-12 w-full bg-amber-300 max-md:px-5 max-md:max-w-full'>
				<img
					loading='lazy'
					src='https://cdn.builder.io/api/v1/image/assets/TEMP/b1abec4b7dd7703a69f866c6b90846d544c115bd16ee9b6eff631eb041902a2c?'
					className='mt-11 mb-11 max-w-full aspect-[2.5] w-[510px] max-md:my-10'
				/>
			</div>
			<div className='justify-center items-center px-16 py-8 w-full text-xs text-center text-white bg-amber-400 max-md:px-5 max-md:max-w-full'>
				© 2020 Whichride - All rights reserved. Privacy Policy Terms and Conditions
			</div>
		</Zoom>
	);
}

export default ContactUs;
