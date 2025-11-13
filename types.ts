import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
}

export interface TourSnapshot {
  image: string;
  title: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface HotelInfo {
    name: string;
    images: string[];
}

export interface Tour {
  image?: string;
  title: string;
  subtitle: string;
  subtitleIcon: React.ReactNode;
  date: string;
  slug: string; // for routing
  showWhatsAppIcon?: boolean;
  heroImage?: string;
  price?: number;
  taxesText?: string;
  duration?: string;
  locations?: string;
  tripSnapshot?: TourSnapshot[];
  itinerary?: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  hotels?: HotelInfo[];
}