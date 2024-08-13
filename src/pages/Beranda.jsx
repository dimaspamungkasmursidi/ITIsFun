import React from 'react'
import Navigation from '../Components/organisms/Header/Navigation'
import Hero from '../Components/organisms/Hero/Hero';
import PaketBeranda from '../Components/organisms/Paket/PaketBeranda';
import MarqueeText from '../Components/organisms/Hero/MarqueeText';
import KontakKami from '../Components/organisms/Kontak/KontakKami';
import TentangBeranda from '../Components/organisms/Tentang/TentangBeranda';
import Footer from '../Components/organisms/Footer/Footer';
import BackToTop from '../Components/atoms/BackToTop';
import WhatsappButton from '../Components/atoms/WhatsappButton';
import DomainPricing from '../Components/organisms/Paket/DomainPricing';

const Beranda = () => {
  return (
    <>
    <Navigation />
    <Hero />
    <MarqueeText />
    <PaketBeranda />
    <DomainPricing />
    <TentangBeranda />
    <KontakKami />
    <Footer />
    <WhatsappButton />
    <BackToTop />
    </>
  )
}

export default Beranda;
