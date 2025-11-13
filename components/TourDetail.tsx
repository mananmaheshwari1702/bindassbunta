import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Tour } from '../types';
import Header from './Header';
import Footer from './Footer';
import Founder from './Founder';
import ImageGallery from './ImageGallery';
import HighlightedText from './HighlightedText';

interface TourDetailProps {
    tour: Tour;
}

// Re-usable torn edge box for titles
const TornEdgeTitle = ({ title }: { title: string }) => {
    const svgBeforeEncoded = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 100' preserveAspectRatio='none'%3E%3Cpath d='M30 0 L0 0 L2 5 L0 10 L3 15 L0 20 L4 25 L0 30 L5 35 L0 40 L6 45 L0 50 L7 55 L0 60 L6 65 L0 70 L5 75 L0 80 L4 85 L0 90 L3 95 L0 100 L30 100 Z' fill='white'/%3E%3C/svg%3E")`;
    const svgAfterEncoded = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 100' preserveAspectRatio='none'%3E%3Cpath d='M0 0 L30 0 L28 5 L30 10 L27 15 L30 20 L26 25 L30 30 L25 35 L30 40 L24 45 L30 50 L23 55 L30 60 L24 65 L30 70 L25 75 L30 80 L26 85 L30 90 L27 95 L30 100 L0 100 Z' fill='white'/%3E%3C/svg%3E")`;

    return (
        <>
            <style>{`
              .torn-edge-box::before { content: ''; position: absolute; top: 0; width: 30px; height: 100%; background-repeat: no-repeat; background-size: 100% 100%; left: -29px; background-image: ${svgBeforeEncoded}; }
              .torn-edge-box::after { content: ''; position: absolute; top: 0; width: 30px; height: 100%; background-repeat: no-repeat; background-size: 100% 100%; right: -29px; background-image: ${svgAfterEncoded}; background-position: right; }
            `}</style>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative torn-edge-box bg-white px-5 py-3">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center whitespace-nowrap">{title}</h2>
                </div>
            </div>
        </>
    );
};

// --- Icons ---
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#59815B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#59815B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#59815B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MapMarkerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#59815B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ArrowIcon = ({ className = '' }: { className?: string }) => <svg className={`h-6 w-6 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};


