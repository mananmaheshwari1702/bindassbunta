import React from 'react';
import { FEATURES } from '../constants';

export default function Features() {
    return (
        <section className="py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-4">{feature.icon}</div>
                            <h6 className="font-semibold text-gray-700 text-lg md:text-xl">{feature.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}