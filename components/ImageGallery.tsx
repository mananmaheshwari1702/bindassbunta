import React from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_IMAGES } from '../constants';
import HighlightedText from './HighlightedText';

export default function ImageGallery() {
    // Duplicate images for a seamless loop effect
    const extendedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                    When are you travelling with <HighlightedText>BindaasBunta?</HighlightedText>
                </h2>
            </div>

            <div className="relative w-full overflow-hidden group">
                <style>
                    {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            animation: scroll 60s linear infinite;
                        }
                    `}
                </style>
                <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                    {extendedImages.map((src, index) => (
                        <div key={index} className="flex-shrink-0 w-64 h-96 md:w-80 md:h-[480px] mx-4 rounded-lg overflow-hidden shadow-xl">
                            <img 
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
             <div className="text-center mt-12">
                <Link
                    to="/#curated-adventures"
                    className="inline-block bg-[#59815B] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105"
                >
                    Curated Adventures
                </Link>
            </div>
        </section>
    );
}