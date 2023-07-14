import { useState } from "react";
import SearchBar from "./SearchBar";
import apininjas from "../api/apininjas";
import FoodsList from "./FoodsList";

const CaloriesCalc = ({ protein, calories }) => {
  const [foods, setFoods] = useState([]);
  const [mealCalories, setMealCalories] = useState(0);
  const [mealProtein, setMealProtein] = useState(0);
  const [valid, setValid] = useState(true);

  const onTermSubmit = async (term) => {
    try {
      const response = await apininjas.get("/nutrition", {
        params: {
          query: term,
        },
      });

      if (response.data && response.data.length > 0) {
        setFoods((prevList) => [...prevList, response.data[0]]);
        setValid(true);
      } else {
        setValid(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col w-[370px] lg:w-[500px] mx-auto text-2xl lg:text-3xl">
      <div className="text-2xl lg:text-3xl sticky top-0 py-2 overflow-auto bg-white z-10 border-b-2">
        <div>
          <strong>Calories left:</strong> {calories} - {mealCalories.toFixed()}{" "}
          ={" "}
          <strong className="text-red-400">
            {(calories - mealCalories).toFixed()}
          </strong>
        </div>
        <div>
          <strong>Protein left:</strong> {protein} - {mealProtein.toFixed()} ={" "}
          <strong className="text-red-400">
            {(protein - mealProtein).toFixed()}
          </strong>
        </div>

        <SearchBar onTermSubmit={onTermSubmit} />
        {!valid && <div className="py-2 text-red-400">Invalid food!</div>}
      </div>
      <FoodsList
        foods={foods}
        setMealCalories={setMealCalories}
        setMealProtein={setMealProtein}
      />
    </div>
  );
};

export default CaloriesCalc;
