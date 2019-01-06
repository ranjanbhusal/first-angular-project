import { Recipe } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe',
         'test desc test desc', 
         'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.1024;768;7;70;3.jpg', 
            [
                new Ingredient ('meat',1), 
                new Ingredient ('Bread', 2)
            ]),
        new Recipe('Another test recipe', 
        'test desc', 
        'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg', 
            [
                new Ingredient ('meat',1), 
                new Ingredient ('Buns', 2)
            ])
        ];  
    
      getRecipes() {
          return this.recipes.slice();
      }
}