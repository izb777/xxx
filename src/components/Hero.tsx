import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        ctx.fillStyle = `rgba(0, 245, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Connect particles with lines if they're close enough
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative bg-blue-900 text-white h-screen flex items-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.2 }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-10 w-10 text-teal-400" />
              <h1 className="text-4xl md:text-6xl font-bold">
                STELLAR <span className="text-teal-400">CONSULTING</span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Cybersecurity Excellence & IT Project Management
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Protecting your digital assets with cutting-edge cybersecurity solutions and 
              expert IT project management services. Secure your business, optimize your operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-teal-400 text-blue-900 font-medium rounded-md flex items-center gap-2 hover:bg-teal-300 transition-colors"
              >
                Our Services
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border-2 border-teal-400 text-white font-medium rounded-md hover:bg-teal-400/10 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Premium Glass Effect Shield Logo */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-80 h-80">
              {/* Multiple layered glows for depth - shield shaped */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/40 via-cyan-400/30 to-blue-500/40 blur-3xl animate-pulse" 
                   style={{ clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)' }}></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-purple-400/30 via-pink-300/20 to-teal-300/30 blur-2xl animate-pulse" 
                   style={{ clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)', animationDelay: '1s' }}></div>
              
              {/* Main glass shield container */}
              <div className="relative w-full h-full backdrop-blur-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/10 shadow-2xl border border-white/30 overflow-hidden"
                   style={{ clipPath: 'polygon(50% 0%, 85% 20%, 85% 70%, 50% 100%, 15% 70%, 15% 20%)' }}>
                
                {/* Animated liquid gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-cyan-300/20 via-blue-400/15 to-purple-500/25 animate-spin-slow opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-300/20 via-blue-300/15 to-teal-400/30 animate-pulse opacity-40"></div>
                
                {/* Dynamic floating orbs */}
                <div className="absolute top-8 right-12 w-4 h-4 bg-teal-400/80 rounded-full blur-sm animate-float"></div>
                <div className="absolute bottom-16 left-8 w-3 h-3 bg-cyan-300/70 rounded-full blur-sm animate-float-delayed"></div>
                <div className="absolute top-20 left-16 w-2 h-2 bg-purple-400/60 rounded-full blur-sm animate-bounce"></div>
                <div className="absolute bottom-8 right-8 w-5 h-5 bg-blue-300/50 rounded-full blur-sm animate-float-slow"></div>
                
                {/* Central logo with advanced styling */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="relative">
                    {/* Multiple logo glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/40 via-cyan-300/30 to-white/20 rounded-full blur-2xl w-56 h-56 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-xl w-48 h-48 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                    
                    {/* Circular logo container with mask */}
                    <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-white/20 via-teal-100/10 to-cyan-100/20 backdrop-blur-sm border-2 border-white/40 shadow-2xl">
                      {/* Inner glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-transparent to-cyan-400/20 rounded-full"></div>
                      
                      {/* Logo with circular crop and enhanced effects */}
                      <img 
                        src={logoImg} 
                        alt="Stellar Consulting Logo" 
                        className="relative z-10 w-full h-full object-cover rounded-full filter brightness-125 contrast-115 saturate-110 drop-shadow-[0_0_40px_rgba(0,245,255,0.8)] transform hover:scale-110 transition-all duration-700 hover:brightness-150"
                      />
                      
                      {/* Circular reflection overlay */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-t-full"></div>
                      
                      {/* Inner light rays */}
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm"></div>
                    </div>
                    
                    {/* Rotating light ring around logo */}
                    <div className="absolute inset-0 w-52 h-52 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-2 border-transparent bg-gradient-to-r from-teal-400/60 via-transparent via-transparent to-cyan-400/60 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
                
                {/* Glass reflection and highlights - shield shaped */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 via-white/10 to-transparent"
                     style={{ clipPath: 'polygon(50% 0%, 85% 20%, 85% 50%, 15% 50%, 15% 20%)' }}></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-black/10 to-transparent"
                     style={{ clipPath: 'polygon(50% 100%, 85% 70%, 85% 80%, 15% 80%, 15% 70%)' }}></div>
                
                {/* Prismatic light effect */}
                <div className="absolute top-1/4 right-4 w-1 h-20 bg-gradient-to-b from-pink-300/60 via-cyan-300/60 to-purple-400/60 blur-sm rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/4 left-6 w-1 h-16 bg-gradient-to-b from-teal-300/60 via-blue-300/60 to-cyan-400/60 blur-sm -rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Shield edge highlights */}
                <div className="absolute inset-0 border-2 border-white/20"
                     style={{ clipPath: 'polygon(50% 0%, 85% 20%, 85% 70%, 50% 100%, 15% 70%, 15% 20%)' }}></div>
              </div>
              
              {/* Outer energy shield rings */}
              <div className="absolute inset-0 border-2 border-teal-400/30 animate-spin-slow"
                   style={{ clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)' }}></div>
              <div className="absolute inset-4 border border-cyan-300/20 animate-spin-reverse"
                   style={{ clipPath: 'polygon(50% 0%, 85% 22%, 85% 72%, 50% 100%, 15% 72%, 15% 22%)' }}></div>
              
              {/* Floating energy particles around the shield */}
              <div className="absolute -top-4 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-orbit"></div>
              <div className="absolute top-1/4 -right-4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-orbit-reverse"></div>
              <div className="absolute -bottom-4 left-1/2 w-2.5 h-2.5 bg-purple-400 rounded-full animate-orbit-slow"></div>
              <div className="absolute top-1/3 -left-4 w-1 h-1 bg-blue-300 rounded-full animate-orbit-fast"></div>
              <div className="absolute bottom-1/3 right-2 w-1.5 h-1.5 bg-pink-300 rounded-full animate-float"></div>
              <div className="absolute top-1/2 left-2 w-1 h-1 bg-indigo-300 rounded-full animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;