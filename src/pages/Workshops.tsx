import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Import workshop images
import droneBuildingWorkshop from '@/assets/workshops/drone-workshop.jpg';
import pcbDesignWorkshop from '@/assets/workshops/pcb.jpeg';
import electronicsWorkshop from '@/assets/workshops/electronics-workshop.jpeg';
import roboticsWorkshop from '@/assets/workshops/robotics-workshop.jpg';
import iotWorkshop from '@/assets/workshops/iot-workshop.jpeg';
import programmingWorkshop from '@/assets/workshops/programming-workshop.jpeg';
import printingWorkshop from '@/assets/workshops/3d-printing-workshop.jpeg';

const upcomingWorkshops = [
  {
    id: 1,
    title: "Drone Building Workshop",
    description: "Learn to build your own drone from scratch. This hands-on workshop covers assembly, calibration, and flight basics.",
    image: droneBuildingWorkshop,
    category: "robotics"
  },
  {
    id: 2,
    title: "PCB Design Masterclass",
    description: "Master the art of PCB design using industry-standard tools. Create your own circuit board by the end of the session.",
    image: pcbDesignWorkshop,
    category: "electronics"
  },
  {
    id: 3,
    title: "Electronics Fundamentals",
    description: "Perfect for beginners, this workshop introduces the fundamentals of electronics and circuit design.",
    image: electronicsWorkshop,
    category: "electronics"
  },
  {
    id: 4,
    title: "Robotics for Beginners",
    description: "Get started with robotics fundamentals, from basic components to simple automated systems.",
    image: roboticsWorkshop,
    category: "robotics"
  },
  {
    id: 5,
    title: "IoT Project Development",
    description: "Develop your own Internet of Things project using sensors, microcontrollers and cloud connectivity.",
    image: iotWorkshop,
    category: "iot"
  }
];

const handleEnquire = (workshop: any) => {
  const message = `Hi Protobots! I'm interested in the "${workshop.title}" workshop. Could I get more information?`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/918904688500?text=${encodedMessage}`, '_blank');
};

const WorkshopCard = ({ workshop }: { workshop: typeof upcomingWorkshops[0] }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
    <div className="relative w-full pb-[66.67%]">
      <img 
        src={workshop.image} 
        alt={workshop.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
    <CardHeader>
      <CardTitle className="text-lg md:text-xl">{workshop.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-600 text-sm md:text-base">{workshop.description}</p>
    </CardContent>
    <CardFooter>
      <Button 
        className="w-full bg-proto-cyan hover:bg-opacity-90"
        onClick={() => handleEnquire(workshop)}
      >
        Enquire Now
      </Button>
    </CardFooter>
  </Card>
);

const Workshops = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-proto-purple to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-proto-navy mb-4">Workshops & Training</h1>
            <p className="text-xl text-gray-700 mb-8">
              Hands-on learning experiences to build your skills in robotics, electronics, and more
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Listings */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="mb-6 md:mb-8">
            <div className="flex justify-center mb-4 md:mb-6 overflow-x-auto">
              <TabsList className="flex-wrap justify-center">
                <TabsTrigger value="all">All Workshops</TabsTrigger>
                <TabsTrigger value="robotics">Robotics</TabsTrigger>
                <TabsTrigger value="electronics">Electronics</TabsTrigger>
                <TabsTrigger value="iot">IoT</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {upcomingWorkshops.map((workshop) => (
                  <WorkshopCard key={workshop.id} workshop={workshop} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="robotics" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {upcomingWorkshops
                  .filter(workshop => workshop.category === 'robotics')
                  .map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {upcomingWorkshops
                  .filter(workshop => workshop.category === 'electronics')
                  .map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="iot" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {upcomingWorkshops
                  .filter(workshop => workshop.category === 'iot')
                  .map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Request Custom Workshop */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-proto-navy mb-4">Request a Custom Workshop</h2>
            <p className="text-lg text-gray-700 mb-8">
              Need specialized training for your team or organization? We can design custom workshops tailored to your specific requirements.
            </p>
            <Button 
              className="bg-proto-orange hover:bg-opacity-90"
              onClick={() => {
                const message = "Hi Protobots! I'm interested in organizing a custom workshop. Can we discuss the details?";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/918904688500?text=${encodedMessage}`, '_blank');
              }}
            >
              Request Custom Workshop
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
