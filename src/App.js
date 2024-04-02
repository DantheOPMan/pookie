import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Carousel from './components/GifCarousel'

function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-pink-900 via-gray-800 to-yellow-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Carousel/>
        <HowToBuy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
