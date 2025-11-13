import React from 'react';
import { TOURS } from '../constants';
import TourCard from './TourCard';
import type { Tour } from '../types';
import HighlightedText from './HighlightedText';

export default function UpcomingTours() {
  return (
    <section 
      id="curated-adventures" 
      className="py-20 sm:py-28"
      style={{ backgroundImage: "url('https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-bckg-02.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Curated <HighlightedText>Adventures</HighlightedText>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {TOURS.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}