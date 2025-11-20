import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../constants';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {HERO_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
            We curate group tours, to beautiful destinations across the world
          </h1>
          <Link
            to="/#curated-adventures"
            className="mt-10 inline-block bg-[#59815B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Curated Adventures
          </Link>
        </div>
      </div>
    </section>
  );
}