export default function TourDetail({ tour }: TourDetailProps) {
    const [currentSnapshot, setCurrentSnapshot] = useState(0);
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const handleBack = () => {
        // react-router manages history state. If idx is 0, we are at the start of the history stack.
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/#curated-adventures', { replace: true }); // Fallback to tours section on home page.
        }
    };

    const snapshotCount = tour.tripSnapshot?.length || 0;
    const itemsPerView = isMobile ? 1 : 2;
    const canNavigate = snapshotCount > itemsPerView;
    const maxSnapshotIndex = canNavigate ? snapshotCount - itemsPerView : 0;

    const nextSnapshot = () => {
        if (!canNavigate) return;
        setCurrentSnapshot(prev => (prev >= maxSnapshotIndex ? 0 : prev + 1));
    }
    const prevSnapshot = () => {
        if (!canNavigate) return;
        setCurrentSnapshot(prev => (prev === 0 ? maxSnapshotIndex : prev - 1));
    }
    
    return (
        <>
            <Header />
            <main>
                <section className="relative h-[60vh] w-full">
                    <img src={tour.heroImage || tour.image} alt={tour.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30" />
                    <TornEdgeTitle title={tour.title} />
                </section>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center text-gray-600 hover:text-[#59815B] font-semibold group mb-8"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                         Back to All Tours
                    </button>

                    <div className="bg-[#ebebeb] rounded-lg p-6 md:p-8 mb-16">
                        {tour.price && (
                            <div className="bg-[#59815B] text-white p-4 rounded-t-lg flex flex-col md:flex-row justify-between items-start md:items-end">
                                <div>
                                    <p className="text-lg">Price</p>
                                    <p className="text-4xl font-bold">INR {tour.price.toLocaleString('en-IN')}</p>
                                </div>
                                {tour.taxesText && <p className="text-right text-sm mt-2 md:mt-0">per person<br/>({tour.taxesText})</p>}
                            </div>
                        )}
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                           <div className="flex items-center"><CalendarIcon /> <span>{tour.date}</span></div>
                           {tour.duration && <div className="flex items-center"><ClockIcon /> <span>{tour.duration}</span></div>}
                           <div className="flex items-center"><InfoIcon /> <span>{tour.subtitle}</span></div>
                           {tour.locations && <div className="flex items-center"><MapMarkerIcon /> <span>{tour.locations}</span></div>}
                        </div>
                         <a href="#" className="mt-6 block w-full bg-[#59815B] text-white text-center font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105">
                           Sign up for this tour!
                         </a>
                    </div>
                    
                    {/* Trip Snapshot */}
                    {tour.tripSnapshot && snapshotCount > 0 && (
                        <div className="text-center mb-16">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                                Trip <HighlightedText>Snapshot</HighlightedText>
                            </h3>
                            <div className="relative">
                                <div className="overflow-hidden">
                                  <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSnapshot * (100 / itemsPerView)}%)` }}>
                                        {tour.tripSnapshot.map((snapshot, index) => (
                                            <div key={index} className="w-full md:w-1/2 flex-shrink-0 p-4">
                                                <img src={snapshot.image} alt={snapshot.title} className="w-full h-80 object-cover rounded-lg shadow-lg mb-4" />
                                                <h6 className="text-xl font-bold text-gray-800">{snapshot.title}</h6>
                                                <p className="text-gray-600">{snapshot.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {canNavigate && (
                                    <>
                                        <button onClick={prevSnapshot} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-all">
                                            <ArrowIcon className="transform rotate-180 text-gray-700"/>
                                        </button>
                                        <button onClick={nextSnapshot} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition-all">
                                            <ArrowIcon className="text-gray-700"/>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Itinerary */}
                    {tour.itinerary && tour.itinerary.length > 0 && (
                         <div className="text-center my-16">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                                Trip <HighlightedText>Itinerary</HighlightedText>
                            </h3>
                            <div className="space-y-12">
                                {tour.itinerary.map((day, index) => (
                                    <div key={day.day} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="w-full md:w-1/2">
                                            <img src={day.image} alt={day.title} className="w-full h-96 object-cover rounded-lg shadow-xl"/>
                                        </div>
                                        <div className="w-full md:w-1/2 text-left">
                                            <p className="text-2xl font-bold text-[#59815B]">Day {day.day}</p>
                                            <h4 className="text-3xl font-bold text-gray-800 mb-2">{day.title}</h4>
                                            <p className="text-sm text-gray-500 mb-4">{day.date}</p>
                                            <p className="text-gray-600 leading-relaxed">{day.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Pricing */}
                    {(tour.inclusions && tour.inclusions.length > 0) || (tour.exclusions && tour.exclusions.length > 0) ? (
                        <div className="my-16">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
                                Pricing <HighlightedText>Details</HighlightedText>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {tour.inclusions && tour.inclusions.length > 0 && (
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                                        {tour.inclusions.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                )}
                                {tour.exclusions && tour.exclusions.length > 0 && (
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="text-2xl font-bold text-gray-800 mb-4">What's Not Included</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                                        {tour.exclusions.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                )}
                            </div>
                        </div>
                    ) : null}

                    {/* Hotels */}
                     {tour.hotels && tour.hotels.length > 0 && (
                        <div className="my-16 text-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                                Hotel <HighlightedText>Snapshot</HighlightedText>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                                {tour.hotels.map((hotel, i) => (
                                    <div key={i}>
                                        <h5 className="text-xl font-bold text-gray-800 mb-4">{hotel.name}</h5>
                                        <div className="grid grid-cols-2 gap-4">
                                            <img src={hotel.images[0]} alt={hotel.name} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                                            <img src={hotel.images[1]} alt={hotel.name} className="w-full h-64 object-cover rounded-lg shadow-lg" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                     )}

                </div>
                
                <Founder />
                <ImageGallery />
            </main>
            <Footer />
        </>
    );
}