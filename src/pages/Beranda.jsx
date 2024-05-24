import React from 'react'
import Navigation from '../Components/organisms/Header/Navigation'
import Hero from '../Components/organisms/Hero/Hero';
import Paket from '../Components/organisms/Paket/Paket';
// import Card from '../Components/organisms/Paket/Card';
// import Test from '../Components/organisms/Paket/Test';

const Beranda = () => {
  return (
    <>
    <Navigation />
    <Hero />
    {/* <Card />
    <Test /> */}
    <Paket />
    </>
  )
}

export default Beranda;
