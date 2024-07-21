import React from "react";
import BaseBread from "./components/BaseBread";
import Ingredient from "./components/ingredient";
import TopBread from "./components/TopBread";
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="burger-container">
      <TopBread size="large" />
      <Ingredient color="yellow" type="Cheese" />
      <Ingredient color="red" type="Tomato" />
      <Ingredient color="yellow" type="Cheese" />
      <Ingredient color="green" type="Lettuce" />
      <Ingredient color="brown" type="Meat" />
      <Ingredient color="yellow" type="Cheese" />
      <BaseBread size="large" />
    </div>
  );
};

export default App;

