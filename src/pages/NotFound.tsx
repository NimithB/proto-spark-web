
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/d9619f6f-17ea-469f-9394-83f831894b00.png" 
              alt="Confused Robot" 
              className="h-64 w-auto mx-auto animate-float"
            />
          </div>
          <h1 className="text-6xl font-bold text-proto-navy mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-proto-cyan mb-6">
            Oops! Robot Malfunction
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for seems to have wandered off. Our robots are searching for it!
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center"
          >
            Return to Home Base
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
