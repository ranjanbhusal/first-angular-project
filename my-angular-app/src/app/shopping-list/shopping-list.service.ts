import { Ingredient } from '../shared/ingredient.mode';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService {
    IngredientSelected = new EventEmitter <Ingredient[]>();
    private ingredients: Ingredient [] =  [
        new Ingredient('potato', 2),
        new Ingredient('tomato', 2),
        new Ingredient('chickem', 2),
    ];

    getIngredients() {
       return this.ingredients.slice(); 
    }

    onIngredientAdded (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientSelected.emit(this.ingredients.slice());
    }

    IngredientsAdded (ingredients: Ingredient []) {
        this.ingredients.push(...ingredients);
        this.IngredientSelected.emit(this.ingredients.slice());
    }
}