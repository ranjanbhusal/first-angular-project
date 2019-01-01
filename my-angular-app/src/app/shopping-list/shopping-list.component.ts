import { Component, OnInit } from '@angular/core';  
import { Ingredient } from '../shared/ingredient.mode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [] =  [
    new Ingredient('potato', 2),
    new Ingredient('tomato', 2),
    new Ingredient('chickem', 2),
];
  constructor() { }

  ngOnInit() {
  }

}
