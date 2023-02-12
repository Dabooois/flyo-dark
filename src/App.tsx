import React, { lazy } from 'react';
const Header = lazy(() => import('./components/Header/Header'));
const Banner = lazy(() => import('./components/Banner/Banner'));
const Services = lazy(() => import('./components/Services'));
const StayProductive = lazy(() => import('./components/StayProductive'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const EarlyAccess = lazy(() => import('./components/EarlyAccess'));
const Footer = lazy(() => import('./components/Footer'));
// import Header from './components/Header/Header';
// import Banner from './components/Banner/Banner';
// import Services from './components/Services';
// import StayProductive from './components/StayProductive';
// import Testimonials from './components/Testimonials';
// import EarlyAccess from './components/EarlyAccess';
// import Footer from './components/Footer';

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
