import React from 'react';
import Logo from './assets/logo.svg';
import Banner from './components/Banner';
import Header from './components/Header';
import Services from './components/Services';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Banner />
			<Services />
		</React.Fragment>
	);
}

export default App;
