
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Workshops = () => {
  const upcomingWorkshops = [
    {
      id: 1,
      title: "Drone Building Workshop",
      date: "June 15, 2025",
      description: "Learn to build your own drone from scratch. This hands-on workshop covers assembly, calibration, and flight basics.",
      image: "/lovable-uploads/ff070ae4-d920-402f-833c-1b4b76835799.png",
      category: "robotics"
    },
    {
      id: 2,
      title: "PCB Design Masterclass",
      date: "June 22, 2025",
      description: "Master the art of PCB design using industry-standard tools. Create your own circuit board by the end of the session.",
      image: "/lovable-uploads/c52b0d77-f343-4867-ad37-ee35a907c9d2.png",
      category: "electronics"
    },
    {
      id: 3,
      title: "Introduction to Arduino",
      date: "July 5, 2025",
      description: "Perfect for beginners, this workshop introduces the fundamentals of Arduino programming and basic electronics.",
      image: "/lovable-uploads/952f4c03-58a3-419a-99e6-2b75b8eb193f.png",
      category: "electronics"
    },
    {
      id: 4,
      title: "Robotics for Beginners",
      date: "July 12, 2025",
      description: "Get started with robotics fundamentals, from basic components to simple automated systems.",
      image: "/lovable-uploads/d9619f6f-17ea-469f-9394-83f831894b00.png",
      category: "robotics"
    },
    {
      id: 5,
      title: "IoT Project Development",
      date: "July 19, 2025",
      description: "Develop your own Internet of Things project using sensors, microcontrollers and cloud connectivity.",
      image: "/lovable-uploads/1dd46598-f241-46f5-adbe-37d393e1e3d9.png",
      category: "iot"
    }
  ];

  const handleEnquire = (workshop: any) => {
    const message = `Hi Protobots! I'm interested in the "${workshop.title}" workshop scheduled for ${workshop.date}. Could I get more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/qr/PHY6KG77QAUTD1?text=${encodedMessage}`, '_blank');
  };

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
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Workshops</TabsTrigger>
                <TabsTrigger value="robotics">Robotics</TabsTrigger>
                <TabsTrigger value="electronics">Electronics</TabsTrigger>
                <TabsTrigger value="iot">IoT</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={workshop.image} 
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{workshop.title}</CardTitle>
                      <CardDescription>Date: {workshop.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{workshop.description}</p>
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
                ))}
              </div>
            </TabsContent>

            <TabsContent value="robotics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingWorkshops
                  .filter(workshop => workshop.category === 'robotics')
                  .map((workshop) => (
                    <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{workshop.title}</CardTitle>
                        <CardDescription>Date: {workshop.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{workshop.description}</p>
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
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingWorkshops
                  .filter(workshop => workshop.category === 'electronics')
                  .map((workshop) => (
                    <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{workshop.title}</CardTitle>
                        <CardDescription>Date: {workshop.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{workshop.description}</p>
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
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="iot" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingWorkshops
                  .filter(workshop => workshop.category === 'iot')
                  .map((workshop) => (
                    <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{workshop.title}</CardTitle>
                        <CardDescription>Date: {workshop.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{workshop.description}</p>
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
                window.open(`https://wa.me/qr/PHY6KG77QAUTD1?text=${encodeURIComponent(message)}`, '_blank');
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
