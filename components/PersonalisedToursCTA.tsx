import React from 'react';
import { Link } from 'react-router-dom';
import HighlightedText from './HighlightedText';

export default function PersonalisedToursCTA() {
  return (
    <section id="personalised-tours-cta" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          We also plan <HighlightedText>Personalised</HighlightedText> holidays. Let us curate your next one.
        </h2>
        <div className="my-8 overflow-hidden rounded-lg shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Personalised holiday"
            className="w-full h-auto object-cover"
          />
        </div>
        <Link
          to="/#contact"
          className="inline-block bg-[#59815B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105"
        >
          Plan Your Next Holiday
        </Link>
      </div>
    </section>
  );
}