'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Music, Radio, Calendar, Zap, Instagram, Youtube, Globe, ChevronDown, Play, Pause, Volume2, Menu, X,
  ArrowRight, Sparkles, TrendingUp, Users, Mail, MapPin, Send, Download, Star, Award, Headphones, Mic2,
  Disc3, Speaker
} from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  isRed: boolean;
}

const DJMagik254: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'music' | 'events' | 'contact'>('home');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse position listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.45 + 0.25,
        isRed: Math.random() > 0.65,
      });
    }

    let running = true;
    const animate = () => {
      if (!running) return;
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isRed
          ? `rgba(220, 38, 38, ${p.opacity})`
          : `rgba(255,255,255,${p.opacity * 0.35})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // -----------------------------
  // Data
  // -----------------------------

  const services = [
    { icon: Music, title: 'DJ Performances', desc: 'High-energy sets across all genres', color: 'from-red-600 to-red-800' },
    { icon: Radio, title: 'A&R Services', desc: 'Artist & Repertoire development', color: 'from-red-700 to-red-900' },
    { icon: Calendar, title: 'Event Curation', desc: 'Full-scale event production', color: 'from-red-800 to-black' },
    { icon: Zap, title: 'AI Innovation', desc: 'Tech integration in entertainment', color: 'from-black to-red-900' },
  ];

  const stats = [
    { label: 'YouTube', value: '129+', sublabel: 'Subscribers', Icon: Youtube },
    { label: 'Instagram', value: '1.1K', sublabel: 'Followers', Icon: Instagram },
    { label: 'Content', value: '27+', sublabel: 'Videos', Icon: TrendingUp },
    { label: 'Events', value: '50+', sublabel: 'Curated', Icon: Users },
  ];

  const videos = [
    { id: 1, title: 'Amapiano Heat Mix 2024', views: '2.5K', duration: '45:32' },
    { id: 2, title: 'Afrobeats Summer Session', views: '1.8K', duration: '38:15' },
    { id: 3, title: 'EDM Festival Set', views: '3.2K', duration: '52:40' },
    { id: 4, title: 'Hip Hop Classics Remix', views: '1.5K', duration: '41:22' },
    { id: 5, title: 'Dancehall Vibes', views: '2.1K', duration: '35:18' },
    { id: 6, title: 'Gengetone Takeover', views: '4.3K', duration: '48:55' },
  ];

  const upcomingEvents = [
    { date: 'Nov 15', title: 'VibaNation Festival', location: 'Nairobi', type: 'Festival' },
    { date: 'Nov 22', title: 'Private Corporate Event', location: 'Westlands', type: 'Corporate' },
    { date: 'Dec 05', title: 'Club Residency', location: 'Kilimani', type: 'Club' },
    { date: 'Dec 24', title: 'Christmas Rave', location: 'Karen', type: 'Special' },
  ];

  const testimonials = [
    { name: 'Sarah K.', role: 'Event Organizer', text: 'DJ Magik transformed our corporate event into an unforgettable experience!' },
    { name: 'Mike T.', role: 'Club Manager', text: 'Consistently delivers incredible sets. Our best-performing resident DJ.' },
    { name: 'Linda M.', role: 'Wedding Client', text: 'Made our wedding reception absolutely magical. Everyone was dancing!' },
  ];

  const NAV_ORDER = ['home', 'about', 'music', 'events', 'contact'] as const;

  // ---------------------------------
  // Render Pages (you already have these)
  // ---------------------------------

  // Keeping your subpages identical — no changes needed.
  // (You can keep your HomePage, MusicPage, EventsPage, AboutPage, ContactPage exactly as you wrote them.)

  // ---------------------------------
  // Render Root
  // ---------------------------------
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-35 pointer-events-none" />

      {/* ... your navigation, main, and footer code unchanged ... */}

      <style>{`
        .chev-bounce {
          animation: chev-bounce 1.6s ease-in-out infinite;
        }
        @keyframes chev-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default DJMagik254;
