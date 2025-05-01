import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

// Import equipment images
import printer3d from '@/assets/equipment/3d_printer.jpg';
import arduinoKit from '@/assets/equipment/arduino_kit.jpeg';
import multimeter from '@/assets/equipment/Best-Digital-Multimeters-6.jpg';
import cordlessDrill from '@/assets/equipment/drill_PNG24.png';
import droneKit from '@/assets/equipment/drone_kit.jpg';
import laserCutter from '@/assets/equipment/lazer_cutting.jpeg';
import oscilloscope from '@/assets/equipment/oscilloscope.jpg';
import roboticArm from '@/assets/equipment/robotic_arm.jpg';
import solderingStation from '@/assets/equipment/soldering-stations.jpg';
import EquipmentCard from '@/components/equipment/EquipmentCard';

const equipmentItems = [
  {
    id: "3d-printer",
    name: "3D Printer - Creality Ender 3",
    image: printer3d,
    description: "High-quality FDM 3D printer with a build volume of 220x220x250mm, perfect for prototyping and small production runs.",
    category: "manufacturing"
  },
  {
    id: "soldering-station",
    name: "Professional Soldering Station",
    image: solderingStation,
    description: "Temperature-controlled soldering station with digital display, suitable for precision electronics work.",
    category: "electronics"
  },
  {
    id: "cordless-drill",
    name: "Cordless Drill",
    image: cordlessDrill,
    description: "18V cordless drill with variable speed control and multiple torque settings for various applications.",
    category: "tools"
  },
  {
    id: "oscilloscope",
    name: "Digital Oscilloscope",
    image: oscilloscope,
    description: "100MHz digital storage oscilloscope with dual channels for advanced electronics debugging and testing.",
    category: "electronics"
  },
  {
    id: "drone-kit",
    name: "DIY Drone Kit",
    image: droneKit,
    description: "Complete quadcopter drone kit including frame, motors, ESCs, flight controller and remote.",
    category: "robotics"
  },
  {
    id: "multimeter",
    name: "Digital Multimeter",
    image: multimeter,
    description: "Auto-ranging digital multimeter for measuring voltage, current, resistance and more.",
    category: "electronics"
  },
  {
    id: "arduino-kit",
    name: "Arduino Starter Kit",
    image: arduinoKit,
    description: "Comprehensive Arduino starter kit with UNO board, breadboard, sensors, actuators and components.",
    category: "electronics"
  },
  {
    id: "laser-cutter",
    name: "Desktop Laser Cutter",
    image: laserCutter,
    description: "40W CO2 laser cutter/engraver with 300x500mm bed for cutting and engraving various materials.",
    category: "manufacturing"
  },
  {
    id: "robotic-arm",
    name: "Educational Robotic Arm",
    image: roboticArm,
    description: "6-axis robotic arm with programmable controller, ideal for learning robotics fundamentals.",
    category: "robotics"
  }
];

const Equipment = () => {
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    phone: '',
    equipment: '',
    requirement: '',
    type: 'rent'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      sendWhatsAppMessage(enquiryData, 'equipment');

      // Reset form
      setEnquiryData({
        name: '',
        phone: '',
        equipment: '',
        requirement: '',
        type: 'rent'
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-proto-navy mb-4 text-center">Can't Find What You Need?</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We have a wide range of equipment and tools not listed here. Let us know what you're looking for.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={enquiryData.name}
                onChange={(e) => setEnquiryData({...enquiryData, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-proto-cyan focus:border-transparent"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={enquiryData.phone}
                onChange={(e) => setEnquiryData({...enquiryData, phone: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-proto-cyan focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="Required Equipment"
                value={enquiryData.equipment}
                onChange={(e) => setEnquiryData({...enquiryData, equipment: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-proto-cyan focus:border-transparent"
                required
              />
              <textarea
                placeholder="Additional Details"
                value={enquiryData.requirement}
                onChange={(e) => setEnquiryData({...enquiryData, requirement: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-proto-cyan focus:border-transparent"
                rows={4}
                required
              />
              <button 
                type="submit"
                className="w-full btn-primary bg-proto-orange hover:bg-opacity-90 py-3 rounded-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;
