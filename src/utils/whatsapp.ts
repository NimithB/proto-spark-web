type MessageData = {
  name: string;
  phone: string;
  [key: string]: string;
};

export const sendWhatsAppMessage = (data: MessageData, type: 'equipment' | 'contact' | 'workshop') => {
  const phoneNumber = '918904688500';
  
  // Create message based on type
  let message = '';
  
  switch (type) {
    case 'equipment':
      message = `Name: ${data.name}
Phone: ${data.phone}
Equipment: ${data.equipment}
Type: ${data.type}
Details: ${data.requirement}`;
      break;
      
    case 'contact':
      message = `Name: ${data.name}
Phone: ${data.phone}
Subject: ${data.subject}
Message: ${data.message}`;
      break;
      
    case 'workshop':
      message = `Workshop Registration
Name: ${data.name}
Phone: ${data.phone}
Workshop: ${data.workshop}
Message: ${data.message}`;
      break;
  }

  // Format and send message
  const encodedMessage = encodeURIComponent(message.trim());
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
};