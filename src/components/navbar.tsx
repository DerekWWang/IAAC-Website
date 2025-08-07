"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full h-20 text-white sticky top-0 z-50 border-b border-white transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
        <div>
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="IAAC Logo" 
              width={200} 
              height={80} 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <div className="flex space-x-8 items-center">
          <div>
            <Link href="/" className="hover:underline transition-all duration-200">Home</Link>
          </div>
          <div>
            <Link href="/about" className="hover:underline transition-all duration-200">About</Link>
          </div>
          <div>
            <Link href="/subteams" className="hover:underline transition-all duration-200">Subteams</Link>
          </div>
          <div>
            <Link href="/sponsors" className="hover:underline transition-all duration-200">Sponsors</Link>
          </div>
          <div>
            <Link href="/join" className="hover:underline transition-all duration-200">Join Us!</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
