
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-proto-purple pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-tech-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="hero-title">
              Innovate. Build. <span className="text-proto-cyan">Prototype.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Bangalore's premier tech innovation hub offering robotics workshops, 
              electronics components, prototyping services, and creative workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services" className="btn-primary flex items-center justify-center gap-2">
                Explore Services <ArrowRight size={18} />
              </a>
              <a href="/contact" className="btn-outline flex items-center justify-center">
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* 3D Drone model */}
              <model-viewer
                src="/models/drone.glb"
                alt="3D Drone Model"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                class="w-full h-80 md:h-96"
                style={{
                  '--poster-color': 'transparent',
                  background: 'transparent',
                }}
              ></model-viewer>
              
              {/* Decorative tech elements */}
              <div className="absolute top-1/4 -left-10 w-16 h-16 bg-proto-cyan rounded-full opacity-20 animate-pulse-glow blur-lg"></div>
              <div className="absolute bottom-1/4 -right-5 w-20 h-20 bg-proto-orange rounded-full opacity-20 animate-pulse-glow blur-lg" style={{ animationDelay: "1s" }}></div>
              
              {/* Tech circuit lines */}
              <div className="absolute top-1/3 -left-20 w-20 h-1 bg-proto-cyan opacity-40 rounded-full"></div>
              <div className="absolute bottom-1/3 -right-20 w-20 h-1 bg-proto-orange opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
