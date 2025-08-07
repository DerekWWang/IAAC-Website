"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Subteams from "../components/subteams";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        <Navbar />
        
        {/* Interactive dot background */}
        <div className="dot-background absolute inset-0 opacity-20"></div>
        
        {/* Interactive dots that respond to mouse */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 2000 }, (_, i) => {
            const x = (i % 50) * 30;
            const y = Math.floor(i / 50) * 30;
            const distance = Math.sqrt(
              Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
            );
            const brightness = Math.max(0, 1 - distance / 200);
            
            return (
              <div
                key={i}
                className="dot absolute w-1 h-1 bg-gray-500 rounded-full"
                style={{
                  left: x,
                  top: y,
                  opacity: 0.1 + brightness * 0.3,
                  transform: `scale(${1 + brightness * 0.5})`,
                }}
              />
            );
          })}
        </div>
        
        {/* Club name in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-2xl font-light text-white mb-4 tracking-wide">
              University of Washington
            </h1>
            <h2 className="text-xl md:text-4xl font-bold text-gray-300 tracking-wide">
              Institute for Advanced Aeronautical Concepts
            </h2> 
          </div>
        </div>
      </div>
      <Subteams />
    </div>
  );
}
