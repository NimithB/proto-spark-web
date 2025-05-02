import React from 'react';
import scorpionBot from '@/assets/projects/scorpian.jpg';
import collabImage from '@/assets/misc/collab.jpg';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="section-title mb-4">Why Choose Protobots</h2>
          <p className="text-gray-600 text-lg">
            We combine innovation, expertise, and a passion for technology
          </p>
        </div>

        {/* Added Collaboration Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={collabImage}
              alt="Collaboration at Protobots" 
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Feature Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={scorpionBot}
                alt="Scorpion Robot at Protobots workspace" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-proto-orange rounded-xl p-4 shadow-lg hidden md:block">
              <p className="text-white font-bold text-xl">Innovation Hub</p>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-8 md:pl-6">
            <div>
              <h3 className="text-2xl font-bold text-proto-navy mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of engineers, designers, and educators passionate about technology and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-proto-navy mb-3">Hands-on Approach</h3>
              <p className="text-gray-600">
                We believe in learning by doing. All our workshops and services are designed with a practical approach.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-proto-navy mb-3">Quality Equipment</h3>
              <p className="text-gray-600">
                Access top-notch equipment and components for your projects and prototyping needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-proto-navy mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Join our growing community of makers, innovators, and technology enthusiasts in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
