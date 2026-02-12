import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  return (
    <header className="fixed top-0 w-full z-50">
      {/* 1. SLIMMER, SUBTLE TICKER */}
      <div className="bg-gray-900 text-gray-300 text-[10px] py-1 tracking-widest uppercase overflow-hidden border-b border-white/10">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-8"><span className="text-indigo-400 font-bold">Notice:</span> Maintenance bills for March are out</span>
          <span className="mx-8"><span className="text-indigo-400 font-bold">Event:</span> Society Meeting this Sunday at 10 AM</span>
        </div>
      </div>

      {/* 2. FLOATING GLASS NAV */}
      <nav className="mx-auto mt-4 max-w-6xl bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 flex justify-between items-center shadow-2xl shadow-indigo-100/50">
        <Link to="/" className="text-xl font-black text-gray-900 tracking-tighter">
          SOCIETY<span className="text-indigo-600">APP</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-gray-500 uppercase tracking-tight">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-[13px] font-bold text-gray-700 px-4">Login</Link>
          <Link to="/signup" className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
            Join Us
          </Link>
        </div>
      </nav>
    </header>
  );
}