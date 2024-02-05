import { LOGO } from 'assets';
import React from 'react';

function Preloader() {
	return (
		<div className='h-screen w-screen  bg-white flex justify-center items-center'>
			<img src={LOGO} alt='' className='animate-pulse' />
		</div>
	);
}

export default Preloader;
