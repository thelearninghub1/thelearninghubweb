import React, { useRef, useEffect, useState } from "react";

const PartnerCard = ({ partner , isLeft }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current); // Stop observing after animation
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`partner-card ${isLeft ? "left" : "right"} ${
        isVisible ? "show" : ""
      }`}
      key={partner._id}
    >
      <div className="logo"><img className="partnerlogo" src={partner.avatar.url} alt={partner.name} /></div>
      <h2>{partner.name}</h2>
      <p>{partner.description}</p>
    </div>
  );
};

export default PartnerCard;
