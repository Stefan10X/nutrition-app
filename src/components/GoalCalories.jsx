import Select from "react-select";
import { useState } from "react";
import Reveal from "./Reveal";

const GoalCalories = ({
  setCalculated,

  setRemainingCalories,

  setRemainingProtein,
}) => {
  const [goal, setGoal] = useState("bulk");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [valid, setValid] = useState(false);

  const options = [
    { value: "bulk", label: "Building Muscle" },
    { value: "cut", label: "Losing Fat" },
    { value: "maintain", label: "Maintaining" },
  ];

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setGender(event.target.value);
    }
  };

  const validateUser = () => {
    if (age > 15 && age < 80 && weight > 20 && height > 80) {
      setValid(true);
      setCalculated(true);
      setRemainingCalories(calories.toFixed()),
        setRemainingProtein(protein.toFixed());
      return null;
    } else {
      return (
        <Reveal>
          <div className="text-2xl text-red-500 mt-6 text-center">
            Invalid values!
          </div>
        </Reveal>
      );
    }
  };

  const calculateCalories = () => {
    let bmr = 0;

    if (gender === "male") {
      const bmrMale = 10 * weight + 6.25 * height - 5 * age + 5;
      bmr = bmrMale;
    }

    if (gender === "female") {
      const bmrFemale = 10 * weight + 6.25 * height - 5 * age - 161;
      bmr = bmrFemale;
    }

    const maintainanceCalories = bmr + weight * 15;

    if (goal === "bulk") {
      setCalories(maintainanceCalories * 1.1);
    }
    if (goal === "cut") {
      setCalories(maintainanceCalories * 0.85);
    }
    if (goal === "maintain") {
      setCalories(maintainanceCalories);
    }
  };

  const calculateProtein = () => {
    if (goal == "bulk") {
      setProtein(weight * 1.8);
    }
    if (goal == "cut") {
      setProtein(weight * 2.2);
    }
    if (goal == "maintain") {
      setProtein(weight * 1.4);
    }
  };

  return (
    <div className="mt-4 lg:mt-12 ">
      {!valid && (
        <div>
          <div className="text-3xl lg:text-5xl text-center">
            What is your goal?
          </div>
          <div className="flex flex-col gap-5 w-52 mx-auto text-xl lg:text-3xl mt-4">
            <Select
              value={options.find((option) => option.value === goal)}
              onChange={(e) => setGoal(e.value)}
              options={options}
              className="mt-4 w-52 lg:w-72 self-center text-gray-800 "
            />
            <div className="flex items-center gap-2 mt-8 lg:mt-12">
              <label>Age: </label>
              <input
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setClicked(false);
                }}
                className="w-12 lg:w-16  border-2 border-black rounded p-1 placeholder:text-sm lg:placeholder:text-lg"
                type="text"
                placeholder="15-80"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>Gender:</label>
              <input
                type="checkbox"
                value="male"
                checked={gender === "male"}
                onChange={handleCheckboxChange}
              />
              <label>male</label>
              <input
                type="checkbox"
                value="female"
                checked={gender === "female"}
                onChange={handleCheckboxChange}
              />
              <label>female</label>
            </div>
            <div className="flex items-center gap-2">
              <label>Weight:</label>
              <input
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                  setClicked(false);
                }}
                className="w-12 lg:w-16 border-2 border-black rounded p-1"
                type="text"
                placeholder="kg"
              />
            </div>
            <div className="flex items-center gap-2">
              <label>Height:</label>
              <input
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                  setClicked(false);
                }}
                className="w-12 lg:w-20 border-2 border-black rounded p-1"
                type="text"
                placeholder="cm"
              />
            </div>

            <button
              onClick={() => {
                calculateCalories();
                calculateProtein();
                setClicked(true);
              }}
              className="mt-8 lg:mt-12 w-52 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Calculate
            </button>
            {clicked && validateUser()}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalCalories;
