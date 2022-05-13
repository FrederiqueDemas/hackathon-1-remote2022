import React from "react";
import FoodItem from "../components/FoodItem";
import RandomApi from "../components/RandomApi";
import Basket from "../components/Basket";
import "../styles/FoodAnalysis.css";
import "../styles/App.css";
import "../styles/variables.css";

const foodList = require("../assets/aliments.json");

function FoodAnalysis() {
  return (
    <div className="globalcontainer">
      <div className="basket">
        <Basket />
      </div>
      <div className="foodItem-container">
        <div className="filter">
          <RandomApi />
        </div>
        <div className="foodlist">
          {foodList &&
            foodList.map((item) => (
              <article key={item.id}>
                <FoodItem key={item.id} nom={item.nom} pic={item.img} />
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FoodAnalysis;
