/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
import Reveal from "./Reveal";

const FoodsList = ({ foods, setMealCalories, setMealProtein }) => {
  const [removed, setRemoved] = useState(false);
  const [modified, setModified] = useState(false);

  const addCalories = () => {
    const calories = foods.map((food) => food.calories);
    const totalCalories = calories.reduce((acc, cur) => acc + cur, 0);
    setMealCalories(totalCalories);
  };

  const addProtein = () => {
    const protein = foods.map((food) => food.protein_g);
    const totalProtein = protein.reduce((acc, cur) => acc + cur, 0);
    setMealProtein(totalProtein);
  };

  const foodList = foods.map((food) => {
    return (
      <Reveal key={uuidv4}>
        <FoodItem
          key={uuidv4}
          food={food}
          removed={removed}
          setRemoved={setRemoved}
          setModified={setModified}
          initialCalories={food.calories}
          initialProtein={food.protein_g}
          initialQuantity={food.serving_size_g}
        />
      </Reveal>
    );
  });

  useEffect(() => {
    addCalories();
    addProtein();
    setRemoved(false);
    setModified(false);
  }, [foodList, removed, modified]);

  return (
    <div>
      <div className="w-full flex flex-col justify-start">{foodList}</div>
    </div>
  );
};

export default FoodsList;
