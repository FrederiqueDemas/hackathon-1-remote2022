import React, { useState, useEffect } from "react";
import axios from "axios";

const list = require("../assets/aliments.json");

const RandomApi = () => {
  const [aliment, setAliment] = useState();
  const [score, setScore] = useState();
  const [idSelected, setIdSelected] = useState();
  const [scoreTotal, setScoreTotal] = useState(0);
  const [count, setCount] = useState(0);

  const filterLIst = (e) => {
    setIdSelected(e.target.value);
  };

  const resetScore = () => {
    setScore(0);
  };

  function getinnerText() {
    const newProduct = document.createElement("li");
    const toto = [];
    newProduct.textContent = `${aliment}`;
    document.querySelector(".essayons").appendChild(newProduct);
    setScoreTotal(scoreTotal + score);
    return false;
  }

  const calculScore = score === scoreTotal;

  const API = `https://koumoul.com/data-fair/api/v1/datasets/agribalyse-synthese/lines?format=json&q_mode=simple&qs=${idSelected}`;

  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      console.log(`Id: ${obj}`);
    }
    axios
      .get(API)
      .then((response) => response.data)
      .then((data) => {
        setAliment(data.results[0].Nom_du_Produit_en_Français);
        setScore(data.results[0]["Score_unique_EF_(mPt/kg_de_produit)"]);
      })
      .catch((e) => console.error(e));
  }, [idSelected]);

  return (
    <div>
      <h1>Random API - La bouffe</h1>
      <select onChange={filterLIst}>
        {list.map((acc) => (
          <option key={acc.id}> {acc.nom} </option>
        ))}
      </select>
      <button onClick={resetScore}>Reset</button>

      <p>
        Score de l'ingrédient sélectionné : {score}{" "}
        <button type="button" onClick={() => getinnerText()}>
          Get
        </button>
      </p>
      <div className="toAdd">Score de tout les ingrédients : {scoreTotal}</div>
      <div>Score EF : {scoreTotal / 10 / 3}</div>
      <div className="totalll"></div>
      <div className="essayons"></div>
    </div>
  );
};

export default RandomApi;
