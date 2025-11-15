"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Music, Radio, Calendar, Zap, Instagram, Youtube, Globe, ChevronDown, Play, Pause, Volume2, Menu, X, ArrowRight, Sparkles, TrendingUp, Users, Mail, MapPin, Send, Download, Star, Award, Headphones, Mic2 } from 'lucide-react';

const DJMagik254 = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.4 + 0.2,
        isRed: Math.random() > 0.7
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isRed ? `rgba(220, 38, 38, ${p.opacity})` : `rgba(255, 255, 255, ${p.opacity * 0.3})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const services = [
    { icon: Music, title: "DJ Performances", desc: "High-energy sets across all genres" },
    { icon: Radio, title: "A&R Services", desc: "Artist & Repertoire development" },
    { icon: Calendar, title: "Event Curation", desc: "Full-scale event production" },
    { icon: Zap, title: "AI Innovation", desc: "Tech integration in entertainment" }
  ];

  const stats = [
    { label: "YouTube", value: "129+", sublabel: "Subscribers", Icon: Youtube },
    { label: "Instagram", value: "1.1K", sublabel: "Followers", Icon: Instagram },
    { label: "Content", value: "27+", sublabel: "Videos", Icon: TrendingUp },
    { label: "Events", value: "50+", sublabel: "Curated", Icon: Users }
  ];

  const videos = [
    { id: 1, title: "Amapiano Heat Mix 2024", views: "2.5K", duration: "45:32" },
    { id: 2, title: "Afrobeats Summer Session", views: "1.8K", duration: "38:15" },
    { id: 3, title: "EDM Festival Set", views: "3.2K", duration: "52:40" },
    { id: 4, title: "Hip Hop Classics Remix", views: "1.5K", duration: "41:22" },
    { id: 5, title: "Dancehall Vibes", views: "2.1K", duration: "35:18" },
    { id: 6, title: "Gengetone Takeover", views: "4.3K", duration: "48:55" }
  ];

  const upcomingEvents = [
    { date: "Nov 15", title: "VibaNation Festival", location: "Nairobi", type: "Festival" },
    { date: "Nov 22", title: "Private Corporate Event", location: "Westlands", type: "Corporate" },
    { date: "Dec 05", title: "Club Residency", location: "Kilimani", type: "Club" },
    { date: "Dec 24", title: "Christmas Rave", location: "Karen", type: "Special" }
  ];

  const testimonials = [
    { name: "Sarah K.", role: "Event Organizer", text: "DJ Magik transformed our corporate event into an unforgettable experience!" },
    { name: "Mike T.", role: "Club Manager", text: "Consistently delivers incredible sets. Our best-performing resident DJ." },
    { name: "Linda M.", role: "Wedding Client", text: "Made our wedding reception absolutely magical. Everyone was dancing!" }
  ];

  const HomePage = () => (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black z-10" />
        
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <div className="inline-flex items-center mb-6 px-5 py-2.5 bg-red-600/10 border border-red-600/30 rounded-full text-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-white">DJ · A&R · Culture Curator · AI Maverick</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
            <span className="block text-white drop-shadow-2xl">DJ MAGIK</span>
            <span className="block text-red-600 bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">254</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light">
            MR PROFESSIONAL
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Crafting sonic experiences that transcend genres. 
            <span className="text-red-500 font-bold"> Founder @ VibaNation HQ</span> · 
            <span className="text-white font-bold"> BraveTechnologies</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Latest Mix</span>
            </button>
            <button onClick={() => setCurrentPage('events')} className="group px-10 py-5 border-2 border-white hover:bg-white hover:text-black rounded-full font-bold text-lg transition-all flex items-center space-x-3">
              <Calendar className="w-6 h-6" />
              <span>View Events</span>
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, i) => {
              const IconComponent = stat.Icon;
              return (
                <div 
                  key={i} 
                  className="bg-white/5 backdrop-blur-md border border-red-600/20 rounded-2xl p-6 hover:border-red-600 hover:bg-red-600/10 transition-all group cursor-pointer"
                >
                  <div className="text-red-500 mb-3 group-hover:scale-110 transition-transform flex justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-red-500 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.sublabel}</div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-10 h-10 text-red-500" />
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 z-20 bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6">
              <span className="text-white">WHAT I</span>
              <span className="text-red-600"> DO</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-6" />
            <p className="text-gray-400 text-xl">Multi-dimensional creative excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={i} 
                  className="group relative bg-black border-2 border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all cursor-pointer"
                >
                  <IconComponent className="w-10 h-10 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-red-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 z-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative group text-center bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-16 shadow-2xl cursor-pointer">
            <Award className="w-20 h-20 mx-auto mb-8 text-white" />
            <h2 className="text-5xl font-black mb-6 text-white">READY FOR THE MAGIK?</h2>
            <p className="text-2xl mb-10 text-white/90">Book me for your next event</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button onClick={() => setCurrentPage('contact')} className="px-10 py-5 bg-black hover:bg-gray-900 text-white rounded-full font-bold text-lg transition-all flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <span>Book Now</span>
              </button>
              <button onClick={() => setCurrentPage('music')} className="px-10 py-5 bg-white/10 border-2 border-white hover:bg-white hover:text-red-600 rounded-full font-bold text-lg transition-all">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const AboutPage = () => (
    <section className="relative py-32 px-6 z-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">ABOUT</span>
            <span className="text-red-600"> ME</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-red-900/20 to-black border-2 border-red-600/30 rounded-3xl p-12 hover:border-red-600 transition-all">
            <h2 className="text-3xl font-black text-white mb-6">MR PROFESSIONAL</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="hover:text-white transition-colors">
                I'm <span className="text-red-500 font-bold">DJ MAGIK 254</span>, a multi-dimensional creative force in Kenya's entertainment landscape.
              </p>
              <p className="hover:text-white transition-colors">
                As a <span className="text-white font-bold">DJ, A&R, Events & Culture Curator</span>, and <span className="text-white font-bold">AI Maverick</span>, I blend technology with timeless musical experiences.
              </p>
              <p className="hover:text-white transition-colors">
                Founder of <span className="text-red-500 font-bold">VibaNation HQ</span> and <span className="text-white font-bold">BraveTechnologies</span>, pushing boundaries in music and entertainment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all">
              <Star className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Expertise</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 mr-2" /> Multi-Genre DJ Sets
                </li>
                <li className="flex items-center hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 mr-2" /> Artist Development
                </li>
                <li className="flex items-center hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 mr-2" /> Event Production
                </li>
                <li className="flex items-center hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 mr-2" /> Tech Innovation
                </li>
              </ul>
            </div>

            <div className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all">
              <Award className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Ventures</h3>
              <div className="space-y-4">
                <div className="cursor-pointer">
                  <div className="text-red-500 font-bold mb-1 hover:text-red-400 transition-colors">VibaNation HQ</div>
                  <div className="text-gray-400 text-sm hover:text-gray-300 transition-colors">Music & Culture Platform</div>
                </div>
                <div className="cursor-pointer">
                  <div className="text-white font-bold mb-1 hover:text-gray-300 transition-colors">BraveTechnologies</div>
                  <div className="text-gray-400 text-sm hover:text-gray-300 transition-colors">Tech Innovation Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-black text-white mb-10 text-center">TESTIMONIALS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all cursor-pointer"
            >
              <div className="flex text-red-500 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic hover:text-white transition-colors">"{t.text}"</p>
              <div className="text-white font-bold">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const MusicPage = () => (
    <section className="relative py-32 px-6 z-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">MY</span>
            <span className="text-red-600"> MUSIC</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
        </div>

        <div className="bg-gradient-to-br from-red-900/20 to-black border-2 border-red-600/30 rounded-3xl p-10 mb-16 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">NOW PLAYING</h3>
              <p className="text-gray-400">Latest exclusive mix</p>
            </div>
            <Volume2 className="w-10 h-10 text-red-500" />
          </div>

          <div className="flex items-end justify-center space-x-1 h-40 mb-8 bg-black/50 rounded-xl p-4">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 bg-gradient-to-t from-red-600 to-white rounded-full transition-all"
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-red-600/50"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>
          </div>
        </div>

        <h2 className="text-4xl font-black text-white mb-10">FEATURED MIXES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group bg-black border-2 border-white/10 hover:border-red-600 rounded-2xl overflow-hidden transition-all cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-to-br from-red-900/30 to-black flex items-center justify-center">
                <Play className="w-16 h-16 text-white group-hover:scale-125 transition-transform" />
                <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded text-sm font-bold backdrop-blur-sm">{video.duration}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{video.views} views</span>
                  <Headphones className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-red-600/30 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-600 transition-all">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">PRESS KIT</h3>
            <p className="text-gray-400">Download my professional media kit and bio</p>
          </div>
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold flex items-center space-x-3 transition-all">
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </section>
  );

  const EventsPage = () => (
    <section className="relative py-32 px-6 z-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">UPCOMING</span>
            <span className="text-red-600"> EVENTS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
        </div>

        <div className="space-y-6 mb-16">
          {upcomingEvents.map((event, i) => (
            <div 
              key={i} 
              className="group bg-black border-2 border-white/10 hover:border-red-600 rounded-2xl p-8 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start space-x-6 flex-1">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-4 min-w-[80px] text-center group-hover:scale-105 transition-transform shadow-lg shadow-red-600/30">
                    <div className="text-3xl font-black text-white">{event.date.split(' ')[1]}</div>
                    <div className="text-sm font-bold text-white/80">{event.date.split(' ')[0]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/40 rounded-full text-xs font-bold text-red-500 mb-3">{event.type}</div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-red-500 transition-colors">{event.title}</h3>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold transition-all whitespace-nowrap">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-16 text-center">
          <Mic2 className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-black text-white mb-4">BOOK ME FOR YOUR EVENT</h2>
          <p className="text-xl text-white/90 mb-8">Corporate · Weddings · Clubs · Festivals</p>
          <button 
            onClick={() => setCurrentPage('contact')} 
            className="px-10 py-5 bg-black hover:bg-gray-900 text-white rounded-full font-bold text-lg inline-flex items-center space-x-3 transition-all"
          >
            <Send className="w-5 h-5" />
            <span>Request Booking</span>
          </button>
        </div>
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="relative py-32 px-6 z-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-white">GET IN</span>
            <span className="text-red-600"> TOUCH</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto" />
          <p className="text-gray-400 text-xl mt-6">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black border-2 border-red-600/30 rounded-3xl p-10 hover:border-red-600 transition-all">
            <h2 className="text-3xl font-black text-white mb-8">SEND MESSAGE</h2>
            <div className="space-y-6">
              <div>
                <div className="block text-sm font-bold text-gray-400 mb-2">Name</div>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 focus:border-red-600 rounded-xl px-5 py-4 text-white outline-none transition-all" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <div className="block text-sm font-bold text-gray-400 mb-2">Email</div>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 focus:border-red-600 rounded-xl px-5 py-4 text-white outline-none transition-all" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <div className="block text-sm font-bold text-gray-400 mb-2">Message</div>
                <textarea 
                  rows={5} 
                  className="w-full bg-white/5 border border-white/10 focus:border-red-600 rounded-xl px-5 py-4 text-white outline-none resize-none transition-all" 
                  placeholder="Your message..." 
                />
              </div>
              <button 
                type="button" 
                className="w-full px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full font-bold text-lg flex items-center justify-center space-x-3 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all cursor-pointer">
              <Mail className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-black text-white mb-2">Email</h3>
              <a href="mailto:djmagik254@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                djmagik254@gmail.com
              </a>
            </div>

            <div className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all cursor-pointer">
              <Instagram className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-black text-white mb-2">Instagram</h3>
              <a href="https://instagram.com/gk.magik_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                @gk.magik_
              </a>
            </div>

            <div className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all cursor-pointer">
              <Youtube className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-black text-white mb-2">YouTube</h3>
              <a href="https://youtube.com/@djmagik254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                @djmagik254
              </a>
            </div>

            <div className="bg-black border-2 border-white/10 rounded-2xl p-8 hover:border-red-600 transition-all cursor-pointer">
              <Globe className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-black text-white mb-2">Website</h3>
              <a href="https://gkmagik.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                gkmagik.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage />;
      case 'music': return <MusicPage />;
      case 'events': return <EventsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30" />

      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-red-600/50">
              DJ
            </div>
            <div>
              <h1 className="text-xl font-black text-white group-hover:text-red-500 transition-colors">DJ MAGIK 254</h1>
              <p className="text-xs text-gray-400">Mr Professional</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'music', 'events', 'contact'].map(item => (
              <button 
                key={item} 
                onClick={() => setCurrentPage(item)} 
                className={`relative text-sm font-bold transition-colors ${
                  currentPage === item ? 'text-red-500' : 'text-white hover:text-red-400'
                }`}
              >
                {item.toUpperCase()}
                {currentPage === item && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://instagram.com/gk.magik_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@djmagik254" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full text-sm font-bold transition-all"
            >
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-600/20 p-6">
            {['home', 'about', 'music', 'events', 'contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => { setCurrentPage(item); setMenuOpen(false); }} 
                className="block w-full text-left py-3 text-lg font-bold hover:text-red-500 transition-colors"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10">{renderPage()}</main>

      <footer className="relative z-20 border-t border-red-600/20 py-12 px-6 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 hover:text-white transition-colors">
                © 2024 DJ MAGIK 254. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-2">Built with 🔥 by multidimensional excellence</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://instagram.com/gk.magik_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@djmagik254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://gkmagik.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DJMagik254;