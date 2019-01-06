import { Ingredient } from '../shared/ingredient.mode';

 export class Recipe {
     public name: String;
     public description: String;
     public imageURL: String;
     public ingredients: Ingredient[];

     constructor (recipeName: String, recipeDesc: String, imageURL: String, ingredients: Ingredient[]) {
         this.name = recipeName;
         this.description = recipeDesc;
         this.imageURL = imageURL;
         this.ingredients = ingredients;
     }

 }