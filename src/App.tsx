import React, { useContext } from 'react';
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
      <TopBread size="large" />
      <Ingredient />
      <BaseBread size="large" />
      <div className="controls">
        <button onClick={() => addIngredient({ color: 'yellow', type: 'Cheese' })}>Add Cheese</button>
        <button onClick={() => addIngredient({ color: 'red', type: 'Tomato' })}>Add Tomato</button>
        <button onClick={() => addIngredient({ color: 'green', type: 'Lettuce' })}>Add Lettuce</button>
        <button onClick={() => addIngredient({ color: 'brown', type: 'Meat' })}>Add Meat</button>
        <button onClick={() => removeIngredient('Cheese')}>Remove Cheese</button>
        <button onClick={() => removeIngredient('Tomato')}>Remove Tomato</button>
        <button onClick={() => removeIngredient('Lettuce')}>Remove Lettuce</button>
        <button onClick={() => removeIngredient('Meat')}>Remove Meat</button>
      </div>
    </div>
  );
};

export default App;
