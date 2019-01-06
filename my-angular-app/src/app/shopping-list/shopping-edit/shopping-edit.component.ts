import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  onItemAdded() {
    const ingName = this.nameInputRef.nativeElement.value;
    const amountName = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingName, amountName);
    this.slService.onIngredientAdded(newIngredient);
  }

  ngOnInit() {
  }
 
}
