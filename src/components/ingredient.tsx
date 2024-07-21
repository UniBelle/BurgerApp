import React, { useContext } from 'react';
import '../assets/ingredient.css';
import { BurgerContext } from '../context/Burger';

const Ingredient: React.FC = () => {
    // Get the context value
    const context = useContext(BurgerContext);

    //an error if context is not available
    if (!context) {
        throw new Error('Ingredient must be used within a BurgerProvider');
    }

    // Destructure ingredients and removeIngredient from context
    const { ingredients, removeIngredient } = context;

    return (
        <>
            {ingredients.map((ingredient, index) => (
                <div
                    key={index}
                    className={`filling ${ingredient.type}`}
                    style={{ backgroundColor: ingredient.color }}
                    onClick={() => removeIngredient(ingredient.type)}
                >
                    {ingredient.type}
                </div>
            ))}
        </>
    );
};

export default Ingredient;



