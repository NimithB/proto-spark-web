
import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Laptop, 
  Drill,
  Projector, 
  Home, 
  Wrench, 
  BookOpen
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Electronics Components",
      description: "High-quality components for your electronics projects, from sensors to microcontrollers.",
      icon: <Laptop size={40} />,
      bgColor: "bg-proto-cyan"
    },
    {
      title: "3D Printing Services",
      description: "Turn your ideas into physical prototypes with our professional 3D printing services.",
      icon: <Drill size={40} />,
      bgColor: "bg-proto-orange"
    },
    {
      title: "Robotics Workshops",
      description: "Learn robotics through hands-on workshops led by experienced engineers.",
      icon: <Wrench size={40} />,
      bgColor: "bg-green-500"
    },
    {
      title: "PCB Design",
      description: "Professional PCB design services to bring your electronics projects to life.",
      icon: <Laptop size={40} />,
      bgColor: "bg-purple-500"
    },
    {
      title: "Drone Workshops",
      description: "Build and fly your own drone with our specialized workshop programs.",
      icon: <Projector size={40} />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Workspace Rentals",
      description: "Fully equipped workspace for your projects and prototyping needs.",
      icon: <Home size={40} />,
      bgColor: "bg-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive tech solutions to bring your innovative ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
