import React from 'react';
import Logo from './assets/logo.svg';
import Banner from './components/Banner';
import Header from './components/Header';
import Services from './components/Services';
import StayProductive from './components/StayProductive';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Services />
      <StayProductive />
      <Testimonials />
    </React.Fragment>
  );
}

export default App;
