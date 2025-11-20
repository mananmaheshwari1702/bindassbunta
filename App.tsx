import React, { useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UpcomingTours from './components/UpcomingTours';
import PersonalisedToursCTA from './components/PersonalisedToursCTA';
import Founder from './components/Founder';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import TourDetail from './components/TourDetail';
import { TOURS } from './constants';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-[#F4F4F2]">
          <Features />
        </div>
        <UpcomingTours />
        <PersonalisedToursCTA />
        <Founder />
        <ImageGallery />
      </main>
      <Footer />
    </>
  );
};


const TourDetailPage = () => {
  const { slug } = useParams();
  const tour = TOURS.find(t => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tour) {
    // A simple fallback for tours that are not found
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Tour not found</h1>
      </div>
    );
  }

  return <TourDetail tour={tour} />;
};

export default function App() {
  return (
    <div className="bg-white antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours/:slug" element={<TourDetailPage />} />
        </Routes>
        <WhatsAppButton />
        <ScrollToTopButton />
    </div>
  );
}