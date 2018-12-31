 export class Recipe {
     public name: String;
     public description: String;
     public imageURL: String;

     constructor (recipeName: String, recipeDesc: String, imageURL: String) {
         this.name = recipeName;
         this.description = recipeDesc;
         this.imageURL = imageURL;
     }
 }