import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Import project images
import agricultureRobot from '@/assets/projects/agriculture robot.jpg';
import medicalDrone from '@/assets/projects/drone_for_medi_purpose.jpg';
import solarBike from '@/assets/projects/e-Bike_solar.jpg';
import disasterRobot from '@/assets/projects/Multi-Agent Robotic System for Disaster Relief.jpg';
import hybridConversion from '@/assets/projects/petrol_to_hybrid.jpg';
import quadcopter from '@/assets/projects/Quadcopter.jpg';
import robot from '@/assets/projects/robot.jpg';
import scorpian from '@/assets/projects/scorpian.jpg';
import seedSowing from '@/assets/projects/seed_sowing.jpg';

const projectItems = [
  {
    id: "agriculture-robot",
    title: "Agriculture Robot",
    image: agricultureRobot,
    description: "Autonomous robot designed for agricultural applications and farming automation.",
    category: "robotics"
  },
  {
    id: "medical-drone",
    title: "Medical Purpose Drone",
    image: medicalDrone,
    description: "Specialized drone system for medical supply delivery and emergency response.",
    category: "drones"
  },
  {
    id: "solar-bike",
    title: "Solar E-Bike",
    image: solarBike,
    description: "Electric bicycle with integrated solar charging capabilities.",
    category: "sustainable"
  },
  {
    id: "disaster-relief",
    title: "Multi-Agent Disaster Relief System",
    image: disasterRobot,
    description: "Coordinated robotic system for disaster response and relief operations.",
    category: "robotics"
  },
  {
    id: "hybrid-conversion",
    title: "Petrol to Hybrid Conversion",
    image: hybridConversion,
    description: "Vehicle conversion project from petrol to hybrid power system.",
    category: "automotive"
  },
  {
    id: "quadcopter",
    title: "Quadcopter",
    image: quadcopter,
    description: "Custom-built quadcopter drone for aerial applications.",
    category: "drones"
  },
  {
    id: "robot",
    title: "General Purpose Robot",
    image: robot,
    description: "Versatile robotic platform for various applications.",
    category: "robotics"
  },
  {
    id: "scorpian",
    title: "Scorpion Robot",
    image: scorpian,
    description: "Bio-inspired robotic design based on scorpion movement patterns.",
    category: "robotics"
  },
  {
    id: "seed-sowing",
    title: "Automated Seed Sowing",
    image: seedSowing,
    description: "Automated system for precise and efficient seed sowing operations.",
    category: "agriculture"
  }
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-proto-purple to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-proto-navy mb-4">Innovation Projects</h1>
            <p className="text-xl text-gray-700 mb-8">
              Explore our latest innovations and tech projects that push the boundaries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid - Updated for responsive images */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectItems.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative w-full pb-[66.67%]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-proto-purple px-3 py-1 rounded-full text-sm text-proto-navy">
                      {project.category}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-proto-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project Idea?</h2>
            <p className="text-xl mb-8">
              We love collaborating on innovative tech projects. Get in touch to discuss your ideas!
            </p>
            <button 
              className="btn-primary bg-proto-orange hover:bg-opacity-90"
              onClick={() => {
                const message = `Hi Protobots!
I have a project idea that I'd like to discuss with you.
Type: Project Collaboration
Category: Innovation/Tech
Looking forward to hearing from you!`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/918904688500?text=${encodedMessage}`, '_blank');
              }}
            >
              Discuss Your Idea
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
