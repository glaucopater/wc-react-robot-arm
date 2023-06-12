import { useEffect } from "react";
import { RobotArm } from "./components/RobotArm";

function App() {
  useEffect(() => {
    const robotArm = document.querySelector(".robot-arm-container") as HTMLImageElement;

    const handleMouseOver = () => {
      robotArm.classList.toggle("move-hand");
    };

    robotArm.addEventListener("mouseover", handleMouseOver);

    return () => robotArm.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div className="App">
      <RobotArm />
    </div>
  );
}

export default App;
