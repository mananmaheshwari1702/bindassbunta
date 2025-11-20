import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../constants';
import type { NavLink } from '../types';

// SVGs for the torn edge effect, optimized for the nav items
const svgBeforeEncoded = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 100' preserveAspectRatio='none'%3E%3Cpath d='M30 0 L0 0 L2 5 L0 10 L3 15 L0 20 L4 25 L0 30 L5 35 L0 40 L6 45 L0 50 L7 55 L0 60 L6 65 L0 70 L5 75 L0 80 L4 85 L0 90 L3 95 L0 100 L30 100 Z' fill='white'/%3E%3C/svg%3E")`;
const svgAfterEncoded = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 100' preserveAspectRatio='none'%3E%3Cpath d='M0 0 L30 0 L28 5 L30 10 L27 15 L30 20 L26 25 L30 30 L25 35 L30 40 L24 45 L30 50 L23 55 L30 60 L24 65 L30 70 L25 75 L30 80 L26 85 L30 90 L27 95 L30 100 L0 100 Z' fill='white'/%3E%3C/svg%3E")`;

// SVG Icons
const MenuIcon = () => (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const DesktopNav = () => (
  <nav className="hidden lg:flex items-center justify-between w-full">
    <style>{`
      .torn-nav-link-container .torn-nav-link {
        position: relative;
        background-color: transparent;
        transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
      }
      .torn-nav-link-container .torn-nav-link > span {
        color: white;
        transition: color 0.2s ease-in-out;
      }
      .torn-nav-link-container:hover .torn-nav-link {
        transform: scale(1.05);
        background-color: white;
      }
      .torn-nav-link-container:hover .torn-nav-link > span {
        color: #59815B;
      }
      .torn-nav-link::before,
      .torn-nav-link::after {
        content: '';
        position: absolute;
        top: 0;
        width: 20px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
      .torn-nav-link::before {
        left: -19px;
        background-image: ${svgBeforeEncoded};
      }
      .torn-nav-link::after {
        right: -19px;
        background-image: ${svgAfterEncoded};
        background-position: right;
      }
      .torn-nav-link-container:hover .torn-nav-link::before,
      .torn-nav-link-container:hover .torn-nav-link::after {
        opacity: 1;
      }
    `}</style>
    <div className="flex-shrink-0">
      <Link to="/" className="text-4xl font-bold text-white tracking-tight" style={{fontFamily: "'Crimson Text', serif"}}>
        BindaasBunta
      </Link>
    </div>
    <div className="flex items-center space-x-8">
      {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((link) => (
        <Link key={link.label} to={link.href} className="torn-nav-link-container">
          <div className="torn-nav-link px-6 py-3">
            <span className="font-black text-base uppercase tracking-wider whitespace-nowrap">
              {link.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </nav>
);

const MobileNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <div className="lg:hidden w-full">
    <div className="flex justify-between items-center w-full">
       <Link to="/" className="text-3xl font-bold text-white tracking-tight" style={{fontFamily: "'Crimson Text', serif"}}>
        BindaasBunta
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
        <MenuIcon />
      </button>
    </div>
    {isOpen && (
      <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 mt-2 py-4">
        <div className="flex flex-col items-center space-y-6">
          {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((link) => (
            <Link key={link.label} to={link.href} className="text-white text-lg font-black uppercase tracking-wider" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="bg-transparent text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-24 flex items-center">
          <DesktopNav />
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}