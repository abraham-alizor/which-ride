import Home from 'pages/Home';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from 'shared/components/Preloader';

function App() {
	const [preLoader, setPreloader] = useState<boolean>(true);

	useEffect(() => {
		const preloaderTimer = setTimeout(() => {
			setPreloader(false);
		}, 4000);

		return () => {
			// Clear the timer if the component is unmounted before the preloader timeout
			clearTimeout(preloaderTimer);
		};
	}, []);

	return (
		<>
			{preLoader ? (
				<Preloader />
			) : (
				<Routes>
					<Route path={'/'} element={<Home />} />
				</Routes>
			)}
		</>
	);
}

export default App;
