import React from 'react';
import { Link } from 'react-router-dom';
import type { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#59815B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const TourDetailsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// The box with torn edges for the title
const TornEdgeTitle = ({ title }: { title: string }) => {
    const svgBeforeEncoded = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 100' preserveAspectRatio='none'%3E%3Cpath d='M30 0 L0 0 L2 5 L0 10 L3 15 L0 20 L4 25 L0 30 L5 35 L0 40 L6 45 L0 50 L7 55 L0 60 L6 65 L0 70 L5 75 L0 80 L4 85 L0 90 L3 95 L0 100 L30 100 Z' fill='white'/%3E%3C/svg%3E")`;
    const svgAfterEncoded = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 100' preserveAspectRatio='none'%3E%3Cpath d='M0 0 L30 0 L28 5 L30 10 L27 15 L30 20 L26 25 L30 30 L25 35 L30 40 L24 45 L30 50 L23 55 L30 60 L24 65 L30 70 L25 75 L30 80 L26 85 L30 90 L27 95 L30 100 L0 100 Z' fill='white'/%3E%3C/svg%3E")`;

    return (
        <>
            <style>{`
              .torn-edge-box::before {
                content: '';
                position: absolute;
                top: 0;
                width: 30px;
                height: 100%;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                left: -29px;
                background-image: ${svgBeforeEncoded};
              }
              .torn-edge-box::after {
                content: '';
                position: absolute;
                top: 0;
                width: 30px;
                height: 100%;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                right: -29px;
                background-image: ${svgAfterEncoded};
                background-position: right;
              }
            `}</style>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center">
                <div className="relative torn-edge-box bg-white px-8 py-3 max-w-[90%]">
                    <h5 className="text-xl md:text-2xl font-black uppercase tracking-wider text-gray-800 text-center">{title}</h5>
                </div>
            </div>
        </>
    );
};

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="flex flex-col bg-white shadow-xl overflow-hidden group h-full rounded-lg">
      <div className="relative">
        <Link to={`/tours/${tour.slug}`} aria-label={`View details for ${tour.title}`}>
          {tour.image ? (
            <img 
              src={tour.image} 
              alt={tour.title} 
              className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full aspect-[4/3] bg-white flex items-center justify-center">
              <h5 className="text-2xl font-black uppercase tracking-wider text-gray-800 text-center px-4" style={{fontFamily: "'Crimson Text', serif"}}>{tour.title}</h5>
            </div>
          )}
          {tour.image && <TornEdgeTitle title={tour.title} />}
        </Link>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-gray-700 mb-3">
            {tour.subtitleIcon}
            <p className="ml-3 text-lg font-medium">{tour.subtitle}</p>
        </div>
        <div className="flex items-center text-gray-700 mb-6">
            <CalendarIcon />
            <p className="ml-3 text-lg font-medium">{tour.date}</p>
        </div>
        <div className="mt-auto">
             <Link
                to={`/tours/${tour.slug}`}
                className="inline-flex items-center bg-[#59815B] text-white font-bold py-3 px-6 uppercase text-sm tracking-wider hover:bg-green-700 transition-colors group"
            >
                Tour Details
                <TourDetailsIcon />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;