import React from 'react';
import Banner from './components/Banner';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import StayProductive from './components/StayProductive';
import Testimonials from './components/Testimonials';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner />
        <Services />
        <StayProductive />
        <Testimonials />
        <EarlyAccess />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
