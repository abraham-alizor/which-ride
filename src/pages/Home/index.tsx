/* eslint-disable jsx-a11y/alt-text */
import Navbar from 'shared/components/Navbar';
import HeroComponent from './components/Hero';
import TheApp from './components/TheApp';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { motion, useScroll } from 'framer-motion';
import ScrollContainer from 'shared/components/ScrollContainer';

function Home() {
	return (
		<ScrollContainer>
			<div className='flex flex-col pt-8 bg-white'>
				<Navbar />
				<div id=''>
					<HeroComponent />
				</div>
				<div className='z-30' id={'the-app'}>
					<TheApp />
				</div>
				<div id={'about'}>
					<About />
				</div>
				<div id={'contact-us'}>
					<ContactUs />
				</div>
			</div>
		</ScrollContainer>
	);
}

export default Home;
