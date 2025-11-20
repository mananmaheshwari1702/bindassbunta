import React from 'react';
import HighlightedText from './HighlightedText';

export default function Founder() {
    return (
        <section id="founder" className="py-16 sm:py-24 bg-[#F4F4F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Meet the <HighlightedText>Founder</HighlightedText>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="overflow-hidden rounded-lg shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                            alt="Sahil, Founder of BindaasBunta"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-gray-600 text-lg space-y-4">
                        <p>Hi, I am Sahil – the founder of <strong className="text-gray-900">BindaasBunta</strong>.</p>
                        <p>Born and raised in Delhi (India), I am a marketer by profession – having spent the last 9 years building multi-million dollar brands across markets in Asia including India, Pakistan, Nepal, Bangladesh, Sri Lanka, Singapore, Philippines, Indonesia, Thailand, Malaysia, Australia and New Zealand.</p>
                        <p>Travel is my hobby, first love, and everything in between. While I am, almost always traveling myself, I have started to feel an innate desire of bringing the joy of travel to everyone around me.</p>
                        <p><strong className="text-gray-900">BindaasBunta</strong> is my passion project and, over the next few months, I plan to take people of all age groups along in my travels. Each trip with <strong className="text-gray-900">BindaasBunta</strong> will be out of the ordinary, filled with experiences and memories to last a lifetime.</p>
                        <p>Trust me, come along!</p>
                        <div className="pt-4 text-base space-y-1">
                            <p>🌏 <strong className="text-gray-900">Countries Traveled:</strong> 28/195</p>
                            <p>🇮🇳 <strong className="text-gray-900">Indian States, UTs Traveled:</strong> 16/28, 6/8</p>
                            <p>❤️ <strong className="text-gray-900">Favourite Travel Memory:</strong> Camper van road-trip across New Zealand</p>
                            <p>⬅️ <strong className="text-gray-900">Last Trip:</strong> Kyrgyzstan, Apr 2025</p>
                            <p>➡️ <strong className="text-gray-900">Next Trip:</strong> Spain, Aug 2025</p>
                            <p>📍 <strong className="text-gray-900">Currently based in:</strong> Singapore</p>
                            <p>🏠 <strong className="text-gray-900">Home:</strong> Gurgaon, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
