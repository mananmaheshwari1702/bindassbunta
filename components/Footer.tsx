import React from 'react';
import { Link } from 'react-router-dom';
import HighlightedText from './HighlightedText';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.18 3.854 3.696 2.309 6.95 2.163 8.215 2.105 8.595 2.093 11.8 2.093h.4zm0-2.163C8.734 0 8.349.01 7.072.066c-3.633.166-6.131 2.657-6.297 6.297-.056 1.273-.066 1.657-.066 4.934s.01 3.66.066 4.934c.166 3.633 2.664 6.131 6.297 6.297 1.273.056 1.657.066 4.934.066s3.66-.01 4.934-.066c3.633-.166 6.131-2.664 6.297-6.297.056-1.273.066-1.657.066-4.934s-.01-3.66-.066-4.934c-.166-3.633-2.664-6.131-6.297-6.297C15.466.01 15.081 0 12 0z" />
        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
);

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#1e1e1e] text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-4">
                            <span className="text-3xl font-bold text-white" style={{fontFamily: "'Crimson Text', serif"}}>BindaasBunta</span>
                        </Link>
                    </div>
                    <div className="lg:col-span-2">
                         <p className="font-serif italic text-2xl leading-relaxed text-gray-400">
                           Each trip with BindaasBunta will be out of the ordinary, filled with experiences and <HighlightedText bgColor="bg-[#4A6A4C]" textColor="text-white">memories,</HighlightedText> to last a lifetime.
                        </p>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                       <h6 className="text-white font-semibold">Socials</h6>
                       <a href="https://www.instagram.com/bindaasbunta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                           <InstagramIcon/>
                       </a>
                    </div>
                    <p>© 2025 BindaasBunta <span className="text-gray-500">All Rights Reserved</span></p>
                </div>
            </div>
             <div className="bg-[#1e1e1e] border-t border-gray-700 py-4">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                      <strong>BindaasBunta</strong> ·
                      Phone: <a href="tel:+919810517144" className="hover:text-white">+91 98105 17144</a> ·
                      Email: <a href="mailto:bindaasbunta@gmail.com" className="hover:text-white">bindaasbunta@gmail.com</a>
                 </div>
            </div>
        </footer>
    );
}