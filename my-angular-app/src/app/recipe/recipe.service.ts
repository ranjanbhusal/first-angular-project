import { Recipe } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';

export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'test desc test desc', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.1024;768;7;70;3.jpg'),
        new Recipe('Another test recipe', 'test desc', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.1024;768;7;70;3.jpg')
      ];  

      getRecipes() {
          return this.recipes.slice();
      }
}