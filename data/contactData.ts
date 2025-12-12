import { ContactMethod, BusinessInfo } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  address: "404 Future Blvd, District 9, SF",
  addressLabel: "Base Station",
  hours: "Tue-Sun: 17:00 — 02:00",
  hoursLabel: "Operating Cycles"
};

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+1 (555) 012-3456',
    link: 'https://wa.me/15550123456',
    color: 'bg-pop-green',
    textColor: 'text-white',
    description: 'Priority Table Booking & VIP Requests',
    action: 'Chat Now'
  },
  {
    id: 'email',
    label: 'Email',
    value: 'eat@habitat.com',
    link: 'mailto:eat@habitat.com',
    color: 'bg-pop-pink',
    textColor: 'text-black',
    description: 'Private Events & Press Inquiries',
    action: 'Send Mail'
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+1 (415) 555-0199',
    link: 'tel:+14155550199',
    color: 'bg-pop-yellow',
    textColor: 'text-black',
    description: 'Immediate Assistance & Takeout',
    action: 'Call Us'
  }
];