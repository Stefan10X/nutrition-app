import GoalCalories from "./components/GoalCalories";
import CaloriesCalc from "./components/CaloriesCalc";
import Reveal from "./components/Reveal";
import { useState } from "react";

const App = () => {
  const [calculated, setCalculated] = useState(false);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [remainingProtein, setRemainingProtein] = useState(0);

  return (
    <div>
      <GoalCalories
        setCalculated={setCalculated}
        setRemainingCalories={setRemainingCalories}
        setRemainingProtein={setRemainingProtein}
      />
      {calculated && (
        <Reveal>
          <CaloriesCalc
            calories={remainingCalories}
            protein={remainingProtein}
          />
        </Reveal>
      )}
    </div>
  );
};

export default App;
