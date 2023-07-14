import { useState } from "react";

const FoodItem = ({
  food,
  setRemoved,
  setModified,
  initialQuantity,
  initialCalories,
  initialProtein,
}) => {
  const [remove, setRemove] = useState(false);
  const [size, setSize] = useState(initialQuantity);
  const [calories, setCalories] = useState(food.calories);
  const [protein, setProtein] = useState(food.protein_g);

  const removeFood = () => {
    setRemove(true);
    setRemoved(true);
    food.calories = 0;
    food.protein_g = 0;
  };

  const modifyQuantity = () => {
    food.serving_size_g = parseInt(size);
    const difference = parseInt(size) / initialQuantity;
    setCalories(initialCalories * difference);
    setProtein(initialProtein * difference);
    food.calories = initialCalories * difference;
    food.protein_g = initialProtein * difference;
    setModified(true);
  };

  return (
    <div>
      {!remove && (
        <div className="flex flex-col py-2 gap-2 items-center border-b-2 ">
          <h1 className="font-bold text-center">{food.name}</h1>
          <div className="flex items-center gap-10 lg:gap-16">
            <div>
              <input
                className="w-16 lg:w-24 border-2 border-black rounded-lg"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
              <p>grams</p>
            </div>
            <div className="text-center">
              <p>{calories.toFixed()} </p>
              <p>calories</p>
            </div>
            <div className="text-center">
              <p>{protein.toFixed(1)} </p>
              <p>protein</p>
            </div>
          </div>
          <div className="flex w-80 lg:w-[420px] justify-between">
            <button
              onClick={modifyQuantity}
              className=" bg-blue-500 p-2 rounded-lg text-white text-xl lg:text-2xl"
            >
              modify
            </button>
            <button
              onClick={removeFood}
              className=" bg-red-400 p-2 rounded-lg text-white text-xl lg:text-2xl"
            >
              remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
