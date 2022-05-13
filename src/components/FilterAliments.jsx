import "../styles/result.css";

const list = require("../assets/aliments.json");

const filterAliments = ({ filterByType }) => {
  return (
      <form className="">
        <label htmlFor="type-select">
        Filter by{" "}
          <select onChange={filterByType} className="filterbar">
            <option value="">---</option>
            {list
            .filter((categorie, index, self) => self.findIndex( v => v.type === categorie.type) === index)
            .map((categorie) => (
              <option value={categorie.type} key={categorie.id}>{" "}{categorie.type}{" "}</option>
            ))}
          </select>
      </label>
      </form>
  );
};

export default filterAliments;
