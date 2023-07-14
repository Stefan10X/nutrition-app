/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(100);

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onTermSubmit(term);
  };

  const buildTerm = () => {
    const foodItem = `${quantity}g ${food}`;
    setTerm(foodItem);
  };

  return (
    <div className="sticky">
      <form onSubmit={onFormSubmit}>
        <div className="text-xl lg:text-2xl mt-2 ">
          Enter your foods for the entire day
        </div>
        <div className="mt-4 flex justify-center gap-4 lg:gap-10">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-xl lg:text-2xl">Name</label>
            <input
              value={food}
              onChange={(e) => {
                setFood(e.target.value);
              }}
              className="w-28 lg:w-44 border-2 border-black rounded-lg"
              placeholder="eg. steak"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-xl lg:text-2xl">Quantity</label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 border-2 border-black rounded-lg"
              placeholder="g"
              type="text"
            ></input>
          </div>
          <button
            onClick={buildTerm}
            className="self-end w-42 h-12 mt-7 text-xl lg:text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
