import React from "react";
import BusinessCardList from "./BusinessCardList";
import bizcards from "./Data";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h2>Business Cards</h2>
      <BusinessCardList bizcards={bizcards} />
      {/* <div className="cards">
        <BusinessCard
          name="John Doe"
          position="CEO"
          email="john.doe@example.com"
          tel="+1 (123) 456-7890"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Jane Doe"
          position="CTO"
          email="jane.doe@example.com"
          tel="+1 (123) 456-7890"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Bob Smith"
          position="CFO"
          email="bob.smith@example.com"
          tel="+1 (123) 456-7890"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Alice Johnson"
          position="COO"
          email="alice.johnson@example.com"
          tel="+1 (123) 456-7890"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Charlie Brown"
          position="CMO"
          email="charlie.brown@example.com"
          tel="+1 (123) 456-7890"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
      </div> */}
    </div>
  );
}

export default App;
