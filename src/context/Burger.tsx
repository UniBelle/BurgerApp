import React, { createContext, useState, ReactNode } from 'react';

interface Ingredient {
    color: string;
    type: string;
}

interface BurgerContextType {
    ingredients: Ingredient[];
    addIngredient: (ingredient: Ingredient) => void;
    removeIngredient: (type: string) => void;
}

const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

const BurgerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const addIngredient = (ingredient: Ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
    };

    const removeIngredient = (type: string) => {
        setIngredients((prev) => {

            const indexToRemove = prev.findIndex((ingredient) => ingredient.type === type);

            if (indexToRemove > -1) {
                return [...prev.slice(0, indexToRemove), ...prev.slice(indexToRemove + 1)];
            }
            return prev;
        });
    };

    return (
        <BurgerContext.Provider value={{ ingredients, addIngredient, removeIngredient }}>
            {children}
        </BurgerContext.Provider>
    );
};

export { BurgerContext, BurgerProvider };
