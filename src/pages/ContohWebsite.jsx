import React from 'react';
import Navigation from '../Components/organisms/Header/Navigation';
import Contoh from '../Components/organisms/ContohWebsite/Contoh';
import BackToTop from '../Components/atoms/BackToTop';
import Footer from '../Components/organisms/Footer/Footer';

const ContohWebsite = () => {
  return (
    <>
      <Navigation />
      <Contoh />
      <BackToTop />
      <Footer />
    </>
  );
};

export default ContohWebsite;