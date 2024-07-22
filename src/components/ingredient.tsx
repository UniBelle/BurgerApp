import React, { useContext } from 'react';
import '../assets/ingredient.css';
import { BurgerContext } from '../context/Burger';

// Define the component
const Ingredient: React.FC = () => {
    // Access the context value
    const { ingredients, removeIngredient } = useContext(BurgerContext);

    // Throw an error if the context is not available
    if (!ingredients || !removeIngredient) {
        throw new Error('Ingredient must be used within a BurgerProvider');
    }

    return (
        <>
            {ingredients.map((ingredient, index) => (
                <div
                    key={index}
                    className={`filling ${ingredient.type}`}
                    style={{ backgroundColor: ingredient.color }} // Consider moving this style to a CSS class if applicable
                    onClick={() => removeIngredient(ingredient.type)}
                >
                    {ingredient.type}
                </div>
            ))}
        </>
    );
};

export default Ingredient;



