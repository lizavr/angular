import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'test test test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LAEih9p--b4Jgwk-iXWC7AxpnJYf8TNVSQ&usqp=CAU',
      [new Ingredient('meat', 1), new Ingredient('French Fries', 10)]
    ),
    new Recipe(
      'Second',
      'test test test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LAEih9p--b4Jgwk-iXWC7AxpnJYf8TNVSQ&usqp=CAU',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
