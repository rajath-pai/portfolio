import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Palette, ArrowRight } from 'lucide-react';

export default function ComingSoon() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Software Engineer",
    "Product Designer", 
    "Full-Stack Developer",
    "Technical Lead"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Portfolio
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            
            {/* Dynamic role text */}
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300">
                <span className="text-white font-semibold">Experienced </span>
                <span className="inline-block transition-all duration-500 text-purple-300 font-semibold">
                  {roles[currentRole]}
                </span>
              </p>
            </div>
          </div>

          {/* Experience highlight */}
          <div className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-purple-400" />
                <span className="text-lg">8+ Years Engineering</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-600"></div>
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-pink-400" />
                <span className="text-lg">Design & Development</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-600"></div>
              <div className="text-lg">
                <span className="text-cyan-400 font-semibold">Cisco</span> • <span className="text-cyan-400 font-semibold">HPE</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative engineering and thoughtful design. 
            Currently building something amazing to showcase my journey and skills.
          </p>

          {/*
          {/* Email notification *}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                Notify Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div> */}

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/rajath-pai/" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110" target="_blank">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rajath-pai-k/" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110" target="_blank">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rajathpai93@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110" target="_blank">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Progress indicator */}
          <div className="mt-16 max-w-xs mx-auto">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>25%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-12 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-2000"></div>
    </div>
  );
}