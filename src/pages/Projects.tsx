
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Solar-Powered Rover",
      description: "An autonomous rover that uses solar power for operation. Built with recycled materials and advanced electronics.",
      image: "/lovable-uploads/ed96b7d4-61e2-4b21-a0b6-d1b3f6427c88.png",
      tags: ["robotics", "solar", "automation"]
    },
    {
      id: 2,
      title: "Drone Delivery System",
      description: "A prototype drone designed for small package deliveries with automated route planning and obstacle avoidance.",
      image: "/lovable-uploads/7b54e5c2-fd46-423a-950f-21955f26305c.png",
      tags: ["drone", "delivery", "electronics"]
    },
    {
      id: 3,
      title: "Smart Irrigation Controller",
      description: "IoT-based irrigation system that monitors soil moisture and weather conditions to optimize water usage.",
      image: "/lovable-uploads/5466f83f-4a34-430e-9caf-1b6322ada408.png",
      tags: ["iot", "agriculture", "automation"]
    },
    {
      id: 4,
      title: "Robotic Spider",
      description: "A multi-legged robot inspired by arachnids, featuring advanced motion algorithms and adaptable terrain navigation.",
      image: "/lovable-uploads/abe14db0-4252-4aa4-861f-9c47f2201058.png",
      tags: ["robotics", "biomimicry"]
    },
    {
      id: 5,
      title: "Electric Scooter Conversion",
      description: "Converting conventional scooters to electric power with custom battery packs and motor controllers.",
      image: "/lovable-uploads/01cb8c6b-e9c7-4de4-a3cf-f1c55a9a3a19.png",
      tags: ["ev", "conversion", "electronics"]
    },
    {
      id: 6,
      title: "Autonomous Water Quality Monitor",
      description: "An IoT device for monitoring water quality parameters in lakes and rivers with real-time data transmission.",
      image: "/lovable-uploads/eecb036d-e342-43d8-a2ee-c351429fbd81.png",
      tags: ["iot", "environmental", "sensors"]
    }
  ];

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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-proto-purple px-3 py-1 rounded-full text-sm text-proto-navy"
                      >
                        {tag}
                      </span>
                    ))}
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
                const message = "Hi Protobots! I have a project idea that I'd like to discuss with you.";
                window.open(`https://wa.me/qr/PHY6KG77QAUTD1?text=${encodeURIComponent(message)}`, '_blank');
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
