
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Laptop, 
  Drill,
  BookOpen, 
  Home, 
  Wrench, 
  Plane 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Electronics Components",
      description: "High-quality components for your electronics projects, from sensors to microcontrollers.",
      icon: <Laptop size={40} />,
      bgColor: "bg-proto-cyan",
      path: "/equipment"
    },
    {
      title: "3D Printing Services",
      description: "Turn your ideas into physical prototypes with our professional 3D printing services.",
      icon: <Drill size={40} />,
      bgColor: "bg-proto-orange",
      path: "/equipment"
    },
    {
      title: "Robotics Workshops",
      description: "Learn robotics through hands-on workshops led by experienced engineers.",
      icon: <Wrench size={40} />,
      bgColor: "bg-green-500",
      path: "/workshops"
    },
    {
      title: "PCB Design",
      description: "Professional PCB design services to bring your electronics projects to life.",
      icon: <Laptop size={40} />,
      bgColor: "bg-purple-500",
      path: "/projects"
    },
    {
      title: "Drone Workshops",
      description: "Build and fly your own drone with our specialized workshop programs.",
      icon: <Plane size={40} />,
      bgColor: "bg-blue-500",
      path: "/workshops"
    },
    {
      title: "Workspace Rentals",
      description: "Fully equipped workspace for your projects and prototyping needs.",
      icon: <Home size={40} />,
      bgColor: "bg-amber-500",
      path: "/contact"
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

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
            <div 
              key={index}
              className={`service-card relative group cursor-pointer`}
              onClick={() => handleCardClick(service.path)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${service.bgColor} rounded-t-xl`}></div>
              <div className="pt-4">
                <div className="mb-4 text-proto-cyan">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="btn-outline text-sm">
                  Select & Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
