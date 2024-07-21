import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faAppleWhole, faLeaf, faDrumstickBite, faMinusCircle, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import BaseBread from './components/BaseBread.tsx';
import Ingredient from './components/ingredient.tsx';
import TopBread from './components/TopBread.tsx';
import { BurgerContext } from './context/Burger.tsx';
import './App.css';

const App: React.FC = () => {
  // Get the context value
  const context = useContext(BurgerContext);

  if (!context) {
    throw new Error('App must be used within a BurgerProvider');
  }
  const { addIngredient, removeIngredient } = context;

  return (
    <div className="burger-container">
      <h2>Your Burger</h2>
      <TopBread size="large" />
      <Ingredient />
      <BaseBread size="large" />
      <h3><em>Hope it tastes great!</em></h3>
      <div className="controls">
        <button onClick={() => addIngredient({ color: 'yellow', type: 'Cheese' })}><FontAwesomeIcon icon={faCheese} style={{ color: 'gold' }} />Add Cheese</button>
        <button onClick={() => addIngredient({ color: 'red', type: 'Tomato' })}><FontAwesomeIcon icon={faAppleWhole} style={{ color: 'red' }} />Add Tomato</button>
        <button onClick={() => addIngredient({ color: 'green', type: 'Lettuce' })}><FontAwesomeIcon icon={faLeaf} style={{ color: 'green' }} /> Add Lettuce</button>
        <button onClick={() => addIngredient({ color: 'brown', type: 'Meat' })}><FontAwesomeIcon icon={faDrumstickBite} style={{ color: 'brown' }} />Add Meat</button>
      </div>
      <p><em>Click on the ingredient you wish to remove</em><FontAwesomeIcon icon={faSmileWink} style={{ color: 'yellow' }} /></p>
    </div>
  );
};

export default App;
