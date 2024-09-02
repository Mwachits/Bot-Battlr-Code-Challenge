import React, { useState } from "react"; 
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [botArmy, setBotArmy] = useState([]);

  const handleAddToArmy = (bot) => {
    setBotArmy((prevArmy) => [...prevArmy, bot]);
  };

  const handleReleaseFromArmy = (botId) => {
    setBotArmy((prevArmy) => prevArmy.filter(bot => bot.id !== botId));
  };

  const handleDischargeBot = (botId) => {
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
    .then(() => handleReleaseFromArmy(botId))
    .catch(error => console.error("Error discharging bot:", error));
  };

  return (
    <div>
      <YourBotArmy bots={botArmy} onRelease={handleReleaseFromArmy} />
      <BotCollection onSelect={handleAddToArmy} onDischarge={handleDischargeBot} />
    </div>
  );
}

export default BotsPage;
