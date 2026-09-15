'use client';

import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export interface NewsItem {
  id: number;
  title: string;
  image_url: string | null;
  content: string;
  created_at: Date | string | null;
}

interface NewsSliderProps {
  news: NewsItem[];
}

export default function NewsSlider({ news }: NewsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const cardW = 340 + 24; // card width + gap
    const idx = Math.round(sliderRef.current.scrollLeft / cardW);
    setActiveIndex(idx);
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    const cardW = 340 + 24;
    sliderRef.current.scrollTo({
      left: index * cardW,
      behavior: 'smooth',
    });
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -(340 + 24), behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 340 + 24, behavior: 'smooth' });
  };

  if (!news || news.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
        <p className="text-gray-500 text-sm">Belum ada berita yang dipublikasikan saat ini.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Controls for desktop */}
      <div className="hidden md:flex justify-end gap-2 mb-4">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm transition"
          aria-label="Previous News"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm transition"
          aria-label="Next News"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
        className={`flex overflow-x-auto gap-6 pb-6 snap-x no-scrollbar w-full ${
          isDown ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        {news.map((item) => (
          <div
            key={item.id}
            className="flex-none w-[300px] md:w-[340px] bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 snap-center flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
          >
            {/* Image */}
            <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
              {item.image_url ? (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 pointer-events-none"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                  Foto Berita
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#bf9000]" />
                <span>{formatDate(item.created_at)}</span>
              </div>

              <h3 className="text-lg font-bold mb-2 text-gray-900 leading-snug line-clamp-2 group-hover:text-[#bf9000] transition">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                {item.content}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/baca/${item.id}`}
                  className="text-[#bf9000] font-bold text-sm hover:text-[#a37a00] transition flex items-center gap-1.5 group/link"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition duration-200" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {news.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {news.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-[#bf9000]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
