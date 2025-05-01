
import React from 'react';
import Layout from '../components/layout/Layout';
import EquipmentCard from '../components/equipment/EquipmentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Equipment = () => {
  const equipmentItems = [
    {
      id: "3d-printer",
      name: "3D Printer - Creality Ender 3",
      image: "/lovable-uploads/ed96b7d4-61e2-4b21-a0b6-d1b3f6427c88.png",
      description: "High-quality FDM 3D printer with a build volume of 220x220x250mm, perfect for prototyping and small production runs.",
      category: "manufacturing"
    },
    {
      id: "soldering-station",
      name: "Professional Soldering Station",
      image: "/lovable-uploads/c52b0d77-f343-4867-ad37-ee35a907c9d2.png",
      description: "Temperature-controlled soldering station with digital display, suitable for precision electronics work.",
      category: "electronics"
    },
    {
      id: "cordless-drill",
      name: "Cordless Drill",
      image: "/lovable-uploads/952f4c03-58a3-419a-99e6-2b75b8eb193f.png",
      description: "18V cordless drill with variable speed control and multiple torque settings for various applications.",
      category: "tools"
    },
    {
      id: "oscilloscope",
      name: "Digital Oscilloscope",
      image: "/lovable-uploads/1dd46598-f241-46f5-adbe-37d393e1e3d9.png",
      description: "100MHz digital storage oscilloscope with dual channels for advanced electronics debugging and testing.",
      category: "electronics"
    },
    {
      id: "drone-kit",
      name: "DIY Drone Kit",
      image: "/lovable-uploads/7b54e5c2-fd46-423a-950f-21955f26305c.png",
      description: "Complete quadcopter drone kit including frame, motors, ESCs, flight controller and remote.",
      category: "robotics"
    },
    {
      id: "multimeter",
      name: "Digital Multimeter",
      image: "/lovable-uploads/5466f83f-4a34-430e-9caf-1b6322ada408.png",
      description: "Auto-ranging digital multimeter for measuring voltage, current, resistance and more.",
      category: "electronics"
    },
    {
      id: "arduino-kit",
      name: "Arduino Starter Kit",
      image: "/lovable-uploads/abe14db0-4252-4aa4-861f-9c47f2201058.png",
      description: "Comprehensive Arduino starter kit with UNO board, breadboard, sensors, actuators and components.",
      category: "electronics"
    },
    {
      id: "laser-cutter",
      name: "Desktop Laser Cutter",
      image: "/lovable-uploads/01cb8c6b-e9c7-4de4-a3cf-f1c55a9a3a19.png",
      description: "40W CO2 laser cutter/engraver with 300x500mm bed for cutting and engraving various materials.",
      category: "manufacturing"
    },
    {
      id: "robotic-arm",
      name: "Educational Robotic Arm",
      image: "/lovable-uploads/d9619f6f-17ea-469f-9394-83f831894b00.png",
      description: "6-axis robotic arm with programmable controller, ideal for learning robotics fundamentals.",
      category: "robotics"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-proto-purple to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-proto-navy mb-4">Equipment & Tools</h1>
            <p className="text-xl text-gray-700 mb-8">
              High-quality equipment available for rent or purchase to support your technology projects
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Equipment</TabsTrigger>
                <TabsTrigger value="electronics">Electronics</TabsTrigger>
                <TabsTrigger value="robotics">Robotics</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipmentItems.map((item) => (
                  <EquipmentCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="electronics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipmentItems
                  .filter(item => item.category === 'electronics')
                  .map((item) => (
                    <EquipmentCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="robotics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipmentItems
                  .filter(item => item.category === 'robotics')
                  .map((item) => (
                    <EquipmentCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipmentItems
                  .filter(item => item.category === 'manufacturing')
                  .map((item) => (
                    <EquipmentCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipmentItems
                  .filter(item => item.category === 'tools')
                  .map((item) => (
                    <EquipmentCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      description={item.description}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-proto-navy mb-4">Can't Find What You Need?</h2>
            <p className="text-lg text-gray-700 mb-8">
              We have a wide range of equipment and tools not listed here. Contact us for specific requirements.
            </p>
            <button 
              className="btn-primary bg-proto-orange hover:bg-opacity-90"
              onClick={() => {
                const message = "Hi Protobots! I'm looking for specific equipment that I can't find on your website. Can you help?";
                window.open(`https://wa.me/qr/PHY6KG77QAUTD1?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              Enquire for Specific Equipment
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;
