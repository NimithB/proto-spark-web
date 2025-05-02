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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

interface EquipmentCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  id,
  name,
  image,
  description
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    purpose: 'rent',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePurposeChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      purpose: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message with proper line breaks
    const purposeText = formData.purpose === 'rent' ? 'rent' : 'buy';
    const formattedMessage = `Equipment Inquiry:\nName: ${formData.name}\nEquipment: ${name}\nPurpose: ${purposeText}\nMessage: ${formData.message}`;

    // Use the correct WhatsApp URL format with phone number
    const phoneNumber = '918904688500';
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Close the dialog and reset form
    setIsDialogOpen(false);
    setFormData({
      name: '',
      purpose: 'rent',
      message: ''
    });
  };

  const handleEnquire = (equipmentName: string) => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-full pb-[75%]">
          <img 
            src={image} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base text-gray-600">{description}</p>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-proto-cyan hover:bg-opacity-90"
            onClick={() => handleEnquire(name)}
          >
            Enquire Now
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>
              Fill in your details to inquire about this equipment.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Purpose</label>
              <RadioGroup 
                defaultValue="rent" 
                value={formData.purpose} 
                onValueChange={handlePurposeChange}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rent" id="rent" />
                  <Label htmlFor="rent">Rent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="buy" id="buy" />
                  <Label htmlFor="buy">Buy</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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

export default EquipmentCard;
