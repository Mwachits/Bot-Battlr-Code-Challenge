import React from "react";
import BotCard from "./BotCard"; // Import BotCard component

function YourBotArmy({ bots = [], onRelease }) { // Default bots to an empty array
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onDischarge={onRelease} // Use onDischarge prop to handle bot release
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
