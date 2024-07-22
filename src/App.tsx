import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faAppleWhole, faLeaf, faDrumstickBite, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import BaseBread from './components/BaseBread';
import Ingredient from './components/ingredient';
import TopBread from './components/TopBread';
import { BurgerContext } from './context/Burger';
import './App.css';

const App: React.FC = () => {
  // Get the context value
  const { addIngredient, removeIngredient } = useContext(BurgerContext);

  if (!addIngredient || !removeIngredient) {
    throw new Error('App must be used within a BurgerProvider');
  }

  // Event handlers
  const handleAddIngredient = (color: string, type: string) => {
    addIngredient({ color, type });
  };

  return (
    <div className="burger-container">
      <h2>Your Burger</h2>
      <TopBread size="large" />
      <Ingredient />
      <BaseBread size="large" />
      <h3><em>Hope it tastes great!</em></h3>
      <div className="controls">
        <button onClick={() => handleAddIngredient('yellow', 'Cheese')}>
          <FontAwesomeIcon icon={faCheese} style={{ color: 'gold' }} /> Add Cheese
        </button>
        <button onClick={() => handleAddIngredient('red', 'Tomato')}>
          <FontAwesomeIcon icon={faAppleWhole} style={{ color: 'red' }} /> Add Tomato
        </button>
        <button onClick={() => handleAddIngredient('green', 'Lettuce')}>
          <FontAwesomeIcon icon={faLeaf} style={{ color: 'green' }} /> Add Lettuce
        </button>
        <button onClick={() => handleAddIngredient('brown', 'Meat')}>
          <FontAwesomeIcon icon={faDrumstickBite} style={{ color: 'brown' }} /> Add Meat
        </button>
      </div>
      <p>
        <em>Click on the ingredient you wish to remove</em>
        <FontAwesomeIcon icon={faSmileWink} style={{ color: 'yellow' }} />
      </p>
    </div>
  );
};

export default App;
