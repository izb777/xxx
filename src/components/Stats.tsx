import React, { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const Stat: React.FC<StatProps> = ({ value, label, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let startTimestamp: number | null = null;

    if (!isVisible) return;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);
  }, [value, isVisible, delay]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        <span ref={countRef}>{count}</span>
        {suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value={250} label="Projects Completed" suffix="+" delay={0} />
          <Stat value={100} label="Clients Protected" suffix="%" delay={300} />
          <Stat value={15} label="Years Experience" suffix="+" delay={600} />
          <Stat value={24} label="Expert Consultants" delay={900} />
        </div>
      </div>
    </section>
  );
};

export default Stats;