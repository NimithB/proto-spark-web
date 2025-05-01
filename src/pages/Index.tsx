
import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;
