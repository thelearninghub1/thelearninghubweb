import React, { useEffect } from 'react';
import './ContactOptions.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactOptions = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6846d66075ee061917b32ba1/1itabaqpo';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      if (s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  return (
    <div className="contactOptionsContainer">
      <a href="https://wa.me/+971552920583?text=yourmessage" target="_blank" rel="noopener noreferrer" className="whtButton">
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default ContactOptions;
