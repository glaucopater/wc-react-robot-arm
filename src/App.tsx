import robotArm from "./assets/robotic-arm.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const robotArm = document.querySelector(".robot-arm") as HTMLImageElement;

    const handleMouseOver = () => {
      robotArm.classList.toggle("move-hand");
    };

    robotArm.addEventListener("mouseover", handleMouseOver);

    return () => robotArm.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div className="robot-arm">
      <img src={robotArm} className="right-robot-arm" alt="robot arm" />
    </div>
  );
}

export default App;
