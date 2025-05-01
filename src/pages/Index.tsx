
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';

const Index = () => {
  useEffect(() => {
    // Check if the script is already loaded to prevent duplicates
    if (!document.querySelector('script[src*="model-viewer"]')) {
      // Load the model-viewer script
      const modelViewerScript = document.createElement('script');
      modelViewerScript.type = 'module';
      modelViewerScript.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(modelViewerScript);

      return () => {
        // Clean up only if the script exists
        const script = document.querySelector('script[src*="model-viewer"]');
        if (script) {
          document.head.removeChild(script);
        }
      };
    }
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
