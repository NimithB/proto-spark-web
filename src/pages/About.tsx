import React from 'react';
import Layout from '../components/layout/Layout';

// Import team member images from assets/team directory
import saiVivekImage from '@/assets/team/sai vivek.jpg';
import aishwaryaImage from '@/assets/team/Aishwarya.jpg';
import chandhanaImage from '@/assets/team/chandana.jpg';
import nimithImage from '@/assets/team/Nimith B.jpg';
import aboutHeroImage from '@/assets/hero/about-hero.png';

const About = () => {
  const teamMembers = [
    {
      name: "Sai Vivek",
      role: "Founder",
      bio: "Passionate entrepreneur with expertise in robotics and innovation.",
      image: saiVivekImage
    },
    {
      name: "Aishwarya",
      role: "Co-founder",
      bio: "Electronics specialist with a background in advanced prototyping and development.",
      image: aishwaryaImage
    },
    {
      name: "Chandana",
      role: "Logistics Lead",
      bio: "Expert in supply chain management and workshop coordination.",
      image: chandhanaImage
    },
    {
      name: "Nimith",
      role: "Software Lead",
      bio: "Programming expert specializing in robotics software and embedded systems.",
      image: nimithImage
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-proto-purple to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-proto-navy mb-3">About Protobots</h1>
            <p className="text-lg text-gray-700">
              Building the future through technology and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-proto-navy mb-4">Our Mission</h2>
              <p className="text-base text-gray-700 mb-4 text-justify">
                Our mission is to democratize innovation by making technology hands-on, affordable, and accessible. 
                We empower creators with the tools, mentorship, and environment to learn by building, and to solve 
                real-world problems with confidence.
              </p>
              <div className="space-y-3 mb-4">
                <p className="text-base text-gray-700">We aim to:</p>
                <ul className="list-disc list-inside text-base text-gray-700 pl-4 space-y-1">
                  <li>Bridge the gap between theory and practical skills</li>
                  <li>Enable sustainable and smart innovations</li>
                  <li>Foster a maker culture driven by purpose, not just profit</li>
                </ul>
              </div>
              <p className="text-base text-gray-700 font-medium mb-8">
                At PROTOBOTS, we don't just develop tech—we develop technologists.
              </p>

              <h2 className="text-2xl font-bold text-proto-navy mb-4">Our Story</h2>
              <p className="text-base text-gray-700 mb-4 text-justify">
                PROTOBOTS is a technology-driven startup founded by Sai Vivek Y and Aishwarya S, two engineering 
                innovators united by their passion for building, creating, and problem-solving. What began as an 
                academic journey quickly transformed into a mission to empower the next generation of creators.
              </p>
              <p className="text-base text-gray-700 mb-4 text-justify">
                With over 50+ hands-on projects and 30+ certifications between them, they envisioned PROTOBOTS 
                as a platform where imagination meets implementation — developing practical solutions in fields 
                like robotics, renewable energy, defense, and agriculture.
              </p>
              <p className="text-base text-gray-700 mb-4 text-justify">
                Notable innovations include hybrid electric bikes, vertical axis wind turbines, jammer systems, 
                humanoid robots, and an intelligent multifunctional agricultural robot designed to automate 
                critical farming tasks.
              </p>
              <p className="text-base text-gray-700 text-justify">
                The startup earned international recognition when Sai Vivek and Aishwarya were chosen among 
                India's top 50 student innovators to pitch at Junicorn, a prestigious global startup program 
                in the U.S. There, they represented PROTOBOTS before global investors and participated in the 
                Global AI Summit in Austin, Texas.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={aboutHeroImage} 
                  alt="Robot at Protobots" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-proto-cyan rounded-lg p-4 shadow-lg hidden md:block">
                  <p className="text-white font-medium">Innovation in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-proto-navy mb-4">Our Team</h2>
            <p className="text-lg text-gray-700">
              Meet the passionate experts behind Protobots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-proto-navy mb-1">{member.name}</h3>
                  <p className="text-proto-cyan font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-proto-navy mb-4">Our Values</h2>
            <p className="text-lg text-gray-700">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-proto-cyan">
              <h3 className="text-xl font-bold text-proto-navy mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible, embracing new technologies and methodologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-proto-orange">
              <h3 className="text-xl font-bold text-proto-navy mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe technology education and resources should be available to everyone, regardless of background.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-proto-navy mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a collaborative environment where knowledge sharing and mutual support are encouraged.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-500">
              <h3 className="text-xl font-bold text-proto-navy mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmentally responsible practices in our operations and project designs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-proto-navy mb-3">Quality</h3>
              <p className="text-gray-600">
                We deliver excellence in every aspect of our services, from components to education.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-500">
              <h3 className="text-xl font-bold text-proto-navy mb-3">Hands-on Learning</h3>
              <p className="text-gray-600">
                We believe in practical, experiential learning as the most effective way to develop skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
