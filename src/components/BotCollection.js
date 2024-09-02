import React, { useState, useEffect } from "react"; // Import useState and useEffect
import BotCard from "./BotCard"; // Import BotCard component

function BotCollection({ onSelect, onDischarge }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error("Error fetching bots:", error));
  }, []);
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onSelect={onSelect}
            onDischarge={onDischarge}
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
