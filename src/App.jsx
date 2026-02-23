import React from 'react';
import logo from './assets/logo-panedora.png';
import heroBg from './assets/panedora-with-all-brownie.png';
import CollectionCarousel from './components/CollectionCarousel';

// Brownie Collection Imports
import img1 from './assets/rum-berry-kiss.png';
import img2 from './assets/biscoff-cheese-bliss.png';
import img3 from './assets/creamy-pb-smash.png';
import img4 from './assets/the-house-original.png';
import img5 from './assets/decadence-3.0.png';
import img6 from './assets/mocha-muse.png';
import img7 from './assets/tropic-fudge.png';
import img8 from './assets/roasted-java-crunch.png';

function App() {
  // Your actual collection data, passed directly into the carousel
  const collectionData = [
    { name: "Rum-Berry Kiss", desc: "Juicy berries soaked in aged rum, folded into fudge brownies for a warming treat.", image: img1 },
    { name: "Biscoff Cheese Bliss", desc: "Cheesecake meets Biscoff atop a brownie base - a harmonious bite for pure happiness.", image: img2 },
    { name: "Creamy PB Smash", desc: "Peanut butter like you've never tasted. Crunchy textures meet luscious buttercream.", image: img3 },
    { name: "The House Original", desc: "Our in-house pure dark chocolate brownie, baked to a melt-in-the-mouth finish.", image: img4 },
    { name: "Decadence 3.0", desc: "A fudgy brownie layered with white, milk and dark chocolate indulgence.", image: img5 },
    { name: "Mocha Muse", desc: "A rich mocha topping crowns our brownie, satisfying your caffeine-dream cravings.", image: img6 },
    { name: "Tropic Fudge", desc: "A tropical escape in every bite. Coconut atop a fudgy brownie reimagined.", image: img7 },
    { name: "Roasted Java Crunch", desc: "The ultimate nutty chocolate delight with a hint of coffee to elevate every bite.", image: img8 }
  ];

  return (
    <div className="landing-page">
      <nav className="navbar">
        <img src={logo} alt="Panedora" className="nav-logo" />
        <div className="nav-links"><span>EST. 2024 — MUMBAI</span></div>
      </nav>

      {/* Hero Section */}
      <main className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})` }}>
        <div className="hero-content">
          <img src={logo} alt="Panedora Hero" className="hero-logo" />
          <h1>Artisanal Excellence</h1>
          <p>Crafting the finest bakes in Mumbai, one grain at a time.</p>
        </div>
      </main>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2 className="story-title">A Mumbai Legacy</h2>
          <div className="story-text-box">
            <p>Born in the heart of Mumbai in 2024, Panedora began with a single vision: to transform the humble brownie into a masterpiece of artisanal excellence.</p>
            <p>Every bake in our kitchen tells a story of precision. We source the finest cocoa and local ingredients, blending traditional techniques with a modern, decadent flair.</p>
          </div>
        </div>
      </section>

      {/* The Custom Collection Carousel */}
      <CollectionCarousel items={collectionData} />

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-tagline">Gifts of Artisanal Bakes</p>
          <div className="social-links">
            <a href="https://www.instagram.com/panedora.co?igsh=cXJhMWh1bWpjbW8x" target="_blank" rel="noreferrer">Instagram</a>
            <span className="separator">|</span>
            <a href="#" className="disabled-link">WhatsApp</a>
          </div>
          <p className="copyright">© 2026 PANEDORA MUMBAI</p>
        </div>
      </footer>
    </div>
  );
}

export default App;