import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-widest">
            Welcome to the Future of Living
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
            Managing your <br />
            <span className="text-indigo-600">home</span> just got <br /> 
            a whole lot smarter.
          </h1>
          <p className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
            All-in-one portal for bill payments, facility bookings, and instant support. 
            Designed for the residents of tomorrow.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/signup" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:-translate-y-1 transition-all">
              Register Property
            </Link>
            <Link to="/about" className="font-bold text-gray-900 border-b-2 border-indigo-600 pb-1">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100 rounded-3xl rotate-3"></div>
          <img 
            src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80" 
            alt="Modern Society" 
            className="relative rounded-3xl shadow-2xl z-10 w-full object-cover h-[500px]"
          />
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Members', value: '1,200+' },
            { label: 'Facilities', value: '15+' },
            { label: 'Support Speed', value: '24/7' },
            { label: 'Digital Bills', value: '100%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-indigo-600">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-500 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}