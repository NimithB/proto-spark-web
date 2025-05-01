
import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/shared/ContactForm';
import { Facebook, Instagram, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-10 bg-gradient-to-b from-proto-purple to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-proto-navy mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-700">
              Have questions or ready to start a project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-proto-navy mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-proto-cyan flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-gray-600">
                      6/2 C.Ramaiah layout, Ramchandrapura Main Rd<br />
                      Vidyaranyapura Post, Bengaluru, Karnataka 560097<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-proto-cyan flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-proto-cyan flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600">info@protobots.in</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-proto-cyan bg-opacity-10 p-6 rounded-xl mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageSquare className="text-proto-cyan" size={28} />
                  <h3 className="font-bold text-lg text-proto-navy">WhatsApp Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get quick responses to your queries through our WhatsApp support.
                </p>
                <a 
                  href="https://wa.me/message/7WIBMBJGEKSSI1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-proto-cyan text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Chat with us
                </a>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-lg text-proto-navy mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/proto_bots?igsh=ZzBmd3dtamZ6bzN1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} className="text-proto-navy" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1AwEhTVWkP" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} className="text-proto-navy" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-proto-navy mb-6">Send Us a Message</h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-proto-navy mb-6">Location</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.66633357926!2d77.5563937!3d13.0772842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1af3aa89c085%3A0x7b2f378b91dae97f!2sRamachandrapura%20Main%20Road%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714347676772!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Protobots Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
