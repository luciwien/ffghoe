// components/GalleryDispatcher.js
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import createImageUrlBuilder from '@sanity/image-url';

const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
});

const urlFor = (source) => builder.image(source);

export default function GalleryDispatcher({ data }) {
  if (!data || !data.images || data.images.length === 0) return null;

  const { layout, images } = data;
  const carouselRef = useRef(null);
  
  // Lightbox State Management
  const [activeIdx, setActiveIdx] = useState(null);

  // Close lightbox when 'Escape' key is pressed
  useEffect(() => {
    if (activeIdx === null) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') handleLightboxNav('next');
      if (e.key === 'ArrowLeft') handleLightboxNav('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  // Carousel manual navigation track shifting
  const handleManualDrive = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const slideShiftAmount = container.clientWidth * 0.75; 

    container.scrollBy({
      left: direction === 'prev' ? -slideShiftAmount : slideShiftAmount,
      behavior: 'smooth',
    });
  };

  // Fullscreen Lightbox keyboard/arrow navigation logic
  const handleLightboxNav = (direction) => {
    if (direction === 'next') {
      setActiveIdx((prev) => (prev + 1) % images.length);
    } else {
      setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* OPTION A: CAROUSEL presentation wrapper                              */}
      {/* ========================================================================= */}
      {layout === 'carousel' && (
        <div className="relative w-full max-w-5xl mx-auto group/gallery">
          <button
            onClick={() => handleManualDrive('prev')}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-3 rounded-full bg-white/95 border border-slate-200 text-slate-800 shadow-xl shadow-slate-900/5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 md:opacity-0 md:group-hover/gallery:opacity-100"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => handleManualDrive('next')}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-3 rounded-full bg-white/95 border border-slate-200 text-slate-800 shadow-xl shadow-slate-900/5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 md:opacity-0 md:group-hover/gallery:opacity-100"
            aria-label="Next Slide"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-none">
            {images.map((img, idx) => (
              <div
                key={img._key || idx}
                onClick={() => setActiveIdx(idx)}
                className="relative w-[88%] md:w-[75%] shrink-0 aspect-[16/10] snap-center overflow-hidden rounded-2xl bg-slate-100 shadow-md border border-slate-100 cursor-zoom-in"
              >
                <Image
                  src={urlFor(img).width(1200).height(750).fit('crop').url()}
                  alt={img.alt || 'Gallery carousel presentation slide'}
                  fill
                  sizes="(max-width: 768px) 88vw, 75vw"
                  placeholder={img.asset?.metadata?.lqip ? 'blur' : 'empty'}
                  blurDataURL={img.asset?.metadata?.lqip}
                  className="object-cover select-none pointer-events-none"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPTION B: GRID presentation wrapper                                  */}
      {/* ========================================================================= */}
      {layout !== 'carousel' && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, idx) => (
            <div
              key={img._key || idx}
              onClick={() => setActiveIdx(idx)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-zoom-in"
            >
              <Image
                src={urlFor(img).width(600).height(600).fit('crop').url()}
                alt={img.alt || 'Gallery grid canvas item'}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                placeholder={img.asset?.metadata?.lqip ? 'blur' : 'empty'}
                blurDataURL={img.asset?.metadata?.lqip}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* CINEMATIC FULLSCREEN LIGHTBOX MODAL                                       */}
      {/* ========================================================================= */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md select-none animate-fadeIn">
          
          {/* Top Control Bar: Close indicator */}
          <div className="absolute top-4 right-4 z-[10000] flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-400 tracking-wider">
              {activeIdx + 1} / {images.length}
            </span>
            <button
              onClick={() => setActiveIdx(null)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
              aria-label="Close fullscreen view"
            >
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox: Left Drive Arrow */}
          <button
            onClick={() => handleLightboxNav('prev')}
            className="absolute left-4 top-1/2 z-[10000] -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all active:scale-90"
            aria-label="Previous fullscreen image"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Lightbox: Right Drive Arrow */}
          <button
            onClick={() => handleLightboxNav('next')}
            className="absolute right-4 top-1/2 z-[10000] -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all active:scale-90"
            aria-label="Next fullscreen image"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Fullscreen High-Resolution Image Canvas container */}
          <div className="relative w-full max-w-7xl h-[80vh] px-12 flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={urlFor(images[activeIdx]).width(1920).fit('max').url()}
                alt={images[activeIdx].alt || 'Fullscreen expanded presentation asset'}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            
            {/* Contextual Alt Caption Track */}
            {images[activeIdx].alt && (
              <p className="mt-4 text-center text-sm font-medium text-slate-300 max-w-2xl px-6">
                {images[activeIdx].alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}