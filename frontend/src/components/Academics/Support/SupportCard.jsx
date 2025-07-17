import React, { useRef, useEffect, useState } from "react";

const SupportCard = ({ partner, isLeft }) => {
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
    >
      <div className="logo"><img className="Bhailogo"  src={partner.avatar.url} alt={partner.title} /></div>
      <h2>{partner.title}</h2>
      <p>{partner.description}</p>
    </div>
  );
};

export default SupportCard;
