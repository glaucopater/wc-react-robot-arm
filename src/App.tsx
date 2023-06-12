import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { mockData } from "./mocks/handlers";
import { CustomCardProps } from "./components/CustomCard";
import "./App.css";
import AddReminder from "./components/AddReminderButton";

function App() {
  const [currentData, setCurrentData] = useState<CustomCardProps[]>(mockData);

  useEffect(() => {
    logJSONData();
  }, []);

  async function logJSONData() {
    if (import.meta.env.VITE_REMINDERS_API) {
      const response = await fetch(import.meta.env.VITE_REMINDERS_API);
      const jsonData = await response.json();
      setCurrentData(jsonData);
    } else console.warn("Missing API!");
  }

  const handleFetchData = () => {
    logJSONData();
  };

  const setToDoneReminder = (id: string) => {
    setCurrentData(currentData.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="h-screen p-2 rounded flex flex-col border border-white w-52">
      <button onClick={handleFetchData}>Reload data</button>
      <CardList cards={currentData} setToDoneReminder={setToDoneReminder} />
      <AddReminder />
    </div>
  );
}

export default App;
