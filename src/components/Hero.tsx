import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

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
      </div>
    </section>
  );
};

export default Hero;