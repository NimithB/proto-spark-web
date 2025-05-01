
import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  bgColor
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const formattedMessage = `Hi Protobots! I'm interested in ${title}. ${message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // Redirect to WhatsApp with the pre-filled message
    window.open(`https://wa.me/qr/PHY6KG77QAUTD1?text=${encodedMessage}`, '_blank');
    
    // Close the dialog
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className={`service-card relative group`}>
        <div className={`absolute top-0 left-0 w-full h-1 ${bgColor} rounded-t-xl`}></div>
        <div className="pt-4">
          <div className="mb-4 text-proto-cyan">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="btn-outline text-sm"
          >
            Select & Enquire
          </button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enquire about {title}</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Service of Interest
              </label>
              <Input id="service" value={title} disabled />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific requirements or questions..."
              />
            </div>
            
            <DialogFooter>
              <Button type="submit" className="bg-proto-cyan hover:bg-opacity-90">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
