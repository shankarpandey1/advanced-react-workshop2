import React from "react";
import BusinessCard from "./BusinessCard";

function BusinessCardList(props) {
  const { bizcards } = props;
  return (
    <div className="cards">
      {bizcards.map((card, index) => (
        <BusinessCard
          key={index}
          name={card.name}
          position={card.position}
          email={card.email}
          tel={card.phone}
          photo={card.photo}
        />
      ))}
    </div>
  );
}

export default BusinessCardList;
