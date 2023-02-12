import React, { lazy } from 'react';
const Header = lazy(() => import('./components/Header/Header'));
const Banner = lazy(() => import('./components/Banner/Banner'));
const Services = lazy(() => import('./components/Service/Services'));
const StayProductive = lazy(() => import('./components/StayProductive/StayProductive'));
const Testimonials = lazy(
  () => import('./components/Testimonial/Testimonials')
);
const EarlyAccess = lazy(() => import('./components/EarlyAccess/EarlyAccess'));
const Footer = lazy(() => import('./components/Footer/Footer'));
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
