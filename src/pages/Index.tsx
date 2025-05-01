
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';

const Index = () => {
  useEffect(() => {
    // Load the model-viewer script
    const modelViewerScript = document.createElement('script');
    modelViewerScript.type = 'module';
    modelViewerScript.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(modelViewerScript);

    return () => {
      // Clean up
      document.head.removeChild(modelViewerScript);
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;
